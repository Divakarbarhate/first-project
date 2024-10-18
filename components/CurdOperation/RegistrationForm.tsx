"use client"
import React, { useState } from 'react';
import {toast, Toaster} from 'react-hot-toast';

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
    toast.success("Submitted Successfully!!")
  };

  return (
    <>
    <Toaster />
    <form onSubmit={handleSubmit}>
      <div>
        <label>Name:</label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Name"
          required
        />
      </div>
      <div>
        <label>Email:</label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Email Address"
          required
        />
      </div>
      <div>
        <label>Phone:</label>
        <input
          type="text"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          placeholder="Phone Number"
          required
        />
      </div>
      <div>
        <label>Create Password:</label>
        <input
          type="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          placeholder="Create Password"
          required
        />
      </div>
      <button id='btn' type="submit">Register</button>
    </form>
    </>
  );
};

export default RegistrationForm;
