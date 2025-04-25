const express = require("express");
const router = express.Router();
const Gallery = require("../models/galleryModel");
const upload = require("../middleware/upload"); // Assuming middleware for image upload is implemented

// 🔹 Get All Gallery Items
router.get("/", async (req, res) => {
  try {
    const galleryItems = await Gallery.find();
    res.status(200).json(galleryItems);
  } catch (err) {
    res.status(500).json({ message: "Failed to fetch gallery items." });
  }
});

// 🔹 Get Single Gallery Item
router.get("/:id", async (req, res) => {
  try {
    const galleryItem = await Gallery.findById(req.params.id);
    if (!galleryItem) return res.status(404).json({ message: "Gallery item not found." });
    res.status(200).json(galleryItem);
  } catch (err) {
    res.status(500).json({ message: "Failed to fetch gallery item." });
  }
});

// 🔹 Add New Gallery Item
router.post("/", upload.single("image"), async (req, res) => {
  try {
    const { title, description } = req.body;
    const image = req.file.path; // Path where the uploaded image is stored
    const newGalleryItem = new Gallery({ title, description, image:req.file.filename });
    await newGalleryItem.save();
    res.status(201).json(newGalleryItem);
  } catch (err) {
    res.status(500).json({ message: "Failed to add gallery item." });
  }
});

// 🔹 Update Gallery Item
router.put("/:id", upload.single("image"), async (req, res) => {
  try {
    const { title, description } = req.body;
    const image = req.file ? req.file.path : undefined; // Update image only if provided
    const updatedData = image ? { title, description, image } : { title, description };
    const galleryItem = await Gallery.findByIdAndUpdate(req.params.id, updatedData, { new: true });
    if (!galleryItem) return res.status(404).json({ message: "Gallery item not found." });
    res.status(200).json(galleryItem);
  } catch (err) {
    res.status(500).json({ message: "Failed to update gallery item." });
  }
});

// 🔹 Delete Gallery Item
router.delete("/:id", async (req, res) => {
  try {
    const galleryItem = await Gallery.findByIdAndDelete(req.params.id);
    if (!galleryItem) return res.status(404).json({ message: "Gallery item not found." });
    res.status(200).json({ message: "Gallery item deleted successfully." });
  } catch (err) {
    res.status(500).json({ message: "Failed to delete gallery item." });
  }
});

module.exports = router;
