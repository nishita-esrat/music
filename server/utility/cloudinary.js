// set up cloudinary
const cloudinary = require("cloudinary").v2;
// Configure your Cloudinary credentials
cloudinary.config({
  cloud_name: process.env.cloudinary_cloud_name,
  api_key: process.env.cloudinary_api_key,
  api_secret: process.env.cloudinary_api_secret,
});
// upload image function
const uploadImageCloudinary = async (image, folderName) => {
  const result = await cloudinary.uploader.upload(image, {
    folder: folderName,
  });
  return result;
};

// delete image function
const deleteImageCloudinary = async (publicId) => {
  const result = await cloudinary.uploader.destroy(publicId);
  return result;
};

module.exports = { uploadImageCloudinary, deleteImageCloudinary };
