import React from "react";

import { Link } from "react-router-dom";
const Head: React.FC = () => {
  return (
    <div className=" flex justify-between mb-3">
      <div className=" text-2xl border-b-2 border-green-500">All task</div>
      <Link to={`/addtodo`}>
        <div className=" text-lg border-2 border-white w-8 h-8 rounded-full flex justify-center items-center">
          +
        </div>
      </Link>
    </div>
  );
};

export default Head;
