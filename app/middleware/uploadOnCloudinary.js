const { request } = require('express');
const cloudinary = require('../../config/cloudinary');


handleUploadImage = async (req, res, next) => {
  const fileBase64 = await req.file.buffer.toString('base64');
  const file = `data:${req.file.mimetype};base64,${fileBase64}`;

  cloudinary.uploader.upload(file, function (err, result) {
    if (!!err) {
      console.log(err);
      return res.status(400).json({
        message: 'Upload is failed!',
      });
    }


    req.img = result.url;
    next();
  });
}

module.exports = handleUploadImage;
