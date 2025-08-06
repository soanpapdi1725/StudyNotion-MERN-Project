const cloudinary = require("cloudinary").v2;

exports.imageUploadToCloudinary = async (
  file,
  folder,
  height,
  quality,
  oldPublicId = null
) => {
  if (oldPublicId) {
    const resource_types = ["video", "image"];
    let deleted = false;
    try {
      for (const type of resource_types) {
        const deletionResult = await cloudinary.uploader.destroy(oldPublicId, {
          resource_type: type,
        });
        if (deletionResult.result === "ok") {
          deleted = true;
          break;
        }
      }
      if (!deleted) {
        console.log(`Failed in deletion of ${type} and file ${oldPublicId}`);
      }
    } catch (error) {
      console.log(`Error while deletion of file ${oldPublicId}`);
    }
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
  const imageUploaded = await cloudinary.uploader.upload(
    file.tempFilePath,
    options
  );
  return imageUploaded;
};

exports.imageAndVideoDeleteFromCloudinary = async (oldPublicId) => {
  const resource_types = ["video", "image"];
  let deleted = false;
  try {
    for (const type of resource_types) {
      const deletionResult = await cloudinary.uploader.destroy(oldPublicId, {
        resource_type: type,
      });
      if (deletionResult.result === "ok") {
        deleted = true;
        return deletionResult;
      }
    }
    if (!deleted) {
      console.log(`Failed in deletion of ${type} and file ${oldPublicId}`);
    }
  } catch (error) {
    console.log(`Error while deletion of file ${oldPublicId}`);
  }
};
