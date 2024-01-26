const asyncHandler = require("../utils/async-handler");
const ApiError = require("../utils/ApiError");
const User = require("../models/user.model");
const uploadOnCloudinary = require("../utils/cloudinary");
const ApiResponse = require("../utils/ApiResponse");
const jwt = require("../middlewares/auth.middleware");

// since we are going to use the customer methods for generating access and refresh tokens.
// its best practice to make a method for that.
// would be a best practise to move this to util folders as well. might do that later.
async function generateAccessAndRefreshToken(userId) {
   try {
      const user = await User.findById(userId);
      const accessToken = user.generateAccessToken();
      const refreshToken = user.generateRefreshToken();

      // we are saving the refresh token in the dbs, since we have defined that refreshToken
      // property in the model.
      user.refreshToken = refreshToken;
      await user.save({ validateBeforeSave: false });

      return {
         accessToken,
         refreshToken,
      };
   } catch (error) {
      throw new ApiError(
         500,
         "Something went wrong while generating access and refresh tokens"
      );
   }
}

const register = asyncHandler(async (req, res, next) => {
   // To Do:
   // get use details from frontend.
   // validations.
   // check existing users.
   // check avatar.
   // upload them to cloudinary and retreive the url and check avatar.
   // create user object using model.
   // remove password and refresh token field from response.

   const { fullname, username, email, password } = req.body;
   if (
      [fullname, username, email, password].some((fields) => {
         return fields === undefined || fields?.trim() === "";
      })
   ) {
      throw new ApiError(400, "Please fill all fields");
   }

   const existingUser = await User.findOne({ $or: [{ email }, { username }] });

   if (existingUser) {
      // 409 is the status code for conflict.
      throw new ApiError(409, "User already exists");
   }
   /*
   req.files?: It checks if req.files is defined before attempting to access the avatar property. 
   If req.files is undefined or null, the expression short-circuits, 
   and avatarLocalPath becomes undefined.

   ?.avatar[0]?: It checks if avatar is defined on the result of req.files. 
   If avatar is not defined or is null, the expression short-circuits again, 
   and avatarLocalPath remains undefined.

   ?.path: Finally, it checks if the first element of the avatar array has a path property. 
   If the array is empty, or if path is not defined on the first element, 
   the expression short-circuits, and avatarLocalPath remains undefined.

   It's a concise way to handle potentially missing properties in 
   nested structures without having to manually check each level for existence. 
   The overall expression evaluates to undefined if any part of the chain is not present.
  */

   // here we are grabbing the path of the avatar image that we have uploaded to the server.
   const avatarLocalPath = req.files?.avatar[0]?.path;
   console.log(req.files);
   console.log(req.files.avatar);

   let coverImageLocalPath;
   if (
      req.files &&
      Array.isArray(req.files.coverImage) &&
      req.files.coverImage.length > 0
   ) {
      coverImageLocalPath = req.files.coverImage[0].path;
   }

   if (!avatarLocalPath) {
      throw new ApiError(400, "Please upload avatar");
   }

   // now we have to upload this image to cloudinary.
   const uploadedAvatar = await uploadOnCloudinary(avatarLocalPath);
   const uploadedCoverImage = await uploadOnCloudinary(coverImageLocalPath);

   // if we fail to upload it on cloudinary then we throw an error.
   if (!uploadedAvatar) {
      throw new ApiError(500, "Failed to upload avatar");
   }

   // when we create a doc, mongodb will return the _id in this user variable.
   const user = await User.create({
      fullname: fullname,
      avatar: uploadedAvatar.url,
      // here its not mandatory that we have a cover image , so we check if its not
      // undefined then we set the url by which is stored in cloudinary or we just keep it empty.
      coverImage: uploadedCoverImage?.url || "",
      email: email,
      username: username.toLowerCase(),
      password: password,
   });

   // we want to exclude password and refresh token, so we use this select method.
   // by default it selects everything so we use this weird syntax to select which
   // all properties from that object we want to exclude.
   const createdUser = await User.findById(user._id).select("-password -refreshToken");

   if (!createdUser) {
      throw new ApiError(500, "Something went during User registration.");
   }

   return res
      .status(201)
      .json(new ApiResponse(200, createdUser, "User was successfully registered"));
});

