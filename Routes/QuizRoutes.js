import express from "express";
import quizCollection from "../Models/Quiz.js";

const route = express.Router();

route.post("/add_question", async (req, res) => {
  const {
    courseName,
    question,
    optionA,
    optionB,
    optionC,
    optionD,
    correctOption,
  } = await req.body;

  const newQuestion = new quizCollection({
    courseName,
    question,
    optionA,
    optionB,
    optionC,
    optionD,
    correctOption,
  });

  const results = await newQuestion.save();
  res.status(200).send(results);
  res.end();
});

route.post("/get_quiz", async (req, res) => {
  const { courseName } = await req.body;
  console.log("ia", courseName);
  const recAnn = await quizCollection.find({ courseName });
  console.log(recAnn);
  if(recAnn !== []){
    res.status(200).send({ recAnn });

  }else{
    res.status(200).send({message: "no Data"});
  }
  res.end();
});

export default route;
