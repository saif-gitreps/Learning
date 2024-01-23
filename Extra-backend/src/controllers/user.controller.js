const asyncHandler = require("../utils/async-handler");

const register = asyncHandler(async (req, res, next) => {
   // get use details from frontend.
   // validations.
   // check existing users.
   // check avatar.
   // upload them to cloudinary and retreive the url and check avatar.
   // create user object using model.
   // remove password and refresh token field from response.

   const { fullname, username, email, password } = req.body;

   res.status(200).json({
      message: "ok",
   });
});

module.exports = {
   register,
};
