import { v2 as cloudinary } from "cloudinary";
import fs from "fs";

cloudinary.config({
  cloud_name: "dlv5gx3io",
  api_key: "121559211414816",
  api_secret: "Bt-xOo-t-BeL6hM6ZTJ_xBjkoFs",
});

// cloudinary.config({
//   cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
//   api_key: process.env.CLOUDINARY_API_KEY,
//   api_secret: process.env.CLOUDINARY_API_SECRET,
// });

export async function uploadToCloudinary(localPath) {
  try {
    console.log(localPath);

    if (!localPath) {
      return null;
    }
    const res = await cloudinary.uploader.upload(localPath, {
      folder: "gracathon",
      resource_type: "auto",
    });

    console.log(res);

    fs.unlinkSync(localPath);

    return res;
  } catch (error) {
    console.log(error);

    fs.unlinkSync(localPath);
    return null;
  }
}
