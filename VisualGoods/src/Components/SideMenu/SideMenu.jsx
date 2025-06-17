import { useState } from "react";
import { RiExpandDiagonalFill } from "react-icons/ri";
import { ShrinkButton } from "./ShrinkButton";
import { GoodList } from "./GoodList/GoodList";
import { SelectedGoodsModal } from "../Modals/SelectedGoods/SelectedGoodsModal";

export function SideMenu() {
  const [isHidden, setIsHidden] = useState(true);

  function onHandleHiding() {
    setIsHidden((prev) => !prev);
  }

  return (
    <>
      {/* Przycisk pokazywany  */}
      {isHidden && (
        <button
          onClick={onHandleHiding}
          className="fixed top-4 right-4 z-20 m-1 flex h-10 w-10 items-center justify-center rounded-xl bg-slate-50 shadow-lg transition-all duration-300 ease-in-out hover:scale-110 hover:cursor-pointer"
        >
          <RiExpandDiagonalFill color="black" size={25} />
        </button>
      )}

      {/* Tło - Panel ThreeJS */}
      <div className="fixed inset-0 z-0 bg-gray-500"></div>

      {/* Lista Wybranych Artykułów  */}
      <SelectedGoodsModal />

      {/* Panel boczny  */}
      {!isHidden && (
        <div className="fixed top-0 right-0 z-10 ml-auto flex h-screen w-1/4 flex-col rounded-tl-lg rounded-bl-lg bg-slate-50 shadow-lg transition-all duration-300 ease-in-out">
          <ShrinkButton hidding={onHandleHiding} />
          <GoodList />
          {/* <SubmitGoodsButton /> */}
        </div>
      )}
    </>
  );
}
