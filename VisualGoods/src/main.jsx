import { createRoot } from "react-dom/client";
import "./index.css";
import { SideMenu } from "./Components/SideMenu/SideMenu";

import { SelectedProductsListProvider } from "./context/SelectedProductsListContextProvider";

createRoot(document.getElementById("root")).render(
  <SelectedProductsListProvider>
    <SideMenu />
  </SelectedProductsListProvider>,
);
