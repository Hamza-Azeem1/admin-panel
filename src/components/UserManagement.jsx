import { useState } from 'react';
import { FaTrashAlt } from 'react-icons/fa';

const UserManagement = () => {
    const [users, setUsers] = useState([
        { id: 1, name: 'John Doe', email: 'john.doe@example.com', role: 'admin' },
        { id: 2, name: 'Jane Smith', email: 'jane.smith@example.com', role: 'user' },
        { id: 3, name: 'Mike Johnson', email: 'mike.johnson@example.com', role: 'user' },
        { id: 4, name: 'Sarah Brown', email: 'sarah.brown@example.com', role: 'user' },
        { id: 5, name: 'Julian', email: 'julian@example.com', role: 'user' },
        { id: 6, name: 'Peter', email: 'Peter@example.com', role: 'user' },
        { id: 7, name: 'Sam Altman', email: 'sam.altman@example.com', role: 'user' },
        { id: 8, name: 'Elon Musk', email: 'elon.musk@example.com', role: 'user' },
        { id: 9, name: 'Bill Gates', email: 'bill.gates@example.com', role: 'user' },
        { id: 10, name: 'Jeff Bezos', email: 'jeff.bezos@example.com', role: 'user' },
    ]);

    const handleDelete = (id) => {
        setUsers(users.filter(user => user.id !== id));
    };

    return (
        <div className="p-4">
            <h2 className="text-2xl font-bold mb-4 text-center">User Management</h2>
            <div className="overflow-x-auto">
                <table className="min-w-full bg-white border border-gray-300">
                    <thead>
                        <tr>
                            <th className="py-2 px-4 border border-gray-300 text-center">Name</th>
                            <th className="py-2 px-4 border border-gray-300 text-center">Email</th>
                            <th className="py-2 px-4 border border-gray-300 text-center">Role</th>
                            <th className="py-2 px-4 border border-gray-300 text-center">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {users.map((user) => (
                            <tr key={user.id} className="hover:bg-gray-100">
                                <td className="py-2 px-4 border border-gray-300 text-center">{user.name}</td>
                                <td className="py-2 px-4 border border-gray-300 text-center">{user.email}</td>
                                <td className="py-2 px-4 border border-gray-300 text-center capitalize">{user.role}</td>
                                <td className="py-2 px-4 border border-gray-300 text-center">
                                    <button
                                        onClick={() => handleDelete(user.id)}
                                        className="text-red-500 hover:text-red-700 transition-colors"
                                    >
                                        <FaTrashAlt />
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default UserManagement;
