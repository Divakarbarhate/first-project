"use client"
import React from 'react';
import RegistrationForm from "./RegistrationForm"
import Tables from "./Tables"

import { useState } from 'react';




// const index
const index = () => {
  const [users, setUsers] = useState([]);

  const addUser = (newUser) => {
    setUsers([...users, newUser]);
  };
  
  const deleteUser = (index: number) => {
    const updatedUsers = users.filter((_, i) => i !== index);
    setUsers(updatedUsers);
  };

  const editUser = (index: number, updatedUser: User) => {
    const updatedUsers = [...users];
    updatedUsers[index] = updatedUser;
    setUsers(updatedUsers);
  };
  return (
    <div>

      <h2 className="text-2xl sm:text-2xl font-semibold text-gray-800 mb-5 mt-7 text-center">Registration Form</h2>
      <RegistrationForm addUser={addUser} />
      <h2 className="text-2xl sm:text-2xl font-semibold text-gray-800 mb-4 mt-5 text-center">Registered Users</h2>
      <Tables users={users} deleteUser={deleteUser} editUser={editUser} />
    </div>
  );
};

export default index;