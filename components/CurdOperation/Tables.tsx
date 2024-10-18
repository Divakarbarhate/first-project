import React, { useState } from 'react';
import { MdDelete } from "react-icons/md";
import { CiCreditCard2 } from "react-icons/ci";
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
    <table>
      <thead>
        <tr>
          <th>Sr.No</th>
          <th>Name</th>
          <th>Email</th>
          <th>Phone</th>
          <th>Create Password</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {users.length > 0 ? (
          users.map((user, index) => (
            <tr key={index}>
              {editIndex === index ? (
                <td colSpan={6}>
                  {/* Edit Mode */}
                  <form onSubmit={handleEditSubmit}>
                    <input
                      type="text"
                      name="name"
                      value={editFormData.name}
                      onChange={handleEditChange}
                      placeholder="Name"
                      required
                    />
                    <input
                      type="email"
                      name="email"
                      value={editFormData.email}
                      onChange={handleEditChange}
                      placeholder="Email"
                      required
                    />
                    <input
                      type="text"
                      name="phone"
                      value={editFormData.phone}
                      onChange={handleEditChange}
                      placeholder="Phone"
                      required
                    />
                    <input
                      type="password"
                      name="password"
                      value={editFormData.password}
                      onChange={handleEditChange}
                      placeholder="Password"
                      required
                    />
                    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-2 rounded mr-2" type="submit">Save</button>
                    <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-2 rounded margin-top 20px" onClick={() => setEditIndex(null)}>Cancel</button>
                  </form>
                </td>
              ) : (
                <>
                  <td>{index + 1}</td>
                  <td>{user.name}</td>
                  <td>{user.email}</td>
                  <td>{user.phone}</td>
                  <td>{user.password}</td>
                  <td>
                    <button  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-2 rounded mr-2"
   onClick={() => handleEditClick(index)}><CiCreditCard2 /></button>
                    <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-2 rounded" onClick={() => handleDeleteClick(index)}><MdDelete />
                    </button>
                  </td>
                </>
              )}
            </tr>
          ))
        ) : (
          <tr>
            <td colSpan={6}>No users registered</td>
          </tr>
        )}
      </tbody>
    </table>
  );
};

export default Tables;

