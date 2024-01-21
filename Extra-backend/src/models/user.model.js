const mongoose = require("moongoose");
const userSchema = new mongoose.Schema(
   {
      username: {
         type: String,
         required: true,
         unique: true,
         lowercase: true,
         trim: true,
         //basically makes a field/property easier to search if you're gonna search it frequently.
         //it makes it optimized although it is expensive
         index: true,
      },
      email: {
         type: String,
         required: true,
         unique: true,
         lowercase: true,
         trim: true,
      },
      fullname: {
         type: String,
         required: true,
         trim: true,
         index: true,
      },
      avatar: {
         type: String, // will store cloudinary URLs of our avatar
         required: true,
      },
      coverImage: {
         type: String, // cloudinary url
      },
      watchHistory: {
         type: [
            {
               type: mongoose.Schema.ObjectId,
               ref: "Video",
            },
         ],
      },
      password: {
         type: String,
         required: [true, "Password cannot be empty"],
      },
      refreshToken: {
         type: String,
      },
   },
   { timestamps: true }
);

const User = mongoose.model("User", userSchema);

module.exports = User;
