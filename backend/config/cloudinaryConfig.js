const cloudinary = require("cloudinary").v2;
const { CloudinaryStorage } = require("multer-storage-cloudinary");
const multer = require("multer");

require("dotenv").config();

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

// --- 🖼️ IMAGE STORAGE ---
const imageStorage = new CloudinaryStorage({
  cloudinary: cloudinary,
  params: {
    folder: "ott_platform/images",
    allowed_formats: ["jpg", "png", "jpeg", "webp"],
    resource_type: "image", // இமேஜ் மட்டும்
  },
});

// --- 🎥 VIDEO STORAGE ---
const videoStorage = new CloudinaryStorage({
  cloudinary: cloudinary,
  params: {
    folder: "ott_platform/videos",
    resource_type: "video", // மிக முக்கியம்: இதுதான் வீடியோவாகச் சேமிக்க உதவும்
    allowed_formats: ["mp4", "mkv", "mov", "avi"], // வீடியோ பார்மெட்கள்
  },
});

// 2. Multer Middlewares
const uploadImage = multer({
  storage: imageStorage,
  limits: { fileSize: 5 * 1024 * 1024 }, // 5MB for images
});

const uploadVideo = multer({
  storage: videoStorage,
  limits: { fileSize: 100 * 1024 * 1024 }, // 100MB for videos (உங்களுக்கு ஏற்றவாறு மாற்றிக்கொள்ளலாம்)
});

module.exports = {
  cloudinary,
  uploadImage,
  uploadVideo,
};
