import { useState } from "react";
import { SetVehicleContext } from "./SetVehicleContext";

export function SetVehicleContextProvider({ children }) {
  const [vehicle, setVehicle] = useState(true);

  return (
    <SetVehicleContext.Provider value={[vehicle, setVehicle]}>
      {children}
    </SetVehicleContext.Provider>
  );
}
