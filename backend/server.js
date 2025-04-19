const cors = require("cors");
const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();

const app = express();

const corsOptions = {
  origin: "http://localhost:5173", // Ensure it matches your frontend port
  credentials: true,
};

app.use(cors(corsOptions));
app.use(express.json());

// Connect DB
mongoose.connect(process.env.MONGO_URI)
  .then(() => {
    console.log("MongoDB connected");
    app.listen(process.env.PORT || 5000, () => 
      console.log(`Server running on port ${process.env.PORT || 5000}`)
    );
  })
  .catch(err => console.error("MongoDB connection failed:", err));

// Routes
app.use("/api/admin", require("./routes/serveradmin"));
app.use("/api/send-email", require("./routes/serverContact"));
app.use("/api/projects", require("./routes/serverprojects"));
