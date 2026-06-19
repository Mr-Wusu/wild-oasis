"use client";

import { useActionState } from "react";
import { signUpAction } from "@/actions/signup-action";
import { signInAction } from "@/actions/signin-action";
import WithGoogle from "./WithGoogle";
import Link from "next/link";

const initialState = { error: "" };
type AuthFormProps = {
  mode: "sign-in" | "sign-up";
};

export default function AuthForm({ mode }: AuthFormProps) {
  const accessType = mode === "sign-up" ? signUpAction : signInAction;
  const [state, formAction, pending] = useActionState(accessType, initialState);

  return (
    <form
      action={formAction}
      className="flex flex-col gap-4 max-w-md mx-auto mt-7 font-josefineSans"
    >
      {mode === "sign-up" && (
        <div className="flex gap-2">
          <input
            name="firstname"
            placeholder="First name"
            required
            className="border p-2 rounded w-full text-primary-9 outline-none focus:ring ring-primary-8"
          />
          <input
            name="surname"
            placeholder="Surname"
            required
            className="border p-2 rounded w-full text-primary-9 outline-none focus:ring ring-primary-8"
          />
        </div>
      )}

      <input
        name="email"
        type="email"
        placeholder="Email"
        required
        className="border p-2 rounded text-primary-9 outline-none focus:ring ring-primary-8"
      />
      <input
        name="password"
        type="password"
        placeholder="Password"
        minLength={8}
        required
        className="border p-2 rounded text-primary-9 outline-none focus:ring ring-primary-8"
      />

      {state?.error && <p className="text-red-500 text-sm">{state.error}</p>}

      <button
        type="submit"
        disabled={pending}
        className="bg-primary-2 text-primary-9 border hover:bg-primary-6 focus:ring-primary-8 outline-none hover:text-primary-1 font-semibold p-2 rounded disabled:opacity-60 cursor-pointer transition-colors duration-300 ease-in-out"
      >
        {mode === "sign-up" && pending
          ? "Creating account..."
          : mode === "sign-in" && pending
            ? "Signin..."
            : mode === "sign-in"
              ? "Sign in"
              : "Sign up"}
      </button>
      <p className="mx-auto text-primary-9">
        {mode === "sign-up" ? "Already signed up?" : "Don't have an account?"}{" "}
        <Link
          href={mode === "sign-up" ? "/auth/sign-in" : "/auth/sign-up"}
          className="border-b pb-0.5 border-b-primary-9 max-w-fit px-0.5 hover:text-primary-8"
        >
          {mode === "sign-up" ? "Sign in" : "Sign up"}
        </Link>
      </p>

      {/* Divider */}
      <div className="flex items-center gap-2 my-1">
        <hr className="flex-1 border-gray-300" />
        <span className="text-sm text-gray-400">or</span>
        <hr className="flex-1 border-gray-300" />
      </div>

      <WithGoogle />
    </form>
  );
}
