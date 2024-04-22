"use client";
import { useState } from "react";
import { loginUser } from "../app/actions";

export default function LoginForm() {
  const [user, setUser] = useState({ username: "", password: "" });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser((prevUser) => ({
      ...prevUser,
      [name]: value,
    }));
  };

  //   const updatedWithUser = loginUser.bind(user);
  return (
    <section className="flex justify-center  bg-[#d4dfee] p-12 ">
      <form
        action={loginUser}
        className="flex flex-col gap-6 rounded-[10px] w-[400px]"
      >
        <div className="flex flex-col gap-1 w-full">
          <label htmlFor="username" className="font-medium">
            Name
          </label>
          <input
            type="text"
            placeholder="Username"
            name="username"
            value={user.username}
            onChange={handleChange}
            className="border p-2 h-[40px] rounded-sm outline-none  focus:border-green-500"
          />
        </div>
        <div className="flex flex-col gap-1">
          <label htmlFor="password" className="font-medium">
            Password
          </label>
          <input
            type="password"
            placeholder="Password"
            name="password"
            value={user.password}
            onChange={handleChange}
            className="border  h-[40px] rounded-sm outline-none  focus:border-green-500 p-2"
          />
        </div>

        <button
          type="submit"
          className="bg-green-300 p-2 rounded-md row-span-4 hover:bg-green-400"
        >
          Log In
        </button>
      </form>
    </section>
  );
}
