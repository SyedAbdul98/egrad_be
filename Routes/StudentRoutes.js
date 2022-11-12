import express from "express";
import courseCollection from "../Models/Course.js";
import studentCollection from "../Models/Student.js";

const route = express.Router();

route.post("/add_student", async (req, res) => {
  const { studentName, rollNumber, email, password, enrolledCourses } =
    req.body;
  const newStudent = new studentCollection({
    studentName,
    rollNumber,
    email,
    password,
    enrolledCourses,
  });
  const result = await newStudent.save();
  const course = await courseCollection.updateMany(
    { _id: { $in: enrolledCourses } },
    { $push: { enrolledStudents: "635eb7b3ee00f807b2d8c4a6" } }
  );

  console.log(result);
  res
    .status(200)
    .send({ studentName, rollNumber, email, password, enrolledCourses });
});

route.post("/get_student", async (req, res) => {
  const { email, password } = await req.body;
  
  const record = await studentCollection.findOne({ email, password });
  console.log(record);
  const courses = await courseCollection.find({
    _id: { $in: record.enrolledCourses },
  });
  const d = await courseCollection.find({
    _id: { $in: record.enrolledCourses },
  });
  console.log("Courses", courses);
  if (!record) {
    res.status(400).send({ message: "No user Found" });
  } else {
    // console.log(record);
    res.status(200).send({ record: record, courses: courses });
  }
  res.end();
});

export default route;
