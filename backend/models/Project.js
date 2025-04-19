const mongoose = require("mongoose");

const ProjectSchema = new mongoose.Schema({
  title: String,
  about: String,
  client: String,
  image: String, // Store image filename
});

module.exports = mongoose.model("Project", ProjectSchema);
