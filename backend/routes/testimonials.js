const express = require("express");
const router = express.Router();
const Testimonial = require("../models/Testimonial");
const verifyToken = require("../middleware/verifyToken"); // Authentication Middleware
require("dotenv").config();

// ✅ Get all testimonials
router.get("/", async (req, res) => {
  try {
    const testimonials = await Testimonial.find();
    res.json(testimonials);
  } catch (err) {
    res.status(500).json({ message: "Error fetching testimonials" });
  }
});

// ✅ Add a new testimonial (Admin Only)
router.post("/", async (req, res) => {
  try {
    const { message, name, title } = req.body;
    const newTestimonial = new Testimonial({ message, name, title });
    await newTestimonial.save();
    res.status(201).json(newTestimonial);
  } catch (err) {
    console.error("Error creating testimonial:", err);
    res.status(400).json({ message: "Error creating testimonial" });
  }
});

// ✅ Update a testimonial (Admin Only)
router.put("/:id", verifyToken, async (req, res) => {
  try {
    const updatedTestimonial = await Testimonial.findByIdAndUpdate(
      req.params.id, req.body, { new: true }
    );
    res.json(updatedTestimonial);
  } catch (err) {
    res.status(400).json({ message: "Error updating testimonial" });
  }
});

// ✅ Delete a testimonial (Admin Only)
router.delete("/:id", verifyToken, async (req, res) => {
  try {
    await Testimonial.findByIdAndDelete(req.params.id);
    res.json({ message: "Testimonial deleted" });
  } catch (err) {
    res.status(400).json({ message: "Error deleting testimonial" });
  }
});

module.exports = router;
