"use client";
import { FormEvent, useState } from "react";

export default function ProfileForm({dict}: {dict:any}) {
  const initialState = {
    name: "John",
    lastname: "Doe",
    email: "john.doe@yahoo.com",
    password: "",
    confirmPassword: "",
  };

  // keys of initalState
  type InputKey = keyof typeof initialState;

  const [inputs, setInputs] = useState(initialState);

  const handleChange = (key:string, input:string) => {
    setInputs((prevState) => ({ ...prevState, [key]: input }));
  };

  const handleFocus = (key:InputKey) => {
    if (inputs[key] === initialState[key]) {
      setInputs((prevState) => ({ ...prevState, [key]: "" }));
    }
  };

  const handleBlur = (key:InputKey) => {
    if (inputs[key] === "") {
      setInputs((prevState) => ({ ...prevState, [key]: initialState[key] }));
    }
  };

  const handleSubmit = (event:FormEvent) => {
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
            {dict.name}
          </label>
          <input
            type="text"
            placeholder={dict.name}
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
          {dict.lastname}
          </label>
          <input
            type="text"
            placeholder={dict.lastname}
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
            {dict.email}
          </label>
          <input
            type="email"
            placeholder={dict.email}
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
            {dict.password}
          </label>
          <input
            type="password"
            placeholder={dict.password}
            className="border p-1"
            id="password"
            value={inputs.password}
            onChange={(event) => handleChange("password", event.target.value)}
          />
        </div>

        <div className="flex flex-col gap-1">
          <label htmlFor="passwrod" className="font-medium">
            {dict.confirmPass}
          </label>
          <input
            type="password"
            placeholder={dict.confirmPass}
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
          {dict.btnText}
        </button>
      </form>
    </div>
  );
}
