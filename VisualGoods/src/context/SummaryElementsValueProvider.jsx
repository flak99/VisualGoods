import { SummaryElementsValue } from "./SummaryElementsValue";
import { useState } from "react";

export function SummaryElementsValueProvider({ children }) {
  const [summary, setSummary] = useState({});

  return (
    <SummaryElementsValue.Provider value={[summary, setSummary]}>
      {children}
    </SummaryElementsValue.Provider>
  );
}
