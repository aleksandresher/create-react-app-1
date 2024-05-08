"use client";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogClose,
} from "../../../@/components/ui/dialog";

import { useForm } from "react-hook-form";

interface UserType {
  name: string;
  email: string;
  age: string;
}

const CreateUser = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<UserType>();

  const onSubmit = async (data: UserType) => {
    try {
      const response = await fetch("/api/create-user", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error("Failed to create user");
      }

      const userData = await response.json();
      console.log("User created successfully:", userData);
    } catch (error) {
      console.error("Error creating user:", error);
    }
  };

  return (
    <section>
      <Dialog>
        <DialogTrigger
          asChild
          className=" flex justify-center  items-center mt-3 border-2 rounded-[8px] border-outset border-opacity-50 border-[#f1a45d] p-2 cursor-pointer w-[150px]"
        >
          <p>Create User</p>
        </DialogTrigger>
        <div className="">
          <DialogContent className="w-[450px] opacity-100 bg-[#c7f9cc] left-[35%] top-[35%] absolute">
            <form onSubmit={handleSubmit(onSubmit)}>
              <section className="flex flex-col w-[400px] p-3 gap-4">
                {" "}
                <div className="w-full flex items-center justify-between gap-2">
                  <label htmlFor="name">Name</label>
                  <input
                    className="p-2  rounded-[8px] w-4/5 border border-[#4fec5c] outline-none focus:border-[#48a850]"
                    id="name"
                    {...register("name", {
                      required: "this field is required",
                    })}
                  />
                  {errors.name?.message && <span>{errors.name?.message}</span>}
                </div>
                <div className="w-full flex items-center justify-between gap-2">
                  <label htmlFor="email">Email</label>
                  <input
                    className="p-2  rounded-[8px] w-4/5 border border-[#4fec5c] outline-none focus:border-[#48a850]"
                    id="email"
                    {...register("email", {
                      required: "this field is required",
                    })}
                  />
                  {errors.email?.message && (
                    <span>{errors.email?.message}</span>
                  )}
                </div>
                <div className="w-full flex items-center justify-between gap-2">
                  <label htmlFor="age">Age</label>
                  <input
                    className="p-2  rounded-[8px] w-4/5 border border-[#4fec5c] outline-none focus:border-[#48a850]"
                    id="age"
                    {...register("age", {
                      required: "this field is required",
                    })}
                  />
                  {errors.age?.message && <span>{errors.age?.message}</span>}
                </div>
              </section>
              <DialogFooter>
                <button
                  type="submit"
                  className="bg-green-400 rounded-full p-2 uppercase"
                >
                  Create
                </button>
              </DialogFooter>
            </form>
          </DialogContent>
        </div>
      </Dialog>
    </section>
  );
};

export default CreateUser;
