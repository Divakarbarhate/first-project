"use client";
import React, { useState } from 'react';
import { toast, Toaster } from 'react-hot-toast';

interface User {
  name: string;
  email: string;
  phone: string;
  password: string;
}

interface RegistrationFormProps {
  addUser: (user: User) => void;
}

const RegistrationForm: React.FC<RegistrationFormProps> = ({ addUser }) => {
  const [formData, setFormData] = useState<User>({
    name: '',
    email: '',
    phone: '',
    password: '',
  });

  console.log("This is CLient Side component");
  

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    addUser(formData);
    setFormData({ name: '', email: '', phone: '', password: '' });
    toast.success("Submitted Successfully!!");
  };

  return (
    <>
      <Toaster />
      <form 
        onSubmit={handleSubmit} 
        className="max-w-sm mx-auto bg-white dark:bg-gray-600 shadow-lg rounded-lg p-8 mt-6 border border-black border-opacity-50 "
      >
        <div className="mb-6">
          <label className="block text-gray-700 text-sm font-bold mb-2">Name:</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Enter your name"
            required
            className="w-full px-4 py-2 border rounded-lg text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div className="mb-6">
          <label className="block text-gray-700 text-sm font-bold mb-2">Email:</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Enter your email"
            required
            className="w-full px-4 py-2 border rounded-lg text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div className="mb-6">
          <label className="block text-gray-700 text-sm font-bold mb-2">Phone:</label>
          <input
            type="text"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            placeholder="Enter your phone number"
            required
            className="w-full px-4 py-2 border rounded-lg text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div className="mb-6">
          <label className="block text-gray-700 text-sm font-bold mb-2">Create Password:</label>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            placeholder="Create a password"
            required
            className="w-full px-4 py-2 border rounded-lg text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div className="text-center">
          <button
            id="btn"
            type="submit"
            className="w-full bg-blue-500 dark:bg-secondary hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg transition duration-200"
          >
            Register
          </button>
        </div>
      </form>
    </>
  );
};

export default RegistrationForm;
