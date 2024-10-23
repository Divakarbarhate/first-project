
"use client";
import React, { useState, useEffect } from "react";
import Tables from "@/components/CurdOperation/Tables";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
const TablesPage = () => {
  const [users, setUsers] = useState<User[]>([]);
  const router = useRouter(); 

 
  useEffect(() => {
    const storedUsers = JSON.parse(localStorage.getItem("users") || "[]");
    setUsers(storedUsers);
  }, []);

  const deleteUser = (index: number) => {
    const updatedUsers = users.filter((_, i) => i !== index);
    setUsers(updatedUsers);
    localStorage.setItem("users", JSON.stringify(updatedUsers)); 
  };

  const editUser = (index: number, updatedUser: User) => {
    const updatedUsers = [...users];
    updatedUsers[index] = updatedUser;
    setUsers(updatedUsers);
    localStorage.setItem("users", JSON.stringify(updatedUsers)); 
  };

  return (
    <>
      <h2 className="text-2xl sm:text-2xl font-semibold dark:text-white text-gray-800 mb-5 mt-7 text-center">
        User Table
      </h2>
    
         <Button  
        className="mb-4 "
       onClick={() => router.push("/register")}>  Back to Registration</Button>
       
    
      <Tables users={users} deleteUser={deleteUser} editUser={editUser} />
    </>
  );
};

export default TablesPage;
