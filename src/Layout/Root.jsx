import { Outlet } from "react-router-dom";
import Navbar from "../Header/Navbar/Navbar";


const Root = () => {
    return (
      <div className="max-w-6xl mx-auto font-font text-white">
        <Navbar></Navbar>
        <Outlet></Outlet>
      </div>
    );
};

export default Root;