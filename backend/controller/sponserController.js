const cloudinary = require("cloudinary");
const sponserModel = require("../models/SponserModel.js");

module.exports.AddSponser = async (req, res) => {
  try {
    if (!req.files || Object.keys(req.files).length == 0) {
      return res.status(400).json({ message: "File not uploaded" });
    }
    const { sponserImg, extraImage } = req.files;
    const allowedFormats = ["image/png", "image/jpeg", "image/webp"];
    if (!allowedFormats.includes(sponserImg.mimetype)) {
      return res.status(400).json({ message: "File Format Not Supported!" });
    }
    const extraImagesArray = extraImage
    ? Array.isArray(extraImage)
      ? extraImage
      : [extraImage]
    : [];

    for (const image of extraImagesArray) {
      if (!allowedFormats.includes(image.mimetype)) {
        return res.status(400).json({
          message: "One or more extra images have unsupported formats!",
        });
      }
    }

    const uploadedExtraImages = [];
    for (const image of extraImagesArray) {
      const uploadResponse = await cloudinary.uploader.upload(
        image.tempFilePath
      );
      if (!uploadResponse || uploadResponse.error) {
        console.error(
          "Cloudinary Error:",
          uploadResponse.error || "Unknown Cloudinary Error"
        );
        return res
          .status(500)
          .json({ message: "Failed to upload extra images to Cloudinary" });
      }
      uploadedExtraImages.push({ Url: uploadResponse.secure_url });
    }

    const { title, description, about, country, city } = req.body;
    if (!title || !description || !about || !country || !city) {
      return res.status(400).json({ message: "Fill Full Form" });
    }
    const cloudinaryResponse = await cloudinary.uploader.upload(
      sponserImg.tempFilePath
    );
    if (!cloudinaryResponse || cloudinaryResponse.error) {
      console.error(
        "Cloudinary Error:",
        cloudinaryResponse.error || "Unknown Cloudinary Error"
      );
      return res
        .status(500)
        .json({ message: "Failed to upload image to Cloudinary" });
    }

    const sponser = await sponserModel.create({
      title,
      description,
      about,
      country,
      city,
      imgUrl: {
        public_id: cloudinaryResponse.public_id,
        url: cloudinaryResponse.secure_url,
      },
      images: uploadedExtraImages,
    });
    res.status(200).json({
      message: "New sponser added",
      sponser,
    });
  } catch (error) {
    console.log("Add Sponser Error", error);
    return res.status(500).json({ message: "Internal Server Error" });
  }
};

module.exports.GetSponser = async (req, res) => {
  try {
    const sponsers = await sponserModel.find({});
    res.status(200).json(sponsers);
  } catch (error) {
    console.error("Error in Getsponser:", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};


module.exports.GetSingleSponsor = async (req, res) => {
  try {
    const { id } = req.params;
    const sponsor = await sponserModel.findById(id);
    res.status(200).json(sponsor);
  } catch (error) {
    console.error("GetSingleSponsor Error:", error);
    return res.status(500).json({ message: "Internal Server Error" });
  }
};


