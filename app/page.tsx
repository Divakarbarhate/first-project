
'use client';
import React, { useState } from 'react';
import RegistrationForm from '@/components/CurdOperation/RegistrationForm';
import { useRouter } from 'next/navigation';

const RegisterPage = () => {
  const [users, setUsers] = useState<User[]>([]);
  const router = useRouter();

  const addUser = (newUser: User) => {
    setUsers([...users, newUser]);
   
    router.push('/tables');
  };

  return (
    <div>
      <h2 className="text-2xl sm:text-2xl font-semibold dark:text-white text-gray-800 mb-5 mt-7 text-center">Registration Form</h2>
      <RegistrationForm addUser={addUser} />
    </div>
  );
};

export default RegisterPage;