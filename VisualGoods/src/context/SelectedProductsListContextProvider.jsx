import { useState } from "react";
import { SelectedProductsListContext } from "./SelectedProductsListContext";

export function SelectedProductsListProvider({ children }) {
  const [addedGoods, setAddedGoods] = useState([]);

  return (
    <SelectedProductsListContext.Provider value={[addedGoods, setAddedGoods]}>
      {children}
    </SelectedProductsListContext.Provider>
  );
}
