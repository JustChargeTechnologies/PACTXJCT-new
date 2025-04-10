// const newsModel=require('../models/NewsModel.js')
const cloudinary = require("cloudinary");
const NewsModel = require("../models/NewsModel.js");

module.exports.AddNews = async (req, res) => {
  try {
    if (!req.files || !req.files.images) {
      return res.status(400).json({ message: "NO IMAGESS" });
    }
    const imagesFiles = Array.isArray(req.files.images)
      ? req.files.images
      : [req.files.images];
    const { title, paragraph, date } = req.body;
    const paragraphs = JSON.parse(paragraph);
    if (imagesFiles.length !== paragraphs.length) {
      return res.status(400).json({ message: "both length is diffent" });
    }
    let uploadImages = [];
    const allowedFormats = ["image/png", "image/jpeg", "image/webp"];
    for (let i = 0; i < imagesFiles.length; i++) {
      if (!allowedFormats.includes(imagesFiles[i].mimetype)) {
        return res.status(400).json({ message: "File Format Not Supported!" });
      }
      const cloudinaryResponse = await cloudinary.uploader.upload(
        imagesFiles[i].tempFilePath
      );
      uploadImages.push({
        imageUrl: cloudinaryResponse.secure_url,
        paragraph: paragraphs[i],
      });
    }
    const addNews = await NewsModel.create({
      title,
      images: uploadImages,
      date,
    });
    // console.log(addNews);

    res.status(201).json({ message: "Images uploaded successfully", addNews });
  } catch (error) {
    console.error("AddNews Error:", error);
    return res.status(500).json({ message: "Internal Server Error" });
  }
};

module.exports.GetNews = async (req, res) => {
  try {
    const news = await NewsModel.find({});
    res.status(200).json(news);
  } catch (error) {
    console.error("GetNews Error:", error);
    return res.status(500).json({ message: "Internal Server Error" });
  }
};

module.exports.GetSingleNews = async (req, res) => {
  try {
    const { id } = req.params;
    const news = await NewsModel.findById(id);
    res.status(200).json(news);
  } catch (error) {
    console.error("GetSingleNews Error:", error);
    return res.status(500).json({ message: "Internal Server Error" });
  }
};

