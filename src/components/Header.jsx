import PropTypes from 'prop-types';

function Header({ handleLogout }) {
    return (
        <header className="bg-white shadow-md px-4 py-2 flex justify-between items-center">
            <h1 className="text-xl font-bold">Admin Panel</h1>
            <button onClick={handleLogout} className="bg-red-500 text-white px-4 py-2 rounded">
                Logout
            </button>
        </header>
    );
}

Header.propTypes = {
    handleLogout: PropTypes.func.isRequired,
};

export default Header;
