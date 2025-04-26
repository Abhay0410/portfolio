const cors = require("cors");
const express = require("express");
const mongoose = require("mongoose");
const multer = require("multer");
const path = require("path");
require("dotenv").config();

const app = express();

const corsOptions = {
  origin: (origin, callback) => {
    if (!origin || origin === "http://localhost:5173") {
      callback(null, true);
    } else {
      callback(new Error("Not allowed by CORS"));
    }
  },
  credentials: true,
};
app.use(cors(corsOptions));
app.use(express.json());

// Serve uploaded images
app.use("/uploads", express.static(path.join(__dirname, "uploads"))); // Serve files from the 'uploads' directory

// Configure Multer for Image Uploads
const storage = multer.diskStorage({
  destination: "uploads/",
  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname)); // Unique filename for each upload
  },
});
const upload = multer({ storage }); // Multer instance

// Connect to MongoDB
mongoose
  .connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log("MongoDB connected");

    // Start the server AFTER database connection
    app.listen(process.env.PORT || 5000, () =>
      console.log(`Server running on port ${process.env.PORT || 5000}`)
    );
  })
  .catch((err) => console.error("MongoDB connection failed:", err));

// Routes
app.use("/api/admin", require("./routes/serveradmin"));
app.use("/api/send-email", require("./routes/serverContact"));
app.use("/api/projects", require("./routes/serverprojects"));
app.use("/api/testimonials", require("./routes/testimonials"));
app.use("/api/gallery", require("./routes/galleryRoutes")); // Add gallery routes and use upload middleware when needed

module.exports = { upload }; // Export Multer instance for use in other routes
