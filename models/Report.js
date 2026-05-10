const mongoose = require("mongoose");

const reportSchema = new mongoose.Schema({
  type: String,
  message: String,
  time: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model("Report", reportSchema);