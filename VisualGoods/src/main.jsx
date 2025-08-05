import { createRoot } from "react-dom/client";
import "./index.css";
import { SideMenu } from "./Components/SideMenu/SideMenu";

import { SummaryElementsValueProvider } from "./context/SummaryElementsValueProvider";
import { SelectedProductsListProvider } from "./context/SelectedProductsListContextProvider";

createRoot(document.getElementById("root")).render(
  <SelectedProductsListProvider>
    <SummaryElementsValueProvider>
      <SideMenu />
    </SummaryElementsValueProvider>
  </SelectedProductsListProvider>,
);
