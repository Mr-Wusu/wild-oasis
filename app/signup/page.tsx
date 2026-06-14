import SignUpForm from "@/app/_components/Auth/SignUpForm";

export default function SignUpPage() {
  return (
    <main className="min-h-screen flex items-center justify-center">
      <div className="w-full max-w-md p-6 border border-primary-8 rounded-xl shadow-sm">
        <h1 className="text-2xl font-semibold mb-6 font-josefineSans text-primary-7">Create an account</h1>
        <SignUpForm />
      </div>
    </main>
  );
}
