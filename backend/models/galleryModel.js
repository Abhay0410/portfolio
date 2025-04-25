const mongoose = require("mongoose");

const gallerySchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    image: {
      type: String,
      required: true, // Store the image file path
    },
  },
  { timestamps: true } // Automatically add createdAt and updatedAt
);

module.exports = mongoose.model("Gallery", gallerySchema);
