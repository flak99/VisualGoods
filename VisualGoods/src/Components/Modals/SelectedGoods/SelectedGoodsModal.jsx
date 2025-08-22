import { useContext } from "react";
import { IoClose } from "react-icons/io5";
import { SubmitGoodsButton } from "./SubmitGoodsButton";
import { SelectedGoodsList } from "./SelectedGoodsList";
import { ShowModalSubmitProvider } from "../../../context/ShowModalSubmitr";
import { ShowModalSubmitContext } from "../../../context/ShowSubmitModal";

export function SelectedGoodsModal() {
  const modalContainer =
    "fixed z-40 mt-30 ml-70 h-[60%] w-[30%] rounded-lg bg-slate-50";
  const closeButtonArea =
    "m-3 ml-auto rounded-lg hover:cursor-pointer hover:bg-slate-100";

  const [isHiddenModal, setIsHiddenModal] = useContext(ShowModalSubmitContext);

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