const loginUser = asyncHandler(async (req, res) => {
   // To do:
   // take data from req.body
   // username or emaill
   // check existing user.
   // if exists, then check password else throw err
   // if true , then add access and refresh.
   // send cookie
   const { email, password } = req.body;

   if (!email) {
      throw new ApiError(400, "email is required");
   }

   let existingUser = await User.findOne({
      $or: [{ email }],
   });

   if (!existingUser) {
      throw new ApiError(404, "User does not exist");
   }

   // we are gonna use our custom methods that we defined.
   // while using  User (our model) methods, we are using pre-existing mongoose/method methods.
   // so when we wanna use our custom methods we use the 'existingUser' object in which
   // the data loaded from the dbs is stored.

   const check = await existingUser.isPasswordValid(password);
   if (!check) {
      throw new ApiError(401, "Incorrect password, Try again!");
   }

   // rule of thumb, anything that we may know will take time , needs to be awaited.
   const { refreshToken, accessToken } = await generateAccessAndRefreshToken(
      existingUser._id
   );

   // we want to send some data as resposne.
   // now we did save the refreshToken in the dbs of this user when we made that call.
   // but the current 'user' object in this scope does not have it inside.
   // we could add that property or we could make a dbs call, here the latter is done, but
   // practically i would just test it and modify the 'user' object and update the properties over here.

   existingUser = await User.findById(existingUser._id).select("-password -refreshToken");

   // designing some options for our cookies.
   const options = {
      httpOnly: true,
      secure: true,
   };

   return res
      .status(200)
      .cookie("accessToken", accessToken, options)
      .cookie("refreshToken", refreshToken, options)
      .json(
         new ApiResponse(
            200,
            {
               user: existingUser,
               accessToken,
               refreshToken,
            },
            "User logged in successfully"
         )
      );
});

const logoutUser = asyncHandler(async (req, res) => {
   // now we will update the refresh token and reset it or make it undefined/null.
   await User.findByIdAndUpdate(
      req.user._id,
      {
         $set: {
            refreshToken: undefined,
         },
      },
      {
         // this paramter will return the newly updated response to be able to store in
         // a variable but we are not storing right now for updating.
         new: true,
      }
   );
   const options = {
      httpOnly: true,
      secure: true,
   };

   return res
      .status(200)
      .clearCookie("accessToken", options)
      .clearCookie("refreshToken", options)
      .json(new ApiResponse(200, {}, "User logged out successfully"));
});

// so idea is that , when this access token expires, instead of telling the user to
// re login, the frontend UI will instead allow the user to hit some endpoint/url such that
// the accessToken be refreshed. in this endpoint we will compare the refreshtoken at the database
// and the refresh token of the user to give the user a new accessToken.

const refreshAccessToken = asyncHandler(async (req, res) => {
   // this or is for mobile users , lets say their token is in the body.
   const incomingRefreshToken = req.cookies.refreshToken || req.body.refreshToken;

   if (!incomingRefreshToken) {
      throw new ApiError(401, "Unauthorized request");
   }

   // now this try block is not necessary but it is a cautinionary move.
   // also i still have doubts about why we should use even use try block since we have async handler.
   try {
      const decodedToken = jwt.verify(
         incomingRefreshToken,
         process.env.REFRESH_TOKEN_SECRET
      );

      const user = await User.findById(decodedToken?._id);

      if (!user) {
         throw new ApiError(401, "Invalid refresh token");
      }

      if (incomingRefreshToken !== user.refreshToken) {
         throw new ApiError(401, "Refresh token is expired or Invalid");
      }

      const options = {
         httpOnly: true,
         secure: true,
      };

      const { accessToken, newRefreshToken } = await generateAccessAndRefreshToken(
         user._id
      );

      return res
         .status(200)
         .cookie("accessToken", accessToken, options)
         .cookie("refreshToken", newRefreshToken, options)
         .json(
            new ApiResponse(
               200,
               { accessToken, newRefreshToken },
               "accessToken refreshed!"
            )
         );
   } catch (error) {
      throw new ApiError(401, "Invalid refreshToken");
   }
});

const changeCurrentPassword = asyncHandler(async (req, res) => {
   const { oldPassword, newPassword } = req.body;

   // We will make this route go through verifyJWT middleware.
   // from there if you see again , we sent user object on the req.body.
   // the other way to get user id would be to take access of our cookie.

   const user = await User.findById(req.user?._id);

   const isPasswordCorrect = await user.isPasswordValid(oldPassword);

   if (!isPasswordCorrect) {
      throw new ApiError(400, "Invalid current password");
   }

   // [When we are making a change in this user object, the isModified password is triggered]
   user.password = newPassword;

   await user.save({ validateBeforeSave: false });

   return res.status(200).json(new ApiResponse(200, {}, "Password changed successfuly"));
});

const getCurrentUser = asyncHandler(async (req, res) => {
   // since this route will also go through the verifyJWT middle ware.
   // the req will have the user object.
   return res
      .status(200)
      .json(new ApiResponse(200, req.user), "Current user fetched successfully");
});

module.exports = {
   register,
   loginUser,
   logoutUser,
   refreshAccessToken,
   changeCurrentPassword,
   getCurrentUser,
};
