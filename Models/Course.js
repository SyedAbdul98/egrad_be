import mongoose from "mongoose";

const courseSchema = mongoose.Schema({
  courseName: {
    type: String,
    required: true,
  },
  courseId: {
    type: String,
    required: true,
  },
  courseOutline: {
    type: String,
    required: true,
  },
  courseMotivation: {
    type: String,
    required: true,
  },
  enrolledStudents: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "student",
    },
  ],
  enrolledTeachers: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "teacher",
    },
  ],
});

const courseCollection = mongoose.model("course", courseSchema);

export default courseCollection;
