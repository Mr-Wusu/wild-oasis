import { registerUser } from "@/lib/authService";


// First time single user creation for admin
// async function main() {
//   const user = await registerUser({
//     firstname: "Prince",
//     surname: "Wusu",
//     email: "wusu_prince@yahoo.com",
//     password: "#Pharcourt6",
//   });

//   console.log("✅ User created:", user);
// }

// main().catch((e) => {
//   console.error("❌ Error:", e.message);
//   process.exit(1);
// });



const testUsers = [
  {
    firstname: "Sandra",
    surname: "Prince-Wusu",
    email: "sandra.prince-wusu@yahoo.com",
    password: "#Pharcourt6",
  },
  {
    firstname: "Kemi",
    surname: "Wusu",
    email: "kemi.wusu@yahoo.com",
    password: "#Pharcourt6",
  },
  {
    firstname: "Freeman",
    surname: "Owologba",
    email: "freeman.owologba@yahoo.com",
    password: "#Pharcourt6",
  },
];

async function main() {
  console.log("🌱 Seeding users...\n");

  const users = await Promise.all(testUsers.map(registerUser));

  users.forEach((user) => {
    console.log(`✅ Created: ${user.firstname} ${user.surname} | ${user.email} | Role: ${user.role}`);
  });

  console.log(`\n🎉 Done! ${users.length} users created.`);
}

main().catch((e) => {
  console.error("❌ Error:", e.message);
  process.exit(1);
});
