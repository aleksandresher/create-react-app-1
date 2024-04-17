import { logout } from "@/app/actions";

export default function LogOut() {
  return <button onClick={() => logout()}>Log out</button>;
}
