"use client";
import { useState } from "react";

export default function ProfileForm() {
  const initialState = {
    name: "John",
    lastname: "Doe",
    email: "john.doe@yahoo.com",
    password: "",
    confirmPassword: "",
  };

  const [inputs, setInputs] = useState(initialState);

  const handleChange = (key, input) => {
    setInputs((prevState) => ({ ...prevState, [key]: input }));
  };

  const handleFocus = (key) => {
    if (inputs[key] === initialState[key]) {
      setInputs((prevState) => ({ ...prevState, [key]: "" }));
    }
  };

  const handleBlur = (key) => {
    if (inputs[key] === "") {
      setInputs((prevState) => ({ ...prevState, [key]: initialState[key] }));
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(inputs);
  };

  return (
    <div className="flex justify-center p-4">
      <form
        onSubmit={handleSubmit}
        className="grid grid-cols-1 grid-rows-4 gap-4 items-center w-[400px]"
      >
        <div className="flex flex-col gap-1">
          <label htmlFor="username" className="font-medium">
            Name
          </label>
          <input
            type="text"
            placeholder="name"
            className="border p-1 h-[40px] rounded-sm"
            id="username"
            value={inputs.name}
            onChange={(event) => handleChange("name", event.target.value)}
            onFocus={() => handleFocus("name")}
            onBlur={() => handleBlur("name")}
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
            value={inputs.lastname}
            onChange={(event) => handleChange("lastname", event.target.value)}
            onFocus={() => handleFocus("lastname")}
            onBlur={() => handleBlur("lastname")}
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
            value={inputs.email}
            onChange={(event) => handleChange("email", event.target.value)}
            onFocus={() => handleFocus("email")}
            onBlur={() => handleBlur("email")}
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
            value={inputs.password}
            onChange={(event) => handleChange("password", event.target.value)}
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
            value={inputs.confirmPassword}
            onChange={(event) =>
              handleChange("confirmPassword", event.target.value)
            }
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