import { cookies } from "next/headers";
import LoginForm from "@/components/login/Login";

export default function Login() {
  return (
    <section>
      <LoginForm />
    </section>
  );
}
