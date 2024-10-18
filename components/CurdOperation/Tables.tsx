import React, { useState } from 'react';
import { MdDelete } from "react-icons/md";
import { CiCreditCard2 } from "react-icons/ci";
import { toast, Toaster } from 'react-hot-toast';

interface User {
  name: string;
  email: string;
  phone: string;
  password: string;
}

interface UserTableProps {
  users: User[];
  deleteUser: (index: number) => void;
  editUser: (index: number, updatedUser: User) => void;
}

const Tables: React.FC<UserTableProps> = ({ users, deleteUser, editUser }) => {
  const [editIndex, setEditIndex] = useState<number | null>(null);
  const [editFormData, setEditFormData] = useState<User>({
    name: '',
    email: '',
    phone: '',
    password: '',
  });

  const handleEditClick = (index: number) => {
    setEditIndex(index);
    setEditFormData(users[index]);
  };
  const handleSave = () =>{
    toast.success('Update Succesfully!!', {
      style: {
        border: '1px solid #713200',
        padding: '16px',
        color: '#713200',
      },
      iconTheme: {
        primary: '#713200',
        secondary: '#FFFAEE',
      },
    });
  }

  const handleDeleteClick = (index: number) => {
    deleteUser(index);
  };

  const handleEditChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setEditFormData({
      ...editFormData,
      [name]: value,
    });
  };

  const handleEditSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (editIndex !== null) {
      editUser(editIndex, editFormData);
      setEditIndex(null); // Exit edit mode
    }
  };

  return (
    
    <table className="min-w-full bg-white shadow-md rounded-lg overflow-hidden">
      <thead>
        <tr className="bg-gray-100">
          <th className="px-6 py-3 text-left text-sm font-bold text-gray-700 uppercase tracking-wider bg-red">Sr.No</th>
          <th className="px-6 py-3 text-left text-sm font-bold text-gray-700 uppercase tracking-wider">Name</th>
          <th className="px-6 py-3 text-left text-sm font-bold text-gray-700 uppercase tracking-wider">Email</th>
          <th className="px-6 py-3 text-left text-sm font-bold text-gray-700 uppercase tracking-wider">Phone</th>
          <th className="px-6 py-3 text-left text-sm font-bold text-gray-700 uppercase tracking-wider">Password</th>
          <th className="px-6 py-3 text-left text-sm font-bold text-gray-700 uppercase tracking-wider">Actions</th>
        </tr>
      </thead>
      <tbody>
        {users.length > 0 ? (
          users.map((user, index) => (
            <tr key={index} className="border-t">
              {editIndex === index ? (
                <td colSpan={6} className="px-6 py-4">
                  <form onSubmit={handleEditSubmit} className="space-y-4">
                    <input
                      type="text"
                      name="name"
                      value={editFormData.name}
                      onChange={handleEditChange}
                      placeholder="Name"
                      required
                      className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
                    />
                    <input
                      type="email"
                      name="email"
                      value={editFormData.email}
                      onChange={handleEditChange}
                      placeholder="Email"
                      required
                      className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
                    />
                    <input
                      type="text"
                      name="phone"
                      value={editFormData.phone}
                      onChange={handleEditChange}
                      placeholder="Phone"
                      required
                      className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
                    />
                    <input
                      type="password"
                      name="password"
                      value={editFormData.password}
                      onChange={handleEditChange}
                      placeholder="Password"
                      required
                      className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
                    />
                    <div className="flex space-x-4">
                      <button
                        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-4 rounded-lg"
                        type="submit"
                      onClick={handleSave}>
                        Save
                      </button>
                      <button
                        className="bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-4 rounded-lg"
                        onClick={() => setEditIndex(null)}
                      >
                        Cancel
                      </button>
                    </div>
                  </form>
                </td>
              ) : (
                <>
                  <td className="px-6 py-4">{index + 1}</td>
                  <td className="px-6 py-4">{user.name}</td>
                  <td className="px-6 py-4">{user.email}</td>
                  <td className="px-6 py-4">{user.phone}</td>
                  <td className="px-6 py-4">{user.password}</td>
                  <td className="px-6 py-4 flex space-x-2">
                    <button
                      className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-4 rounded-lg"
                      onClick={() => handleEditClick(index)}
                    >
                      <CiCreditCard2 />
                    </button>
                    <button
                      className="bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-4 rounded-lg"
                      onClick={() => handleDeleteClick(index)}
                    >
                      <MdDelete />
                    </button>
                  </td>
                </>
              )}
            </tr>
          ))
        ) : (
          <tr>
            <td colSpan={6} className="px-6 py-4 text-center text-gray-500">
              No users registered
            </td>
          </tr>
        )}
      </tbody>
    </table>
  );
};

export default Tables;
