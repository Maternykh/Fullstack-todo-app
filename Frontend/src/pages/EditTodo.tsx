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
import { useNavigate, useParams } from "react-router-dom";
import { Link } from "react-router-dom";
const EditTodo: React.FC = () => {
  const { title, value, Category } = useAppSelector(
    (state: RootState) => state.inputTod
  );
  const dispatch = useAppDispatch();
  const categ = ["Completed", "Important", "Do it now"];
  const navigate = useNavigate();
  const { id } = useParams();
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
    axios.put(`http://localhost:5555/todos/${id}`, add).then(() => {
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
            <div>Edit todo title:</div>
            <input
              value={title}
              onChange={(e) => dispatch(setTitle(e.target.value))}
              placeholder="Enter title task"
              type="text"
              className=" mb-2 w-full py-2 px-5 rounded-full border-none outline-none bg-zinc-600"
            />
          </div>
          <div>
            <div>Edit todo value:</div>
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
              } ${Category === "Do it now" && " text-red-500 "}  ml-5`}
            >
              {Category}
            </div>
          </div>
          <div className=" my-5 flex">
            {categ.map((cat) => (
              <div
                key={cat}
                onClick={() => dispatch(setCategory(cat))}
                className={`text-white mr-2 py-2 px-3 rounded-full ${
                  cat === "Completed" && " bg-green-500 "
                } ${cat === "Important" && " bg-indigo-500 "} ${
                  cat === "Do it now" && " bg-red-500 "
                } bg-green-500 hover:cursor-pointer`}
              >
                {cat}
              </div>
            ))}
          </div>
          <div
            onClick={() => OnCLickSubmit()}
            className=" hover:cursor-pointer border-2 w-full py-2 flex justify-center rounded-xl bg-zinc-600 mt-2"
          >
            Edit
          </div>
          <Link to={`/`}>
            <div className=" items-center hover:cursor-pointer border-2 w-full py-2 flex justify-center rounded-xl bg-zinc-600 mt-2">
              Back
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default EditTodo;
