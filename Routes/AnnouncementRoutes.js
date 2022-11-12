import express from "express";
import announcementCollection from "../Models/Announcement.js";
const route = express.Router();

route.post("/add_announcement", async (req, res) => {
  const { announcementBody, courseName } = await req.body;
  const newAnnouncement = new announcementCollection({
    announcementBody,
    courseName,
  });
  const results = await newAnnouncement.save();
  console.log("f", announcementBody, courseName, results);
  res.status(200).send({results})
  res.end();
});

route.post("/get_announcement", async (req, res) => {
  const { courseName } =await req.body;
  console.log("ia",courseName)
  const recAnn = await announcementCollection.find({ courseName });
  console.log(recAnn);
  res.status(200).send({recAnn})
  res.end();
});
export default route;
