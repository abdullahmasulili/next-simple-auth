"use client";

import Button from "@/components/Button";
import Card from "@/components/Card";
import { useAuth } from "@/context/AuthContext";
import Image from "next/image";
import React, { useEffect, useState } from "react";

export default function Users() {
  const { logout } = useAuth();
  const [pageData, setPageData] = useState(null);

  async function fetchUsers() {
    try {
      const response = await fetch("https://reqres.in/api/users?per_page=100");

      if (!response.ok) {
        throw new Error({ message: "Failed fetch users", status: 500 });
      }

      const resData = await response.json();
      console.log(resData);
      setPageData(resData);
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    if (!pageData) {
      fetchUsers();
    }
  }, [pageData]);

  return (
    <>
      <header className="sticky top-0 h-fit-content bg-stone-900 flex items-center justify-between p-4">
        <h1 className="text-xl">Welcome</h1>
        <Button onClick={() => logout()}>Logout</Button>
      </header>
      <main className="flex justify-center">
        <div className="container py-8 grid grid-cols-3 gap-2">
          {pageData?.data.map((user) => (
            <Card
              key={user.last_name}
              className="flex items-center gap-4 w-full"
            >
              <div className="rounded-full h-14 w-14 overflow-hidden">
                <img src={user.avatar} alt="user-avatar" />
              </div>
              <div className="flex flex-col items-start gap-1">
                <h1 className="text-xl font-bold">
                  {user.first_name} {user.last_name}
                </h1>
                <p className="text-base font-thin">{user.email}</p>
              </div>
            </Card>
          ))}
        </div>
      </main>
    </>
  );
}
