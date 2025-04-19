const cors = require("cors");
const express = require("express");
const mongoose = require("mongoose");
const multer = require("multer");
const path = require("path");
require("dotenv").config();

const app = express();

// CORS Configuration
const corsOptions = {
  origin: "http://localhost:5173", // Ensure this matches your frontend port
  credentials: true,
};

app.use(cors(corsOptions));
app.use(express.json());

// Serve uploaded images
app.use('/uploads', express.static('uploads'));

// Configure Multer for Image Uploads
const storage = multer.diskStorage({
  destination: "uploads/",
  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname)); // Unique filename
  },
});

const upload = multer({ storage });

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI)
  .then(() => {
    console.log("MongoDB connected");

    // Start the server AFTER database connection
    app.listen(process.env.PORT || 5000, () => 
      console.log(`Server running on port ${process.env.PORT || 5000}`)
    );
  })
  .catch(err => console.error("MongoDB connection failed:", err));

// Routes
app.use("/api/admin", require("./routes/serveradmin"));
app.use("/api/send-email", require("./routes/serverContact"));
app.use("/api/projects", require("./routes/serverprojects"));

module.exports = { upload }; // Export Multer instance
