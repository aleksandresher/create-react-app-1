"use server";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { createUser, deleteUser } from "../../api";

export async function loginUser() {
  try {
    const response = await fetch("https://dummyjson.com/auth/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        username: "kminchelle",
        password: "0lelplR",
      }),
    });
    const data = await response.json();

    if (data.token) {
      cookies().set("auth", data.token);
      redirect("/en");
    }

    return data; // Return the response data
  } catch (error) {
    console.error("Login failed:", error);
    throw error;
  }
}

export async function logout() {
  cookies().delete("auth");
  redirect("/en/login");
}

export async function createUserAction(formData: FormData) {
  const { name, email, age } = Object.fromEntries(formData);

  return createUser(name as string, email as string, age as string);
}

export async function deleteUserAction(id: number) {
  await deleteUser(id);
}
