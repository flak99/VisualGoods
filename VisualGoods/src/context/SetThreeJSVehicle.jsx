import { useState } from "react";
import { ThreeJsVehicelContext } from "./SetThreJSVehicle";

export function ThreeJsVehicelContextProvider({ children }) {
  const [typeVeh, setTypeVeh] = useState("");

  return (
    <ThreeJsVehicelContext.Provider value={[typeVeh, setTypeVeh]}>
      {children}
    </ThreeJsVehicelContext.Provider>
  );
}
