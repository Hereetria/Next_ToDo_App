// app/login/page.tsx
import LoginForm from "@/components/forms/auth/LoginForm";
import Link from "next/link";

export default function Page() {
  return (
    <div className="max-w-4xl w-full mx-auto mt-10 px-4 flex-1">
      <h1 className="text-2xl font-bold mb-6 text-center">Login</h1>
      <LoginForm />
      <p className="mt-4 text-center text-sm text-muted-foreground">
        Don’t have an account?{" "}
        <Link href="/signup" className="text-primary hover:underline">
          Sign Up
        </Link>
      </p>
    </div>
  );
}
