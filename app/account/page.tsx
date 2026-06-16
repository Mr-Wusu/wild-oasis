import type { Metadata } from "next";
import { getSession } from "@/lib/auth-getSession";
import { redirect } from "next/navigation";
export const metadata: Metadata = {
  title: "Oasis Profile",
  description:
    "This is the about me page. Rendering my profile, reservations and other nitty-gritty specifics",
};

async function Account() {
  const data = await getSession();
 
  if (!data) redirect("/auth/sign-in");
 
  const { user } = data; 

  return (
    <div className="min-h-screen pt-28 pb-18 px-7 text-primary-10 font-josefineSans">
      <h2 className="text-2xl mb-7 ">Welcome {user.firstname}</h2>
      <p className="text-xl">Your account</p>
    </div>
  );
}

export default Account;
