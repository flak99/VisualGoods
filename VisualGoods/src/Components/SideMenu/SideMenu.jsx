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
        className="shadow-lgtransition-all m-3 ml-auto flex h-10 w-10 items-center justify-center rounded-xl bg-blue-400 duration-300 hover:scale-110 hover:cursor-pointer hover:bg-blue-300"
      >
        <RiExpandDiagonalFill color="black" size={25} />
      </button>
    );
  }

  return (
    <>
      <div className="ml-auto flex h-screen w-1/4 flex-col bg-blue-400 shadow-lg">
        <ShrinkButton hidding={onHandleHiding} />
        <GoodList />
      </div>
    </>
  );
}
