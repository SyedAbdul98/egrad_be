import mongoose from "mongoose";

const discussionSchema = mongoose.Schema({
  senderName: {
    type: String,
    required: true,
  },

  courseName: {
    type: String,
    required: true,
  },
  message: {
    type: String,
    required: true,
  },
});


discussionSchema.set("timestamps", true);

const discussionCollection = mongoose.model("discussion", discussionSchema);

export default discussionCollection;
