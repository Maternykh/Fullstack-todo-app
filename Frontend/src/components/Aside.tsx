import React from "react";
import { useAppDispatch, useAppSelector } from "../Type";
import { RootState } from "../Redux/store";
import { setSelectCategory } from "../Redux/Slice/filterSlice";
const Aside: React.FC = () => {
  const category: string[] = [
    "All Task",
    "Important",
    "Completed",
    "Do it now",
  ];
  const selectCategory = useAppSelector(
    (state: RootState) => state.filter.category
  );
  const dispatch = useAppDispatch();
  return (
    <div className=" w-48 rounded-xl bg-zinc-700 flex flex-col justify-center">
      {category.map((cat, index) => (
        <div
          onClick={() => dispatch(setSelectCategory(cat))}
          key={index}
          className={`${
            cat === selectCategory
              ? "border-r-2 border-green-500 bg-zinc-600"
              : "border-r-2 border-transparent cursor-pointer"
          } flex items-center p-2 justify-center`}
        >
          {cat}
        </div>
      ))}
    </div>
  );
};

export default Aside;
