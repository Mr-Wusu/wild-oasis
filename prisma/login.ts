import { registerUser } from "@/lib/authService";



async function main() {
  const user = await registerUser({
    firstname: "Prince",
    surname: "Wusu",
    email: "wusu_prince@yahoo.com",
    password: "#Pharcourt6",
  });

  console.log("✅ User created:", user);
}

main().catch((e) => {
  console.error("❌ Error:", e.message);
  process.exit(1);
});
