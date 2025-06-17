import { useState } from "react";
import { IoClose } from "react-icons/io5";
import { SubmitGoodsButton } from "./SubmitGoodsButton";
import { SelectedGoodsList } from "./SelectedGoodsList";

export function SelectedGoodsModal() {
  const [isHiddenModal, setIsHiddenModal] = useState(false);

  const modalContainer =
    "fixed z-40 mt-30 ml-70 h-[60%] w-[30%] rounded-lg bg-slate-50";
  const closeButtonArea =
    "m-3 ml-auto rounded-lg hover:cursor-pointer hover:bg-slate-100";

  function onHandleHidingModal() {
    setIsHiddenModal((prev) => !prev);
  }
  return (
    <>
      {!isHiddenModal && (
        <div className={modalContainer}>
          <div className="flex">
            <IoClose
              className={closeButtonArea}
              color="black"
              size={30}
              onClick={onHandleHidingModal}
            />
          </div>
          <p className="text-center font-bold text-black">Wybrane produkty</p>

          <SelectedGoodsList />
          <SubmitGoodsButton />
        </div>
      )}
    </>
  );
}
