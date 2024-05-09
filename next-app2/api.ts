export interface User {
  id: number;
  name: string;
  email: string;
  age: string;
}

export const BASE_URL = "http://localhost:3000";

export async function createUser(name: string, email: string, age: string) {
  return await fetch(BASE_URL + "/api/create-user", {
    method: "POST",
    body: JSON.stringify({ name, email, age }),
  });
}
