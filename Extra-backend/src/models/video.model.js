const mongoose = require("moongoose");

const videoSchema = new mongoose.Schema(
   {
      videoFile: {
         type: String, // cloudinary URL
         required: true,
      },
      thumbnail: {
         type: String, // cloudinary URL
         required: true,
      },
      title: {
         type: String,
         required: true,
      },
      description: {
         type: String,
         required: true,
      },
      duration: {
         type: Number, // cloudinary url <- from the video file info we will take this info
         required: true,
      },
      views: {
         type: Number,
         default: 0,
      },
      isPublished: {
         type: Boolean,
         default: true,
      },
      owner: {
         type: mongoose.Schema.Types.ObjectId,
         ref: "User",
      },
   },
   {
      timestamps: True,
   }
);

const Video = mongoose.model("Video", videoSchema);

module.exports = Video;
