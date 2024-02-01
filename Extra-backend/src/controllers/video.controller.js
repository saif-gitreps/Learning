const asyncHandler = require("../utils/async-handler");
const Video = require("../models/video.model");
const User = require("../models/user.model");
const { uploadOnCloudinary } = require("../utils/cloudinary");
const ApiError = require("../utils/ApiError");
const ApiResponse = require("../utils/ApiResponse");
const mongoose = require("mongoose");

const getAllVideos = asyncHandler(async (req, res) => {
   const { page = 1, limit = 10, query, sortBY, sortType, userId } = req.body;
   //TODO: get all videos based on query, sort, pagination
   const skip = (page - 1) * limit;
   const match = {};
   const sort = {};
   if (query) {
      match.$text = { $search: query };
   }
   if (sortBY) {
      // sortyBy can dateAdded, views, title, owner's username
      sort[sortBY] = sortType;
   }
   if (userId) {
      match.owner = userId;
   }
   const videos = await Video.aggregate([
      {
         $match: match,
      },
      {
         $sort: sort,
      },
      {
         $skip: skip,
      },
      {
         $limit: limit,
      },
      {
         /*
         In MongoDB aggregation, the $lookup stage is used primarily when you need to perform a left outer join with documents from another collection. It's useful when you want to enrich your documents with additional data that is not directly present in the current collection.
         */
         $lookup: {
            from: "users",
            localField: "owner",
            foreignField: "_id",
            as: "owner",
         },
      },
      {
         /*
         The $unwind stage is typically used when you have an array field in your documents and you want to "flatten" or deconstruct that array field into multiple documents, each containing one element of the array. This is useful when you want to perform operations or projections on individual elements of the array.

         In your case, the $lookup stage joins documents from the "users" collection with documents from the "videos" collection based on the owner field. After the $lookup stage, the owner field becomes an array of user documents.

         The $unwind stage is used to deconstruct this array field owner into multiple documents, each containing one user document. This allows subsequent stages, such as $project, to access and manipulate fields within the owner array.

         However, if you're certain that each document in your "videos" collection has only one corresponding user document in the "users" collection (i.e., the owner field is not an array, but a single reference to a user document), then using $unwind is not strictly necessary.
         */
         // comment this unwind and console.log the videos to see the difference
         $unwind: "$owner",
      },
      {
         $project: {
            _id: 1,
            videoFile: 1,
            thumbnail: 1,
            owner: {
               username: 1,
               avatar: 1,
            },
            title: 1,
            description: 1,
            duration: 1,
            views: 1,
            createdAt: 1,
         },
      },
   ]);

   if (!videos.length || !videos) {
      throw new ApiError(404, "No videos found");
   }

   return res
      .status(200)
      .json(new ApiResponse(200, videos, "Successfully fetched videos based on query."));
});

const publishAVideo = asyncHandler(async (req, res) => {
   const { title, description } = req.body;
   // we will get thumbnail and the video using multer
   if (!title && !description) {
      throw new ApiError(400, "Title and Description are required.");
   }

   const thumbnailLocalPath = req.files.thumbnail[0].path;
   const videoLocalPath = req.files.video[0].path;

   if (!thumbnailLocalPath) {
      throw new ApiError(400, "Thumnail is required.");
   }
   if (!videoLocalPath) {
      throw new ApiError(400, "Video is required.");
   }

   const uploadedThumbnail = await uploadOnCloudinary(thumbnailLocalPath);
   const uploadedVideo = await uploadOnCloudinary(videoLocalPath);

   console.log(uploadedThumbnail);
   console.log(uploadedVideo);

   if (!uploadedThumbnail && !uploadedVideo) {
      throw new ApiError(
         400,
         "Failure while uploading thumbnail or video on Cloud.Try again!"
      );
   }

   const newVideo = await Video.create({
      videoFile: uploadedVideo?.url,
      thumbnail: uploadedThumbnail?.url,
      title: title,
      description: description,
      duration: uploadedVideo.duration,
      owner: req.user._id,
   });

   if (!newVideo) {
      throw new ApiError(400, "failure uploading video on the platfrom.");
   }

   return res
      .status(200)
      .json(200, new ApiResponse(200, newVideo, "Video uploaded successfully."));
});

module.exports = {
   getAllVideos,
   publishAVideo,
};
