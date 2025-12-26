// 1. அனைத்து வீடியோக்களையும் பெறுதல் (ADMIN READ)

const VideoSection = require("../../models/HomePage/VideoSection");

exports.getAllVideos = async (req, res) => {
  try {
    const videoList = await VideoSection.findAll({
      order: [["order", "ASC"]],
    });
    return res.status(200).json(videoList);
  } catch (error) {
    console.error("Error fetching video sections:", error);
    return res.status(500).json({ message: "Failed to fetch video sections" });
  }
};

// 2. புதிய வீடியோ பேனரை உருவாக்குதல் (CREATE)
exports.createVideoSection = async (req, res) => {
  try {
    // Multer .fields() பயன்படுத்துவதால் req.files-இல் இருந்து டேட்டா எடுக்க வேண்டும்
    if (!req.files || !req.files["bannerImage"]) {
      return res.status(400).json({ message: "Banner image is mandatory" });
    }

    const { title, shortDescription, order, isActive } = req.body;

    // Image data
    const bannerImage = req.files["bannerImage"][0].path;
    const imagePublicId = req.files["bannerImage"][0].filename;

    // Video data (Optional check)
    let videoUrl = null;
    let videoPublicId = null;

    if (req.files["videoUrl"]) {
      videoUrl = req.files["videoUrl"][0].path;
      videoPublicId = req.files["videoUrl"][0].filename;
    }
  } catch (error) {}
};
