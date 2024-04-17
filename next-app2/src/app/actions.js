"use server";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
const URL = process.env.BASE_URL;
export async function loginUser(user) {
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
      redirect(URL);
    }

    return data; // Return the response data
  } catch (error) {
    console.error("Login failed:", error);
    throw error;
  }
}

export async function logout() {
  cookies().delete("auth");
  redirect(URL);
}