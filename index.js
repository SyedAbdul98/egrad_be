import cors from "cors";
import express from "express";
import { dBConnection } from "./dBConnection.js";
import studentRoutes from "./Routes/StudentRoutes.js";
import teacherRoutes from "./Routes/TeacherRoutes.js";
import courseRoutes from "./Routes/CourseRoutes.js";
import quizRoutes from "./Routes/QuizRoutes.js";
import announcementRoutes from "./Routes/AnnouncementRoutes.js";
import DiscussionRoutes from "./Routes/DiscussionRoutes.js";
import markSheetRoutes from "./Routes/MarkSheetRoutes.js";
const app = express();
app.use(cors());

dBConnection();

app.use(express.json());
app.use("/teacher", teacherRoutes);
app.use("/student", studentRoutes);
app.use("/course", courseRoutes);
app.use("/quiz", quizRoutes);
app.use("/announcement", announcementRoutes);
app.use("/discussion", DiscussionRoutes);
app.use("/marks", markSheetRoutes);

app.listen(8080, () => {
  console.log("Server is Listenign");
});
