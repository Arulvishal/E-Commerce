
import { Link, Outlet } from "react-router-dom";
import { FaShopify } from "react-icons/fa";
import Footer from "../Page/Footer";
import { DialogContext } from "../Layout/Context";
import { useContext } from "react";



export default function Navi() {
  const { dispatch } = useContext(DialogContext);

  return (
    <>
    <div className="h-screen flex flex-col">
      <nav className="bg-white shadow-sm p-4 flex justify-between items-center shadow-blue-400">
         <div><p className="flex pt-3 pl-2"><FaShopify />PicknPay</p></div>
        <div className="hidden md:flex space-x-6 text-sm font-medium text-gray-700">
          <Link to={"/"} className="hover:text-blue-600">
            Home
          </Link>
          <Link to={"/categories"} className="hover:text-blue-600">
            Categories
          </Link>
          <Link to={"/brands"} className="hover:text-blue-600">
            Brands
          </Link>
          <Link to={"/products"} className="hover:text-blue-600">
            Products
          </Link>
          <Link to={"/contact"} className="hover:text-blue-600">
            Contact
          </Link>
        </div>
    
        <div className="flex items-center justify-center bg-gray-200">
      <button
        onClick={()=>dispatch({type:"OPEN_LOGIN"})}
        className="px-6 py-3 bg-green-500 text-white rounded-lg hover:bg-blue-600"
      >
        Login
      </button>
    </div>
    <div>
          <button onClick={()=>dispatch({type:"OPEN_REGISTER"})} className="px-4 py-2 text-sm font-medium text-white bg-green-500 rounded-lg hover:bg-blue-700">
            Register
          </button>
        </div>
      </nav>  
          <div className=" border p-2  lg:hidden md:hidden flex justify-between text-sm font-medium text-gray-700">
              <Link to={"/"} className="hover:text-blue-600">
            Home
          </Link>
          <Link to={"/categories"} className="hover:text-blue-600">
            Categories
          </Link>
          <Link to={"/brands"} className="hover:text-blue-600">
            Brands
          </Link>
          <Link to={"/products"} className="hover:text-blue-600">
            Products
          </Link>
          <Link to={"/contact"} className="hover:text-blue-600">
            Contact
          </Link>
        </div> 
      <div className="flex-1">
      <Outlet />
        </div> 
      <Footer/>
    </div>
    </>
  );
}
