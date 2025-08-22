import { createRoot } from "react-dom/client";
import "./index.css";
import { SideMenu } from "./Components/SideMenu/SideMenu";

import { SummaryElementsValueProvider } from "./context/SummaryElementsValueProvider";
import { SelectedProductsListProvider } from "./context/SelectedProductsListContextProvider";
import { ShowModalSubmitProvider } from "./context/ShowModalSubmitr";

createRoot(document.getElementById("root")).render(
  <ShowModalSubmitProvider>
    <SelectedProductsListProvider>
      <SummaryElementsValueProvider>
        <SideMenu />
      </SummaryElementsValueProvider>
    </SelectedProductsListProvider>
  </ShowModalSubmitProvider>,
);
