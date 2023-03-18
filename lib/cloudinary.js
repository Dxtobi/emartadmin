const cloudinary = require('cloudinary').v2;

//Configuration 
cloudinary.config({
  cloud_name: "dmvgshx0v",
  api_key: "571397774762428",
  api_secret: "IDCxiA1uK51T3M6fXgZ0D4Nohbo"
});

// Upload
export function uploadImage(imageUploaded) {
    return new Promise((resolve, reject) => {
      cloudinary.uploader.upload(
        imageUploaded,
        { width: 400, height: 300, crop: "fill" },
        (err, res) => {
          if (err) reject(err);
          resolve(res);
        }
      );
    });
  }