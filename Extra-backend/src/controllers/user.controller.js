const asyncHandler = require("../utils/async-handler");
const ApiError = require("../utils/ApiError");
const User = require("../models/user.model");
const uploadOnCloudinary = require("../utils/cloudinary");
const ApiResponse = require("../utils/ApiResponse");

// since we are going to use the customer methods for generating access and refresh tokens.
// its best practice to make a method for that.
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
   const { username, email, password } = req.body;

   if (!username || !email) {
      throw new ApiError(400, "email/username is required");
   }

   const existingUser = await User.findOne({
      $or: [{ email }, { username }],
   });

   if (!existingUser) {
      throw new ApiError(404, "User does not exist");
   }

   // we are gonna use our custom methods that we defined.
   // while using  User (our model) methods, we are using pre-existing mongoose/method methods.
   // so when we wanna use our custom methods we use the 'existingUser' object in which
   // the data loaded from the dbs is stored.

   if (!(await user.isPasswordValid(password))) {
      throw new ApiError(401, "Incorrect password, Try again!");
   }

   // rule of thumb, anything that we may know will take time , needs to be awaited.
   const { refreshToken, accessToken } = await generateAccessAndRefreshToken(user._id);

   // we want to send some data as resposne.
   // now we did save the refreshToken in the dbs of this user when we made that call.
   // but the current 'user' object in this scope does not have it inside.
   // we could add that property or we could make a dbs call, here the latter is done, but
   // practically i would just test it and modify the 'user' object and update the properties over here.

   user = await User.findById(user._id).select("-password -refreshToken");

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
               user: user,
               accessToken,
               refreshToken,
            },
            "User logged in successfully"
         )
      );
});

const logoutUser = asyncHandler(async (req, res) => {});

module.exports = {
   register,
   loginUser,
   logoutUser,
};
