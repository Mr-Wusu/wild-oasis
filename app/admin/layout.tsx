
import { getSession } from "@/lib/auth-getSession";
import { redirect } from "next/navigation";

export default async function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await getSession();

  if (!session) {
    redirect("/auth/sign-in");
  }

  if (session.user.role !== "ADMIN") {
    redirect("/auth/sign-in");
  }

  return <>{children}</>;
}
