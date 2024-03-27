import React from "react";

export default function ProfileForm() {
  return (
    <div className="flex justify-center p-4">
      <form className="grid grid-cols-1 grid-rows-4 gap-4 items-center w-[400px]">
        <div className="flex flex-col gap-1">
          <label htmlFor="username" className="font-medium">
            Name
          </label>
          <input
            type="text"
            placeholder="name"
            className="border p-1 h-[40px] rounded-sm"
            id="username"
            value="John"
          />
        </div>

        <div className="flex flex-col gap-1">
          <label htmlFor="lastname" className="font-medium">
            Lastname
          </label>
          <input
            type="text"
            placeholder="lastname"
            className="border p-1"
            id="lastname"
            value="Doe"
          />
        </div>

        <div className="flex flex-col gap-1">
          <label htmlFor="email" className="font-medium">
            Email
          </label>
          <input
            type="email"
            placeholder="email"
            className="border p-1"
            id="email"
            value="john.doe@yahoo.com"
          />
        </div>

        <div className="flex flex-col gap-1">
          <label htmlFor="passwrod" className="font-medium">
            Password
          </label>
          <input
            type="password"
            placeholder="password"
            className="border p-1"
            id="password"
          />
        </div>

        <div className="flex flex-col gap-1">
          <label htmlFor="passwrod" className="font-medium">
            Confirm password
          </label>
          <input
            type="password"
            placeholder="confrim password"
            className="border p-1"
            id="confirmPassword"
          />
        </div>
        <button
          type="submit"
          className="bg-green-300 p-2 rounded-md row-span-4 hover:bg-green-400"
        >
          Save
        </button>
      </form>
    </div>
  );
}
