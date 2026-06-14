"use server";

import { auth } from "@/lib/auth";
import { headers } from "next/headers";
import { redirect } from "next/navigation";

export async function signUpAction(_prevState: unknown, formData: FormData) {
  const firstname = formData.get("firstname") as string;
  const surname = formData.get("surname") as string;
  const email = formData.get("email") as string;
  const password = formData.get("password") as string;

  try {
    await auth.api.signUpEmail({
      body: {
        email,
        password,
        name: `${firstname} ${surname}`,
        firstname,
        surname,
      },
      headers: await headers(),
    });
  } catch (error) {
    if (error instanceof Error) {
      return { error: error.message };
    }
    return { error: "Something went wrong" };
  }

  redirect("/dashboard");
}
