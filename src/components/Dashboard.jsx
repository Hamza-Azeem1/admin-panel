import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, LineChart, Line } from 'recharts';

// Sales data
const salesData = [
    { name: 'Jan', sales: 4000 },
    { name: 'Feb', sales: 3000 },
    { name: 'Mar', sales: 5000 },
    { name: 'Apr', sales: 4500 },
    { name: 'May', sales: 6000 },
    { name: 'Jun', sales: 5500 },
    { name: 'Jul', sales: 7500 },
    { name: 'Aug', sales: 8500 },
    { name: 'Sept', sales: 8000 },
    { name: 'Oct', sales: 9000 },
    { name: 'Nov', sales: 7500 },
    { name: 'Dec', sales: 10500 },
];

// Customer data
const customerData = [
    { name: 'Jan', customers: 150 },
    { name: 'Feb', customers: 300 },
    { name: 'Mar', customers: 200 },
    { name: 'Apr', customers: 900 },
    { name: 'May', customers: 550 },
    { name: 'Jun', customers: 400 },
    { name: 'Jul', customers: 1050 },
    { name: 'Aug', customers: 1500 },
    { name: 'Sept', customers: 2550 },
    { name: 'Oct', customers: 600 },
    { name: 'Nov', customers: 1050 },
    { name: 'Dec', customers: 1700 },
];

const Dashboard = () => {
    return (
        <div className="p-6 space-y-8">
            <h2 className="text-2xl font-semibold mb-4">Dashboard Summary</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
                <div className="bg-white p-4 rounded-lg shadow">
                    <h3 className="text-lg font-semibold mb-2">Total Sales</h3>
                    <p className="text-3xl font-bold">$28,000</p>
                </div>
                <div className="bg-white p-4 rounded-lg shadow border border-gray-200">
                    <h3 className="text-lg font-semibold mb-2">Total Orders</h3>
                    <p className="text-3xl font-bold">1,254</p>
                </div>
                <div className="bg-white p-4 rounded-lg shadow border border-gray-200">
                    <h3 className="text-lg font-semibold mb-2">Total Products</h3>
                    <p className="text-3xl font-bold">346</p>
                </div>
                <div className="bg-white p-4 rounded-lg shadow border border-gray-200">
                    <h3 className="text-lg font-semibold mb-2">Total Users</h3>
                    <p className="text-3xl font-bold">5,678</p>
                </div>
            </div>
            <div className="bg-white p-4 rounded-lg shadow mb-8">
                <h3 className="text-lg font-semibold mb-4">Sales Trend</h3>
                <ResponsiveContainer width="100%" height={300}>
                    <AreaChart data={salesData}>
                        <CartesianGrid strokeDasharray="3 3" stroke="#e0e0e0" />
                        <XAxis dataKey="name" />
                        <YAxis />
                        <Tooltip />
                        <Area type="monotone" dataKey="sales" stroke="#4a90e2" fill="#d6eaf8" />
                    </AreaChart>
                </ResponsiveContainer>
            </div>
            <div className="bg-white p-4 rounded-lg shadow">
                <h3 className="text-lg text-black font-semibold mb-4">Customer Visits Trend</h3>
                <ResponsiveContainer width="100%" height={300}>
                    <LineChart data={customerData}>
                        <CartesianGrid strokeDasharray="3 3" stroke="#e0e0e0" />
                        <XAxis dataKey="name" />
                        <YAxis />
                        <Tooltip />
                        <Line type="monotone" dataKey="customers" stroke="#ff6f61" fill="#ffe0e0" />
                    </LineChart>
                </ResponsiveContainer>
            </div>

        </div>
    );
};

export default Dashboard;
