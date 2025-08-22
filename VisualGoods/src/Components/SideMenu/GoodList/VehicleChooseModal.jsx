import { IoClose } from "react-icons/io5";
import { BsTruckFlatbed } from "react-icons/bs";
import { FaTrailer } from "react-icons/fa6";
import {
  modalBase,
  closeModal,
  buttonView,
  buttonsArea,
} from "./OverlookVehicles";
import { useState } from "react";

export function VehicleChooseModal() {
  const [isHiddenVehicleModla, setIsHiddenVehicleModal] = useState(false);

  function HiddenModal() {
    setIsHiddenVehicleModal((prev) => !prev);
  }

  return (
    <>
      {!isHiddenVehicleModla && (
        <div className={modalBase}>
          <div className="flex">
            <IoClose
              className={closeModal}
              color="black"
              size={30}
              onClick={() => HiddenModal()}
            />
          </div>
          <div className={buttonsArea}>
            <button onClick={() => HiddenModal()} className={buttonView}>
              Ciężarówka z HDS
            </button>
            <button onClick={() => HiddenModal()} className={buttonView}>
              {" "}
              Naczepa{" "}
            </button>
          </div>
        </div>
      )}
    </>
  );
}
