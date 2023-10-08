import { Outlet } from "react-router-dom";
import Navbar from "../Header/Navbar/Navbar";
import Footer from "../pages/footer/Footer";


const Root = () => {
    return (
      <div className="font-font text-white">
        <Navbar></Navbar>
        <div className="min-h-[500px]">
          <Outlet></Outlet>
        </div>

        <Footer></Footer>
      </div>
    );
};

export default Root;