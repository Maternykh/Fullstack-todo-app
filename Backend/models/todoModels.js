import mongoose from "mongoose";
const todoSchema = mongoose.Schema(
  {
    title: {
      type: String,
      require: true,
    },
    value: {
      type: String,
      require: true,
    },
    data: {
      type: String,
      require: true,
    },

    Category: {
      type: String,
      require: true,
    },
  },
  { timestamps: true }
);
export const Todo = mongoose.model("Todo", todoSchema);
