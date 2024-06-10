"use client";

import React, { useEffect, useState } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";


export default function User() {
  const [authenticated, setAuthenticated] = useState(false);
  const [message, setMessage] = useState("");
  const [user, setUser] = useState<any>(null);
  const router = useRouter();

  useEffect(() => {
    axios
      .get("http://localhost:5000/dashboard", { withCredentials: true })
      .then((response) => {
        console.log(response.data);
        setMessage(response.data.message);
        setUser(response.data.user);
      })
      .catch((error) => {
        console.log(error);
        setMessage("Authentication failed. Please try again.");
      });
  }, []);

  const handleLogout = () => {
    axios.get('http://localhost:5000/auth/logout', { withCredentials: true }).then(() => {
      setAuthenticated(false);
      setUser(null);
      router.push('/');
    });
  };
  return (
    <div className="relative bg-gray-50 dark:bg-gray-900 min-h-screen p-4">
      {user ? (
        <div>
          <p>Welcome, {user.name}</p>
          <p>Email: {user.email}</p>
          <button onClick={handleLogout}>Logout</button>
        </div>
      ) : (
        <div>
          <p>{message}</p>
        </div>
      )}
    </div>
  );
}
