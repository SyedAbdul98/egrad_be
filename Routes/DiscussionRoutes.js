import express from "express";
import discussionCollection from "../Models/Discussions.js";

const route = express.Router();

route.post("/send_message", async (req, res) => {
  const { senderName, courseName, message } = await req.body;
  console.log("dis", senderName, courseName, message);
  const newMessage = new discussionCollection({
    senderName,
    courseName,
    message,
  });
  const results = await newMessage.save();
  res.status(200).send(results);
  res.end();
});

route.post("/get_message", async (req, res) => {
  const { courseName } = await req.body;
  console.log("CN", courseName);
  const msg = await discussionCollection.find({ courseName });
  console.log(msg);
  res.status(200).send(msg);
  res.end();
});
export default route;
