"use server";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

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
