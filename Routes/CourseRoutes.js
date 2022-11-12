import express from "express";
import courseCollection from "../Models/Course.js";
import studentCollection from "../Models/Student.js";
import teacherCollection from "../Models/Teacher.js";
const route = express.Router();

route.post("/add_course", async (req, res) => {
  const { courseId, courseName, courseOutline, courseMotivation } = req.body;
  console.log(courseId, courseName, courseOutline, courseMotivation);

  const newCourse = new courseCollection({
    courseId,
    courseName,
    courseOutline,
    courseMotivation,
  });
  const result = await newCourse.save();
  console.log(result);
  res.end();
});

route.post("/get_courses", async (req, res) => {
  const { enrolledCourses } = req.body;
  console.log("enrolledCourses", enrolledCourses);
  const record = await enrolledCourses.map((id) => {
    return courseCollection.find({ id });
  });
  console.log(record);
  res.end();
});

route.post("/find_course", async (req, res) => {
  const { courseName } = await req.body;
  console.log(courseName);
  const record = await courseCollection.findOne({ courseName });
  const teacher = await teacherCollection.find({
    _id: { $in: record.enrolledTeachers },
  });
  const student = await studentCollection.find({
    _id: { $in: record.enrolledStudents },
  });
  console.log("Teacher", teacher);
  console.log("Students", student);
  if (!record) {
    res.status(400).send({ message: "No user Found" });
  } else {
    // console.log(record);
    res
      .status(200)
      .send({ record: record, teacher: teacher, student: student });
  }
  res.end();
});

// route.post("/add_announcement", async (req, res) => {
//   const { courseName, messageBody } = req.body;
//   console.log(courseName, messageBody);

//   const makeAnn = await courseCollection.updateOne({});
//   res.end();
// });
export default route;
