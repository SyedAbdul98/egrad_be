import mongoose from "mongoose";

const studentSchema = mongoose.Schema({
  studentName: {
    type: String,
    required: true,
  },
  rollNumber: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  enrolledCourses: [{
    type: mongoose.Schema.Types.ObjectId, ref: "course",
  }],
});

const studentCollection = mongoose.model("student", studentSchema);

export default studentCollection;
