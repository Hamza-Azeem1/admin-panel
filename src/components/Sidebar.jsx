import { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaUser } from "react-icons/fa";
import { MdHome, MdShoppingBag, MdShoppingCart, MdMenu, MdClose } from "react-icons/md";

const Sidebar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleSidebar = () => {
        setIsOpen(!isOpen);
    };

    return (
        <>
            <button
                className="md:hidden fixed top-2 left-4 z-50 flex items-center justify-center"
                onClick={toggleSidebar}
            >
                {isOpen ? <MdClose className="h-8 w-8 text-white" /> : <MdMenu className="h-8 w-8 text-black" />}
            </button>


            <div
                className={`bg-gray-800 text-white w-64 space-y-6 py-7 px-2 fixed inset-y-0 left-0 transform ${isOpen ? "translate-x-0" : "-translate-x-full"} md:relative md:translate-x-0 transition duration-200 ease-in-out z-40`}
            >
                <nav>
                    <Link to="/" className="block py-2.5 px-4 rounded transition duration-200 hover:bg-gray-700 hover:text-white" onClick={() => setIsOpen(false)}>
                        <MdHome className="h-5 w-5 inline-block mr-2" />
                        Dashboard
                    </Link>
                    <Link to="/products" className="block py-2.5 px-4 rounded transition duration-200 hover:bg-gray-700 hover:text-white" onClick={() => setIsOpen(false)}>
                        <MdShoppingBag className="h-5 w-5 inline-block mr-2" />
                        Products
                    </Link>
                    <Link to="/orders" className="block py-2.5 px-4 rounded transition duration-200 hover:bg-gray-700 hover:text-white" onClick={() => setIsOpen(false)}>
                        <MdShoppingCart className="h-5 w-5 inline-block mr-2" />
                        Orders
                    </Link>
                    <Link to="/users" className="block py-2.5 px-4 rounded transition duration-200 hover:bg-gray-700 hover:text-white" onClick={() => setIsOpen(false)}>
                        <FaUser className="h-5 w-5 inline-block mr-2" />
                        Users
                    </Link>
                </nav>
            </div>

            {/* Overlay for mobile view when sidebar is open */}
            {isOpen && <div className="fixed inset-0 bg-black opacity-50 z-30 md:hidden" onClick={toggleSidebar}></div>}
        </>
    );
};

export default Sidebar;
