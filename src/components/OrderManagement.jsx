import { useState } from 'react';

const OrderManagement = () => {
    const [orders] = useState([
        { id: 1, customer: 'John Doe', status: 'received' },
        { id: 2, customer: 'Jane Smith', status: 'pending' },
        { id: 3, customer: 'Mike Johnson', status: 'received' },
        { id: 4, customer: 'Sarah Brown', status: 'pending' },
        { id: 5, customer: 'Julian', status: 'received' },
        { id: 6, customer: 'Peter', status: 'received' },
        { id: 7, customer: 'Sam Altman', status: 'received' },
        { id: 8, customer: 'Elon Musk', status: 'delivered' },
        { id: 9, customer: 'Bill Gates', status: 'delivered' },
        { id: 10, customer: 'Jeff Bezos', status: 'delivered' },
    ]);

    const totalOrders = orders.length;
    const receivedOrders = orders.filter(order => order.status === 'received');
    const pendingOrders = orders.filter(order => order.status === 'pending');
    const deliveredOrders = orders.filter(order => order.status === 'delivered');

    return (
        <div className="p-4">
            <h2 className="text-2xl font-bold mb-4 text-center">Order Management</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                <div className="bg-black text-white p-4 rounded shadow text-center">
                    <h3 className="text-lg font-semibold">Total Orders</h3>
                    <p className="text-2xl">{totalOrders}</p>
                </div>
                <div className="bg-yellow-400 text-white p-4 rounded shadow text-center">
                    <h3 className="text-lg font-semibold">Orders Received</h3>
                    <p className="text-2xl">{receivedOrders.length}</p>
                </div>
                <div className="bg-red-500 text-white p-4 rounded shadow text-center">
                    <h3 className="text-lg font-semibold">Orders Pending</h3>
                    <p className="text-2xl">{pendingOrders.length}</p>
                </div>
                <div className="bg-green-800 text-white p-4 rounded shadow text-center">
                    <h3 className="text-lg font-semibold">Orders Delivered</h3>
                    <p className="text-2xl">{deliveredOrders.length}</p>
                </div>
            </div>
            <div className="space-y-8">
                <div className="bg-white p-4 rounded shadow">
                    <h3 className="text-xl font-semibold mb-2">Orders Received</h3>
                    <div className="space-y-2">
                        {receivedOrders.map((order) => (
                            <div key={order.id} className="p-2 border rounded flex justify-between items-center">
                                <span className="flex-1 text-center">{order.customer}</span>
                                <span className="flex-1 text-center capitalize font-semibold text-yellow-800">{order.status}</span>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="bg-white p-4 rounded shadow">
                    <h3 className="text-xl font-semibold mb-2">Orders Pending</h3>
                    <div className="space-y-2">
                        {pendingOrders.map((order) => (
                            <div key={order.id} className="p-2 border rounded flex justify-between items-center">
                                <span className="flex-1 text-center">{order.customer}</span>
                                <span className="flex-1 text-center capitalize font-semibold text-red-800">{order.status}</span>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="bg-white p-4 rounded shadow">
                    <h3 className="text-xl font-semibold mb-2">Orders Delivered</h3>
                    <div className="space-y-2">
                        {deliveredOrders.map((order) => (
                            <div key={order.id} className="p-2 border rounded flex justify-between items-center">
                                <span className="flex-1 text-center">{order.customer}</span>
                                <span className="flex-1 text-center capitalize font-semibold text-green-800">{order.status}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default OrderManagement;
