const mongoose = require("mongoose");

const NewsSchema = new mongoose.Schema(
  {
    title: {
      required: true, 
      type: String,
    },
    images: [
      {
        imageUrl: { type: String, required: true }, 
        paragraph: { type: String, required: true }, 
      },
    ],
    date: {
      type: String,
      required: true, 
    },
  },
  { timestamps: true }
);

const NewsModel = mongoose.model("News", NewsSchema);

module.exports = NewsModel;