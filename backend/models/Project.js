const mongoose = require("mongoose");

const ProjectSchema = new mongoose.Schema({
  title: { type: String, required: true },
  client: { type: String, required: true },
  date: { type: Date, required: true },
});

module.exports = mongoose.model("Project", ProjectSchema);
