var mongoose = require("mongoose");

courseSchema = mongoose.Schema({
  crId: Number,
  crName: String,
  crDuration: Number,
  crFee: Number,
});

const Course = mongoose.model("Course", courseSchema);
module.exports = Course;
