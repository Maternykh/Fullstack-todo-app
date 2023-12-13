import React, { useEffect } from "react";
import Head from "../components/Head";
import axios from "axios";
import TodoCart from "../components/TodoCart";
import { useAppDispatch, useAppSelector } from "../Type";
import { BiLoaderAlt } from "react-icons/bi";
import { setLoading, setTodos } from "../Redux/Slice/todoSlice";
import { RootState } from "../Redux/store";
import { Link } from "react-router-dom";
const Home: React.FC = () => {
  const Loading = useAppSelector((state: RootState) => state.todo.Loading);
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(setLoading(true));
    axios
      .get(`https://fullstack-todo-app-mern.onrender.com/todos`)
      .then((res) => {
        dispatch(setTodos(res.data));
        dispatch(setLoading(false));
      });
  }, []);
  const todos = useAppSelector((state: RootState) => state.todo.todos);
  const Tods = todos.map((todo) => <TodoCart key={todo._id} {...todo} />);
  return (
    <div className=" w-full p-3 rounded-xl bg-zinc-700">
      <Head />
      <div className=" flex flex-wrap xl:px-20">
        {Loading ? (
          <div className=" w-full mt-72 flex justify-center ">
            <BiLoaderAlt className=" animate-spin text-5xl" />
          </div>
        ) : (
          <div className=" w-full flex flex-wrap">
            {Tods}
            <Link className=" w-full xl:w-72" to={`addtodo`}>
              <div
                className={`${
                  todos.length === 0 ? " block" : " hidden"
                } h-40 xl:h-56 w-full  pb-2 pr-2`}
              >
                <div className=" w-full h-full  text-zinc-400 border-zinc-500 flex justify-center items-center  border-dashed border-2 rounded-xl">
                  + Add New Task
                </div>
              </div>
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};
export default Home;
