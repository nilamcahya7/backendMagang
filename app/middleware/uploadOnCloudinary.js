const { request } = require('express');
const cloudinary = require('../../config/cloudinary');

handleUploadImage = async (req, res, next) => {
  const uploader = [];
  for (let i = 0; i < req.files.length; i++) {
    const fileBase64 = await req.files[i].buffer.toString('base64');
    const file = `data:${req.files[i].mimetype};base64,${fileBase64}`;

    await cloudinary.uploader.upload(file, (err, result) => {
      if (err) {
        return res.status(400).json({ message: 'Upload is failed!' });
      }
      uploader.push(result.url);
    });
  }
  req.img = uploader;
  next();
};

module.exports = handleUploadImage;
