import { Outlet } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";


const Root = () => {
    return (
        <div className="family min-h-screen flex flex-col">
            <Navbar></Navbar>
           <div className="flex-1">
             <Outlet></Outlet>
           </div>
            <Footer></Footer>
        </div>
    );
};

export default Root;