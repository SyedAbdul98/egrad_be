import mongoose from "mongoose";

const TeacherSchema = mongoose.Schema({
  teacherName: {
    type: String,
    required: true,
  },
  teacherId: {
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
  }]
});

const teacherCollection = mongoose.model("teacher", TeacherSchema);

export default teacherCollection;
