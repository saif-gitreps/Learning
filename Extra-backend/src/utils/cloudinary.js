const cloudinary = require("cloudinary").v2;
const fs = require("fs");

cloudinary.config({
   cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
   api_key: process.env.CLOUDINARY_API_KEY,
   api_secret: process.env.CLOUDINARY_API_SECRET,
});

const uploadOnCloudinary = async (localFilePath) => {
   try {
      if (!localFilePath) {
         return null;
      }
      // next step upload the file on cloudinary.
      const response = await cloudinary.uploader.upload(localFilePath, {
         // could be anything like img,vid, so put auto.
         resource_type: "auto",
      });
      console.log("File uploaded on cloudinary: " + response.url);
      return response;
   } catch (error) {
      // fs has this unlink option. this will remove the locally saved temporary file
      // as the upload operation got failed.
      // unlink is deleting the file.
      fs.unlinkSync(localFilePath);
      return null;
   }
};

module.exports = uploadOnCloudinary;
