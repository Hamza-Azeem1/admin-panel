import PropTypes from 'prop-types';

function Header({ handleLogout }) {
    return (
        <header className="bg-white shadow-md px-4 py-2 flex justify-between items-center">
            <h1 className="text-lg md:text-xl font-bold md:ml-0 ml-[60px]">Admin Panel</h1>
            <button
                onClick={handleLogout}
                className="bg-red-500 text-white px-3 py-1.5 md:px-4 md:py-2 rounded text-sm md:text-base"
            >
                Logout
            </button>
        </header>
    );
}

Header.propTypes = {
    handleLogout: PropTypes.func.isRequired,
};

export default Header;
