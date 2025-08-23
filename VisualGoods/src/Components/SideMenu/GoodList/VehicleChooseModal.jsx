import { IoClose } from "react-icons/io5";
import { useContext } from "react";
import {
  modalBase,
  closeModal,
  buttonView,
  buttonsArea,
} from "../../../styles/OverlookVehicles";
import { SetVehicleContext } from "../../../context/SetVehicleContext";
import { ThreeJsVehicelContext } from "../../../context/SetThreJSVehicle";

export function VehicleChooseModal() {
  const [isHiddenVehicleModla, setIsHiddenVehicleModal] =
    useContext(SetVehicleContext);

  const [, setTypeVeh] = useContext(ThreeJsVehicelContext);

  function onHandleClick(text) {
    setTypeVeh(text);
    setIsHiddenVehicleModal(true);
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
              onClick={() => onHandleClick("")}
            />
          </div>
          <div className={buttonsArea}>
            <button
              onClick={() => onHandleClick("Truck")}
              className={buttonView}
            >
              Ciężarówka z HDS
            </button>
            <button
              onClick={() => onHandleClick("Trailer")}
              className={buttonView}
            >
              {" "}
              Naczepa{" "}
            </button>
          </div>
        </div>
      )}
    </>
  );
}
