import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";

const SharedLayout = () => {
  return (
    <>
      <Outlet />
      <Footer />
    </>
  );
};
export default SharedLayout;
