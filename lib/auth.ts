import { betterAuth } from "better-auth/minimal";
import { prismaAdapter } from "better-auth/adapters/prisma";
import { prisma } from "@/lib/db";
import { nextCookies } from "better-auth/next-js";

export const auth = betterAuth({
  secret: process.env.BETTER_AUTH_SECRET,
  database: prismaAdapter(prisma, {
    provider: "postgresql",
  }),
  emailAndPassword: {
    enabled: true,
  },
  socialProviders: {
    google: {
      clientId: process.env.GOOGLE_CLIENT_ID as string,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
      prompt: "select_account",
    },
  },
  account: {
    accountLinking: {
      enabled: true,
      trustedProviders: ["google"],
    },
  },
  user: {
    additionalFields: {
      firstname: {
        type: "string",
        required: false,
        defaultValue: "",
      },
      surname: {
        type: "string",
        required: false,
        defaultValue: "",
      },
      role: { type: "string", required: false, defaultValue: "USER" },
    },
  },
  databaseHooks: {
    user: {
      create: {
        before: async (user) => {
          if (!user.firstname && user.name) {
            const [firstname = "", ...rest] = user.name.split(" ");
            const surname = rest.join(" ") || "";
            return { data: { ...user, firstname, surname } };
          }
        },
      },
    },
  },
  plugins: [nextCookies()],
});