import React from "react";
import { useAppDispatch, useAppSelector } from "../Type";
import { RootState } from "../Redux/store";
import {
  clearInputs,
  setCategory,
  setTitle,
  setValue,
} from "../Redux/Slice/inputTodos";
import { setLoading } from "../Redux/Slice/todoSlice";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
const Addtodo: React.FC = () => {
  const { title, value, Category } = useAppSelector(
    (state: RootState) => state.inputTod
  );
  const dispatch = useAppDispatch();
  const categ = ["Completed", "Important", "Do it now", "Classic", "Note"];
  const navigate = useNavigate();
  const OnCLickSubmit = () => {
    const today = new Date();
    const dd = String(today.getDate()).padStart(2, "0");
    const mm = String(today.getMonth() + 1).padStart(2, "0");
    const yyyy = today.getFullYear();
    const data = mm + "/" + dd + "/" + yyyy;
    const add = {
      title,
      value,
      data,
      Category,
    };
    dispatch(setLoading(true));
    axios
      .post("https://fullstack-todo-app-mern.onrender.com/todos", add)
      .then(() => {
        dispatch(setLoading(false));
        dispatch(clearInputs());
        navigate("/");
      });
  };
  return (
    <div className="  p-3 rounded-xl bg-zinc-700 flex justify-center">
      <div className=" flex justify-between flex-col">
        <div>
          <div>
            <div>Todo title:</div>
            <input
              value={title}
              onChange={(e) => dispatch(setTitle(e.target.value))}
              placeholder="Enter title task"
              type="text"
              className=" mb-2 w-full py-2 px-5 rounded-full border-none outline-none bg-zinc-600"
            />
          </div>
          <div>
            <div>Todo value:</div>
            <textarea
              value={value}
              onChange={(e) => dispatch(setValue(e.target.value))}
              placeholder="Enter value task"
              className=" h-96 w-full py-2 px-5 rounded-xl border-none outline-none bg-zinc-600"
            ></textarea>
          </div>
        </div>
        <div>
          <div className=" flex items-center">
            Select category:
            <div
              className={`${Category === "Completed" && " text-green-500 "} ${
                Category === "Important" && " text-indigo-500 "
              } ${Category === "Do it now" && " text-red-500 "} ${
                Category === "Classic" && " text-white "
              } ${Category === "Note" && " text-sky-600 "}   ml-5`}
            >
              {Category}
            </div>
          </div>
          <div className=" my-5 flex flex-wrap">
            {categ.map((cat) => (
              <div
                key={cat}
                onClick={() => dispatch(setCategory(cat))}
                className={` mb-2 mr-2 py-2 px-3 rounded-full ${
                  cat === "Completed" && " bg-green-500 text-white"
                } ${cat === "Important" && " bg-indigo-500 text-white"} ${
                  cat === "Do it now" && " bg-red-500 text-white"
                } ${cat === "Classic" && " bg-white text-black "} ${
                  cat === "Note" && " bg-sky-600 text-white"
                }   bg-green-500 hover:cursor-pointer`}
              >
                {cat}
              </div>
            ))}
          </div>

          <div
            onClick={() => OnCLickSubmit()}
            className=" hover:cursor-pointer border-2 w-full py-2 flex justify-center rounded-xl bg-zinc-600 mt-2"
          >
            + Add
          </div>
          <Link to={`/`} onClick={() => dispatch(clearInputs())}>
            <div className=" items-center hover:cursor-pointer border-2 w-full py-2 flex justify-center rounded-xl bg-zinc-600 mt-2">
              Back
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};
export default Addtodo;
