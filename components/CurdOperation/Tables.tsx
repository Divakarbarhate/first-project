"use client";
import React, { useState } from "react";
import { MdDelete } from "react-icons/md";
import { CiCreditCard2 } from "react-icons/ci";
import { toast, Toaster } from "react-hot-toast";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Input } from "@/components/ui/input"

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
    name: "",
    email: "",
    phone: "",
    password: "",
  });

  const handleEditClick = (index: number) => {
    setEditIndex(index);
    setEditFormData(users[index]);
  };

  const handleSave = () => {
    toast.success("Update Successfully!");
  };

  const handleDeleteClick = (index: number) => {
    deleteUser(index);
    toast.error("Deleted Successfully!");
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
    editUser(editIndex!, editFormData);
    setEditIndex(null);
    handleSave();
  };

  return (
    <>
      <Toaster />
      <table className="min-w-full bg-white border border-gray-300">
        <thead>
          <tr>
            <th className="px-6 py-3 text-left text-sm font-bold text-gray-700 uppercase tracking-wider">
              No
            </th>
            <th className="px-6 py-3 text-left text-sm font-bold text-gray-700 uppercase tracking-wider">
              Name
            </th>
            <th className="px-6 py-3 text-left text-sm font-bold text-gray-700 uppercase tracking-wider">
              Email
            </th>
            <th className="px-6 py-3 text-left text-sm font-bold text-gray-700 uppercase tracking-wider">
              Phone
            </th>
            <th className="px-6 py-3 text-left text-sm font-bold text-gray-700 uppercase tracking-wider">
              Password
            </th>
            <th className="px-6 py-3 text-left text-sm font-bold text-gray-700 uppercase tracking-wider">
              Actions
            </th>
          </tr>
        </thead>
        <tbody className="bg-white">
          {users.map((user, index) => (
            <tr key={index} className="hover:bg-gray-100">
              <td className="px-6 py-4 border-b border-gray-200">
                {index + 1}
              </td>
              <td className="px-6 py-4 border-b border-gray-200">
                {user.name}
              </td>
              <td className="px-6 py-4 border-b border-gray-200">
                {user.email}
              </td>
              <td className="px-6 py-4 border-b border-gray-200">
                {user.phone}
              </td>
              <td className="px-6 py-4 border-b border-gray-200">
                {user.password}
              </td>
              <td className="px-6 py-4 border-b border-gray-200">
                {/* Edit Button that triggers the AlertDialog */}
                <AlertDialog>
                  <AlertDialogTrigger asChild>
                    <button
                      onClick={() => handleEditClick(index)}
                      className="bg-blue-500 text-white px-4 py-2 rounded ml-2"
                    >
                      <CiCreditCard2 />
                    </button>
                  </AlertDialogTrigger>
                  <AlertDialogContent>
                    <AlertDialogHeader>
                      <AlertDialogTitle>Edit User</AlertDialogTitle>
                      <AlertDialogDescription>
                        Please update the user details below:
                        {/* Edit Form inside the dialog */}
                        <form onSubmit={handleEditSubmit} className="space-y-4 mt-4">
                          <input
                            type="text"
                            name="name"
                            value={editFormData.name}
                            onChange={handleEditChange}
                            className="w-full border px-2 py-1"
                            placeholder="Name"
                          />
                          <input
                            type="email"
                            name="email"
                            value={editFormData.email}
                            onChange={handleEditChange}
                            className="w-full border px-2 py-1"
                            placeholder="Email"
                          />
                          <input
                            type="text"
                            name="phone"
                            value={editFormData.phone}
                            onChange={handleEditChange}
                            className="w-full border px-2 py-1"
                            placeholder="Phone"
                          />
                          <input
                            type="password"
                            name="password"
                            value={editFormData.password}
                            onChange={handleEditChange}
                            className="w-full border px-2 py-1"
                            placeholder="Password"
                          />
                          <div className="flex justify-end mt-4">
                            <button
                              type="submit"
                              className="bg-green-500 text-white px-4 py-2 rounded"
                            >
                              Save
                            </button>
                          </div>
                        </form>
                      </AlertDialogDescription>
                    </AlertDialogHeader>
                    <AlertDialogFooter>
                      <AlertDialogCancel>Cancel</AlertDialogCancel>
                    </AlertDialogFooter>
                  </AlertDialogContent>
                </AlertDialog>

                {/* Delete Button */}
                <button
                  onClick={() => handleDeleteClick(index)}
                  className="bg-red-500 text-white px-4 py-2 rounded ml-2"
                >
                  <MdDelete />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default Tables;
