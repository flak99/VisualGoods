import { createRoot } from "react-dom/client";
import "./index.css";
import { SideMenu } from "./Components/SideMenu/SideMenu";

createRoot(document.getElementById("root")).render(
  <>
    <SideMenu />
  </>,
);
