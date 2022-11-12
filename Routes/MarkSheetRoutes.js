import express from "express";
import markSheetCollection from "../Models/MarkSheet.js";

const route = express.Router();

route.post("/add_marks", async (req, res) => {
  const { studentName, courseName, marks, rollNumber } = await req.body;
  console.log("SCM", studentName, courseName, marks, rollNumber);

  const newMarkSheet = new markSheetCollection({
    studentName,
    courseName,
    marks,
    rollNumber
  });

  const results = await newMarkSheet.save();
  res.status(200).send(results);
  res.end();
});

route.post("/get_marks", async (req, res) => {
  const { courseName } = req.body;
  console.log(courseName);

  const getMarks = await markSheetCollection.find({ courseName });

  res.status(200).send(getMarks);
  res.end();
});

export default route;
