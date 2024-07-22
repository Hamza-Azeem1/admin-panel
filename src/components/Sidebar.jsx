import { Link } from 'react-router-dom';
import { FaUser } from "react-icons/fa";
import { MdHome, MdShoppingBag, MdShoppingCart } from "react-icons/md";

const Sidebar = () => {
    return (
        <div className="bg-gray-800 text-white w-64 space-y-6 py-7 px-2 absolute inset-y-0 left-0 transform -translate-x-full md:relative md:translate-x-0 transition duration-200 ease-in-out">
            <nav>
                <Link to="/" className="block py-2.5 px-4 rounded transition duration-200 hover:bg-gray-700 hover:text-white">
                    <MdHome className="h-5 w-5 inline-block mr-2" />
                    Dashboard
                </Link>
                <Link to="/products" className="block py-2.5 px-4 rounded transition duration-200 hover:bg-gray-700 hover:text-white">
                    <MdShoppingBag className="h-5 w-5 inline-block mr-2" />
                    Products
                </Link>
                <Link to="/orders" className="block py-2.5 px-4 rounded transition duration-200 hover:bg-gray-700 hover:text-white">
                    <MdShoppingCart className="h-5 w-5 inline-block mr-2" />
                    Orders
                </Link>
                <Link to="/users" className="block py-2.5 px-4 rounded transition duration-200 hover:bg-gray-700 hover:text-white">
                    <FaUser className="h-5 w-5 inline-block mr-2" />
                    Users
                </Link>
            </nav>
        </div>
    );
};

export default Sidebar;