
import { getSession } from "@/lib/auth-getSession";
import { redirect } from "next/navigation";

export default async function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await getSession();

  if (!session || session.user.role !== "ADMIN") {
    redirect("/unauthorized");
  }

  return <>{children}</>;
}
