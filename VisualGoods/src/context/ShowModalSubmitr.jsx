import { ShowModalSubmitContext } from "./ShowSubmitModal";
import { useState } from "react";

export function ShowModalSubmitProvider({ children }) {
  const [isHiddenModal, setIsHiddenModal] = useState(true);

  return (
    <ShowModalSubmitContext.Provider value={[isHiddenModal, setIsHiddenModal]}>
      {children}
    </ShowModalSubmitContext.Provider>
  );
}
