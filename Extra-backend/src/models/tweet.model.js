const mongoose = require("mongoose");

const tweetSchema = new mongoose.Schema(
   {
      content: {
         type: String,
         required: true,
      },
      owner: {
         types: mongoose.Schema.Types.ObjectId,
         required: true,
      },
   },
   {
      timestamps: true,
   }
);

const Tweet = mongoose.model("Tweet", tweetSchema);

module.exports = Tweet;
