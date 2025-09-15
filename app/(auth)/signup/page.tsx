import SignUpForm from "@/components/forms/auth/SignUpForm";

export default function SignUpPage() {
  return (
    <div className="max-w-4xl w-full mx-auto mt-10 px-4 flex-1">
      <h1 className="text-2xl font-bold mb-6 text-center">Sign Up</h1>
      <SignUpForm />
      <p className="mt-4 text-center text-sm text-muted-foreground">
        Already have an account?{" "}
        <a href="/login" className="text-primary hover:underline">
          Login
        </a>
      </p>
    </div>
  );
}
