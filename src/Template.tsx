import { Outlet } from "react-router-dom";
import { Navigation } from "./pages/navigation";

const Template = () => {
  return (
    <>
    <Navigation/>
      <Outlet />
    </>
  );
};
export default Template;
