import { useState } from "react";
import { IoClose } from "react-icons/io5";

export function SelectedGoodsModal() {
  const [isHiddenModal, setIsHiddenModal] = useState(false);

  function onHandleHidingModal() {
    setIsHiddenModal((prev) => !prev);
  }
  return (
    <>
      {!isHiddenModal && (
        <div className="fixed z-40 mt-30 ml-70 h-[40%] w-[50%] rounded-lg bg-slate-50">
          <div className="flex">
            <IoClose
              className="m-3 ml-auto rounded-lg hover:cursor-pointer hover:bg-slate-100"
              color="black"
              size={30}
              onClick={onHandleHidingModal}
            />
          </div>
        </div>
      )}
    </>
  );
}
