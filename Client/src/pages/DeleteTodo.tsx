import React from "react";
import { useAppDispatch, useAppSelector } from "../Type";
import { setLoading } from "../Redux/Slice/todoSlice";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import { RootState } from "../Redux/store";
import { Link } from "react-router-dom";
import { clearInputs } from "../Redux/Slice/inputTodos";
const DeleteTodo: React.FC = () => {
  const dispatch = useAppDispatch();
  const { id } = useParams();
  const { title, value, Category } = useAppSelector(
    (state: RootState) => state.inputTod
  );
  const navigate = useNavigate();
  const Delete = () => {
    dispatch(setLoading(true));
    axios
      .delete(`https://fullstack-todo-app-mern.onrender.com/todos/${id}`)
      .then(() => {
        dispatch(setLoading(false));
        navigate("/");
        dispatch(clearInputs());
      });
  };
  return (
    <div className=" flex-col flex justify-center items-center">
      <div className=" w-full rounded-xl bg-zinc-600 p-3 xl:w-80 mb-2 flex flex-col justify-between">
        <div>
          <div className=" text-xl mb-2">{title}</div>
          <div>{value}</div>
        </div>
        <div className=" mt-2">
          <div className=" flex justify-between mt-2">
            <div
              className={`${Category === "Completed" && " bg-green-500 "} ${
                Category === "Important" && " bg-indigo-500 "
              } ${
                Category === "Do it now" && " bg-red-500 "
              } text-white  py-2 px-3 rounded-full `}
            >
              {Category}
            </div>
          </div>
        </div>
      </div>
      <div className=" mb-2 flex justify-center py-2 bg-zinc-600 rounded-xl w-full">
        Delete this todo?
      </div>
      <div className=" flex">
        <div
          onClick={() => Delete()}
          className=" hover:cursor-pointer  mr-2 w-40 flex justify-center py-2 bg-red-500 rounded-xl"
        >
          Delete
        </div>
        <Link to={`/`}>
          <div className="w-40 flex justify-center py-2 bg-zinc-600 rounded-xl ">
            Back
          </div>
        </Link>
      </div>
    </div>
  );
};

export default DeleteTodo;
