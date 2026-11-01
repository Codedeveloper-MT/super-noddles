import LoginForm from "@/components/LoginForm/LoginForm";
import Link from "next/link";

export default function LoginPage() {
  return (
    <div>
      <LoginForm />
      <Link href="/account/forgot-password">Forget Password</Link>
      <Link href="/account/register">Create Account</Link>
    </div>
  );
}