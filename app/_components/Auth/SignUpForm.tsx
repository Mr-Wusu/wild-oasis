"use client";

import { useActionState } from "react";
import { signUpAction } from "@/actions/auth"
import { authClient } from "@/lib/auth-client";

const initialState = { error: "" };

export default function SignUpForm() {
  const [state, formAction, pending] = useActionState(
    signUpAction,
    initialState,
  );

  async function handleGoogleSignIn() {
    await authClient.signIn.social({
      provider: "google",
      callbackURL: "/dashboard", 
    });
  }

  return (
    <form
      action={formAction}
      className="flex flex-col gap-4 max-w-md mx-auto mt-10"
    >
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
        {pending ? "Creating account..." : "Sign Up"}
      </button>

      {/* Divider */}
      <div className="flex items-center gap-2 my-1">
        <hr className="flex-1 border-gray-300" />
        <span className="text-sm text-gray-400">or</span>
        <hr className="flex-1 border-gray-300" />
      </div>

      <button
        type="button"
        onClick={handleGoogleSignIn}
        className="flex items-center justify-center gap-2 border border-primary-9 text-primary-10 p-2 focus:ring ring-primary-8 outline-none rounded hover:bg-primary-5 hover:text-primary-1 transition-colors duration-300 ease-in-out cursor-pointer font-semibold"
      >
        <GoogleIcon />
        Continue with Google
      </button>
    </form>
  );
}

function GoogleIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 48 48">
      <path
        fill="#EA4335"
        d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z"
      />
      <path
        fill="#4285F4"
        d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z"
      />
      <path
        fill="#FBBC05"
        d="M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z"
      />
      <path
        fill="#34A853"
        d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.15 1.45-4.92 2.3-8.16 2.3-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z"
      />
      <path fill="none" d="M0 0h48v48H0z" />
    </svg>
  );
}
