import { Outlet } from "react-router-dom";
import Navbar from "../../Pages/Shared/Navbar/Navbar";
import Footer from "../../Pages/Shared/Footer/Footer";

const Main = () => {
  return (
    <>
      <Navbar />
      <div className="min-h-[calc(100vh-56px)]">
        <Outlet />
      </div>
      <Footer />
    </>
  );
};

export default Main;
