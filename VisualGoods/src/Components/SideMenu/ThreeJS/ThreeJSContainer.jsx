import { useContext } from "react";
import { SimpleTrailer } from "./SimpleTrailer";
import { SimpleTruck } from "./SimpleTruck";
import { ThreeJsVehicelContext } from "../../../context/SetThreJSVehicle";

export function ThreeJSContainer() {
  const [typVeh] = useContext(ThreeJsVehicelContext);

  return (
    <>
      {typVeh === "Truck" && <SimpleTruck />}
      {typVeh === "Trailer" && <SimpleTrailer />}
    </>
  );
}
