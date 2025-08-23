import { createRoot } from "react-dom/client";
import "./index.css";
import { SideMenu } from "./Components/SideMenu/SideMenu";

import { SummaryElementsValueProvider } from "./context/SummaryElementsValueProvider";
import { SelectedProductsListProvider } from "./context/SelectedProductsListContextProvider";
import { ShowModalSubmitProvider } from "./context/ShowModalSubmitr";
import { SetVehicleContextProvider } from "./context/SetVehicleContextProvider";
import { ThreeJsVehicelContextProvider } from "./context/SetThreeJSVehicle";

createRoot(document.getElementById("root")).render(
  <SetVehicleContextProvider>
    <ShowModalSubmitProvider>
      <SelectedProductsListProvider>
        <SummaryElementsValueProvider>
          <ThreeJsVehicelContextProvider>
            <SideMenu />
          </ThreeJsVehicelContextProvider>
        </SummaryElementsValueProvider>
      </SelectedProductsListProvider>
    </ShowModalSubmitProvider>
  </SetVehicleContextProvider>,
);
