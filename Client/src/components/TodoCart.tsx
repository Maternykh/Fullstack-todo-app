import React from "react";
import { todoMap, useAppDispatch } from "../Type";
import { FaEdit } from "react-icons/fa";
import { FaTrash } from "react-icons/fa";
import { Link } from "react-router-dom";
import { setCategory, setTitle, setValue } from "../Redux/Slice/inputTodos";

const TodoCart: React.FC<todoMap> = ({ _id, title, value, data, Category }) => {
  const dispatch = useAppDispatch();
  const Edit = () => {
    dispatch(setTitle(title));
    dispatch(setValue(value));
    dispatch(setCategory(Category));
  };

  return (
    <div className=" w-full rounded-xl bg-zinc-600 p-3 xl:w-80 mr-2 mb-2 flex flex-col justify-between">
      <div>
        <div className=" text-xl mb-2">{title}</div>
        <div>{value}</div>
      </div>
      <div className=" mt-2">
        <div>{data}</div>
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
          <div className=" flex justify-center items-center">
            <Link to={`/edittodo/${_id}`}>
              <div onClick={() => Edit()}>
                <FaEdit className=" duration-150 hover:text-yellow-500 flex justify-center items-center mr-2 text-lg" />
              </div>
            </Link>
            <Link to={`/deleteTodo/${_id}`}>
              <div onClick={() => Edit()}>
                <FaTrash className=" duration-150 hover:text-red-500 flex justify-center items-center" />
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TodoCart;
