import mongoose from "mongoose";

const markSheetSchema = mongoose.Schema({
  studentName: {
    type: String,
    required: true,
  },

  courseName: {
    type: String,
    required: true,
  },
  marks: {
    type: Number,
    required: true,
  },
  rollNumber: {
    type: String,
  },
});

const markSheetCollection = mongoose.model("markSheet", markSheetSchema);

export default markSheetCollection;
