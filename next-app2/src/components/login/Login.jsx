"use client";
import { useState } from "react";
import { loginUser } from "@/app/actions";

export default function LoginForm() {
  const [user, setUser] = useState({ username: "", password: "" });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser((prevUser) => ({
      ...prevUser,
      [name]: value,
    }));
  };

  const updatedWithUser = loginUser.bind(user);
  return (
    <form action={loginUser}>
      <input
        type="text"
        placeholder="Username"
        name="username"
        value={user.username}
        onChange={handleChange}
      />
      <input
        type="password"
        placeholder="Password"
        name="password"
        value={user.password}
        onChange={handleChange}
      />
      <button type="submit">Log In</button>
    </form>
  );
}
