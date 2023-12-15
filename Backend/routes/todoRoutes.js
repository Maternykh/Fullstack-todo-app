import express from "express";
import { Todo } from "../models/todoModels.js";

const router = express.Router();
router.post("/", async (req, res) => {
  try {
    if (
      !req.body.title ||
      !req.body.value ||
      !req.body.data ||
      !req.body.Category
    ) {
      return res.status(400).send({
        message:
          "Send all required fields: title, value, data, Category, Completed",
      });
    }
    const newTodo = {
      title: req.body.title,
      value: req.body.value,
      data: req.body.data,
      Category: req.body.Category,
    };
    const todo = await Todo.create(newTodo);
    return res.status(201).send(todo);
  } catch (error) {
    console.log(error.message);
    res.status(500).send({ message: error.message });
  }
});
router.get("/", async (req, res) => {
  try {
    const todo = await Todo.find({});
    return res.status(200).json(todo);
  } catch (error) {
    console.log(error.message);
    res.status(500).send({ message: error.message });
  }
});

router.put("/:id", async (req, res) => {
  try {
    if (
      !req.body.title ||
      !req.body.value ||
      !req.body.data ||
      !req.body.Category
    ) {
      return res.status(400).send({
        message: "Send all required fields: title, value, data",
      });
    }
    const { id } = req.params;
    const result = await Todo.findByIdAndUpdate(id, req.body);
    if (!result) {
      return res.status(404).json({ message: "Todo not found" });
    }
    return res.status(200).send({ message: "Todo update succesfully" });
  } catch (error) {
    console.log(error.message);
    res.status(404).send({ message: error.message });
  }
});
router.delete("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const result = await Todo.findByIdAndDelete(id);
    if (!result) {
      return res.status(404).json({ message: "Book not found" });
    }
    return res.status(200).send({ message: "Book delete succesfully" });
  } catch (error) {
    console.log(error.message);
    res.status(500).send({ message: error.message });
  }
});
export default router;
