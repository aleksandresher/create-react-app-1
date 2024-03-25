import React from "react";

export default function ProfileForm() {
  return (
    <div className="flex justify-center p-4">
      <form className="flex flex-col gap-2">
        <div className="flex flex-col gap-1">
          <label htmlFor="username">username</label>
          <input
            type="text"
            placeholder="username"
            className="border p-1"
            id="username"
          />
        </div>

        <div className="flex flex-col">
          <label htmlFor="lastname">lastname</label>
          <input
            type="text"
            placeholder="lastname"
            className="border p-1"
            id="lastname"
          />
        </div>

        <div className="flex flex-col">
          <label htmlFor="email">email</label>
          <input
            type="email"
            placeholder="email"
            className="border p-1"
            id="email"
          />
        </div>

        <div className="flex flex-col">
          <label htmlFor="passwrod">password</label>
          <input
            type="password"
            placeholder="password"
            className="border p-1"
            id="password"
          />
        </div>

        <div className="flex flex-col">
          <label htmlFor="passwrod">confirm password</label>
          <input
            type="password"
            placeholder="confrim password"
            className="border p-1"
            id="confirmPassword"
          />
        </div>
        <button type="submit" className="bg-green-300 p-2 rounded-md">
          Save
        </button>
      </form>
    </div>
  );
}
