import AuthForm from "@/app/_components/Auth/AuthForm";

interface PageProps {
  params: Promise<{ action: "sign-up" | "sign-in" }>;
}

export default async function AuthPage({ params }: PageProps) {
  const { action } = await params;
  return (
    <main className="min-h-screen flex items-center justify-center">
      <div className="w-full max-w-md p-6 border border-primary-8 rounded-xl shadow-sm">
        <h1 className="text-2xl font-semibold font-josefineSans text-primary-7">
          {action==="sign-up"? "Create an account": "Already have an account? Sign in!"}
        </h1>
        <AuthForm mode={action} />
      </div>
    </main>
  );
}
