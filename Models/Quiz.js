import mongoose from "mongoose";

const quizSchema = mongoose.Schema({
  courseName: {
    type: String,
    required: true,
  },
  question: {
    type: String,
    required: true,
  },
  optionA: {
    type: String,
    required: true,
  },
  optionB: {
    type: String,
    required: true,
  },
  optionC: {
    type: String,
    required: true,
  },
  optionD: {
    type: String,
    required: true,
  },
  correctOption: {
    type: String,
    required: true,
  },
});

const quizCollection = mongoose.model("quiz", quizSchema);

export default quizCollection;
