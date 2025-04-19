const express = require("express");
const router = express.Router();
const Project = require("../models/Project");
const verifyToken = require("../middleware/verifyToken");
const upload = require("../middleware/upload"); // Import Multer instance
require("dotenv").config();

// GET all projects (public)
router.get("/", async (req, res) => {
  try {
    const limit = parseInt(req.query.limit) || 8;
    const projects = await Project.find().sort({ createdAt: -1 }).limit(limit); // Sort by latest projects
    res.status(200).json(projects);
  } catch (err) {
    console.error("Error fetching projects:", err);
    res.status(500).json({ error: "Server error while retrieving projects" });
  }
});

// GET single project by ID
router.get("/:id", async (req, res) => {
  try {
    const project = await Project.findById(req.params.id);
    if (!project) return res.status(404).json({ error: "Project not found" });

    res.status(200).json(project);
  } catch (err) {
    console.error("Error fetching project:", err);
    res.status(500).json({ error: "Server error while retrieving project" });
  }
});

// POST create project (admin only, with image upload)
router.post("/", verifyToken, upload.single("image"), async (req, res) => {
  try {
    const { title, client, about } = req.body;
    if (!title || !client || !about) {
      return res.status(400).json({ error: "All fields (title, client, about) are required" });
    }

    if (!req.file) return res.status(400).json({ error: "Project image is required" });

    const newProject = new Project({
      title,
      client,
      about,
      image: req.file.filename, // Store image filename
    });

    await newProject.save();
    res.status(201).json({ message: "Project added successfully", project: newProject });
  } catch (err) {
    console.error("Error adding project:", err);
    res.status(500).json({ error: "Failed to add project" });
  }
});

// PUT update project (admin only, optional image update)
router.put("/:id", verifyToken, upload.single("image"), async (req, res) => {
  try {
    const { title, client, about } = req.body;

    if (!title || !client || !about) {
      return res.status(400).json({ error: "Title, client, and about fields are required for update" });
    }

    const updateData = { title, client, about };
    if (req.file) updateData.image = req.file.filename; // Only update image if new one is provided

    const updatedProject = await Project.findByIdAndUpdate(req.params.id, updateData, { new: true });
    if (!updatedProject) return res.status(404).json({ error: "Project not found" });

    res.status(200).json({ message: "Project updated successfully", project: updatedProject });
  } catch (err) {
    console.error("Error updating project:", err);
    res.status(500).json({ error: "Failed to update project" });
  }
});

// DELETE project (admin only)
router.delete("/:id", verifyToken, async (req, res) => {
  try {
    const project = await Project.findById(req.params.id);
    if (!project) return res.status(404).json({ error: "Project not found" });

    await Project.findByIdAndDelete(req.params.id);
    res.status(200).json({ message: "Project deleted successfully" });
  } catch (err) {
    console.error("Error deleting project:", err);
    res.status(500).json({ error: "Failed to delete project" });
  }
});

module.exports = router;
