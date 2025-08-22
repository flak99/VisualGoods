import { createRoot } from "react-dom/client";
import "./index.css";
import { SideMenu } from "./Components/SideMenu/SideMenu";

import { SummaryElementsValueProvider } from "./context/SummaryElementsValueProvider";
import { SelectedProductsListProvider } from "./context/SelectedProductsListContextProvider";
import { ShowModalSubmitProvider } from "./context/ShowModalSubmitr";
import { SetVehicleContextProvider } from "./context/SetVehicleContextProvider";

createRoot(document.getElementById("root")).render(
  <SetVehicleContextProvider>
    <ShowModalSubmitProvider>
      <SelectedProductsListProvider>
        <SummaryElementsValueProvider>
          <SideMenu />
        </SummaryElementsValueProvider>
      </SelectedProductsListProvider>
    </ShowModalSubmitProvider>
  </SetVehicleContextProvider>,
);
