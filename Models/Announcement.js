import mongoose from "mongoose";

const announcementSchema = mongoose.Schema({
  announcementBody: {
    type: String,
    required: true,
  },
  courseName: {
    type: String,
    required: true,
  },
});

announcementSchema.set("timestamps", true);
const announcementCollection = mongoose.model(
  "announcement",
  announcementSchema
);

export default announcementCollection;
