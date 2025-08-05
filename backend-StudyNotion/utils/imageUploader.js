const cloudinary = require("cloudinary").v2;

exports.imageUploadToCloudinary = async (file, folder, height, quality, oldPublicId = null) => {
  if(oldPublicId){
    await cloudinary.uploader.destroy(oldPublicId)
  }
  const options = { folder };
  if (height) {
    options.height = height;
  }
  if (quality) {
    options.quality = quality;
  }
  options.resource_type = "auto";
  console.log(file.tempFilePath);
  return await cloudinary.uploader.upload(file.tempFilePath, options);
};
