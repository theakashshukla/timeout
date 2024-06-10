"use client";

import React from "react";


export function Login() {
  const handleLogin = () => {
    window.location.href = `http://localhost:5000/auth/google`;
  };

  const handleRegister = () => {
    window.location.href = `http://localhost:5000/auth/google-mail`;
  }

  return (
    <div>
      <h1 className="text-4xl font-bold text-gray-900 dark:text-gray-100">
        Welcome to Timeout
      </h1>
      <button onClick={handleLogin}>Login with Google</button>
      <button onClick={handleRegister}>Register with Google</button>
    </div>
  );
}
