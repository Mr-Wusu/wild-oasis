import { prisma } from "@/lib/db";

async function main() {
  // Upsert so re-running the seed never creates duplicates
  await prisma.settings.upsert({
    where: { key: "default" }, // ← stable anchor to find the row
    update: {},
    create: {
      minBookingLength: 2,
      maxBookingLength: 14,
      maxGuestsPerBooking: 10,
      breakfastPrice: 15,
    },
  });

  console.log("✅ Settings seeded");
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
