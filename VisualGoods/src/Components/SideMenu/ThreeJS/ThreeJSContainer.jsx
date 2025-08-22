import { useContext } from "react";
import { SimpleTrailer } from "./SimpleTrailer";
import { SimpleTruck } from "./SimpleTruck";
import { SetVehicleContext } from "../../../context/SetVehicleContext";

export function ThreeJSContainer() {
  const [vehicle] = useContext(SetVehicleContext);

  return (
    <>
      {vehicle === "Truck" && <SimpleTruck />}
      {vehicle === "Trailer" && <SimpleTrailer />}
    </>
  );
}
