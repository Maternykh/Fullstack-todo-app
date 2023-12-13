import express from "express";
import { PORT, mongoDBUrl } from "./config.js";
import mongoose from "mongoose";
import cors from "cors";
import todoRouter from "./routes/todoRoutes.js";

const app = express();
app.use(express.json());
app.use(cors());
// app.use(
//   cors({
//     origin: "http://localhost:3000",
//     methods: ["GET", "POST", "PUT", "DELETE"],
//     allowedHeaders: ["Content-Type"],
//   })
// );
app.get("/", (req, res) => {
  return res.status(234).send("Welcome MERN stack tutorial");
});
app.use("/todos", todoRouter);

mongoose
  .connect(mongoDBUrl)
  .then(() => {
    console.log("App connection to database");
    app.listen(PORT, () => {
      console.log(`App listening to port: ${PORT}`);
    });
  })
  .catch((error) => {
    console.log(error);
  });
