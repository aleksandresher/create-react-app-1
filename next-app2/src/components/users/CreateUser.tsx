"use client";
import { useState } from "react";
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
import { useToast } from "../../../@/components/ui/use-toast";

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
  const { toast } = useToast();
  const [open, setOpen] = useState(false);

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
        toast({ variant: "destructive", description: "Failed to create user" });
        throw new Error("Failed to create user");
      }

      const userData = await response.json();
      toast({ description: "User created successfully" });
      setOpen(false);
      console.log("User created successfully:", userData);
    } catch (error) {
      console.error("Error creating user:", error);
    }
  };

  return (
    <section>
      <Dialog open={open} onOpenChange={setOpen}>
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
                <div className="flex flex-col gap-1">
                  <div className="w-full flex items-center justify-between gap-2">
                    <label htmlFor="name">Name</label>
                    <input
                      className="p-2  rounded-[8px] w-4/5 border border-[#4fec5c] outline-none focus:border-[#48a850]"
                      id="name"
                      {...register("name", {
                        required: "Name is required",
                      })}
                    />
                  </div>
                  <span className="flex justify-end px-2">
                    {errors.name?.message && (
                      <p className="text-red-600">{errors.name?.message}</p>
                    )}
                  </span>
                </div>
                <div className="flex flex-col gap-1">
                  <div className="w-full flex items-center justify-between gap-2">
                    <label htmlFor="email">Email</label>
                    <input
                      className="p-2  rounded-[8px] w-4/5 border border-[#4fec5c] outline-none focus:border-[#48a850]"
                      id="email"
                      {...register("email", {
                        required: "Email is required",
                        pattern: {
                          value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                          message: "Invalid email address",
                        },
                      })}
                    />
                  </div>
                  <span className="flex justify-end">
                    {errors.email?.message && (
                      <p className="text-red-600">{errors.email?.message}</p>
                    )}
                  </span>
                </div>

                <div className="flex flex-col gap-1">
                  <div className="w-full flex items-center justify-between gap-2">
                    <label htmlFor="age">Age</label>
                    <input
                      className="p-2  rounded-[8px] w-4/5 border border-[#4fec5c] outline-none focus:border-[#48a850]"
                      id="age"
                      type="number"
                      {...register("age", {
                        required: "Age is required",
                      })}
                    />
                  </div>
                  <span className="flex justify-end">
                    {errors.age?.message && (
                      <p className="text-red-600">{errors.age?.message}</p>
                    )}
                  </span>
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
