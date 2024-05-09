export async function getUsers() {
  try {
    const response = await fetch("http://localhost:3000/api/get-users");
    const { users } = await response.json();
    return users.rows;
  } catch (error) {
    console.error("Error fetching users:", error);
    return [];
  }
}
