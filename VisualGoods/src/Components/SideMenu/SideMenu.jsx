import { useState } from "react";
import { RiExpandDiagonalFill } from "react-icons/ri";
import { ShrinkButton } from "./ShrinkButton";
import { GoodList } from "./GoodList";

export function SideMenu() {
  const [isHidden, setIsHidden] = useState(false);

  function onHandleHiding() {
    setIsHidden((prev) => !prev);
  }

  if (isHidden) {
    return (
      <button
        onClick={onHandleHiding}
        className="m-3 ml-auto flex h-10 w-10 items-center justify-center rounded-xl bg-slate-50 shadow-lg transition-all duration-300 ease-in-out hover:scale-110 hover:cursor-pointer"
      >
        <RiExpandDiagonalFill color="black" size={25} />
      </button>
    );
  }

  return (
    <>
      <div className="duration 300 ml-auto flex h-screen w-1/4 flex-col rounded-tl-lg rounded-bl-lg bg-slate-50 shadow-lg transition-all delay-200 ease-in-out">
        <ShrinkButton hidding={onHandleHiding} />
        <GoodList />
      </div>
    </>
  );
}
