import mongoose from "mongoose";

export const dBConnection = () => {
  mongoose
    .connect("mongodb://localhost:27017/egrad")
    .then(() => {
      console.log("DB is connected ");
    })
    .catch((error) => {
      console.log(error);
    });
};
