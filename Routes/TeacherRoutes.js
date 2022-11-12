import express from "express";
import teacherCollection from "../Models/Teacher.js";
import courseCollection from "../Models/Course.js";
const route = express.Router();

route.post("/add_teacher", async (req, res) => {
  const { teacherName, teacherId, email, password, enrolledCourses } = req.body;
  const newTeacher = new teacherCollection({
    teacherName,
    teacherId,
    email,
    password,
    enrolledCourses,
  });
  const result = await newTeacher.save();
  const course = await courseCollection.updateMany(
    { _id: { $in: enrolledCourses } },
    { $push: { enrolledTeachers: result.enrolledCourses } }
  );
  console.log(result);
  res
    .status(200)
    .send({ teacherName, teacherId, email, password, enrolledCourses });
});

route.post("/get_teacher", async (req, res) => {
  const { email, password } = req.body;
  const record = await teacherCollection.findOne({ email, password });
  const courses = await courseCollection.find({
    _id: { $in: record.enrolledCourses },
  });
  console.log("courses", courses);

  // console.log(record);
  res.status(200).send({ record: record, courses: courses });

  res.end();
});

export default route;
