import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";

import Addtodo from "./pages/Addtodo";
import EditTodo from "./pages/EditTodo";
import DeleteTodo from "./pages/DeleteTodo";

function App() {
  return (
    <div className=" bg-zinc-800 min-h-screen p-2 xl:p-5 text-white flex justify-center">
      {/* <Aside /> */}
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/addtodo" element={<Addtodo />}></Route>
        <Route path="/editTodo/:id" element={<EditTodo />}></Route>
        <Route path="/deleteTodo/:id" element={<DeleteTodo />}></Route>
      </Routes>
    </div>
  );
}

export default App;
