import { v2 as cloudinary } from "cloudinary";
import path from "path";
import { createCabin } from "@/lib/authService";

// ─── Cloudinary Config ────────────────────────────────────────────────────────
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME!,
  api_key: process.env.CLOUDINARY_API_KEY!,
  api_secret: process.env.CLOUDINARY_API_SECRET!,
});

// ─── Helper: Upload a local file to Cloudinary ────────────────────────────────
async function uploadLocalImage(localPath: string): Promise<string> {
  const absolutePath = path.resolve(localPath);
  const result = await cloudinary.uploader.upload(absolutePath, {
    folder: "cabins",
  });
  return result.secure_url;
}

// ─── Cabin Definitions ────────────────────────────────────────────────────────
// Update `imagePath` for each cabin to point to the local image file
// Paths can be absolute or relative to where you run this script from
const cabinData = [
  {
    name: "Cozy Pine Cabin",
    maxCapacity: 2,
    numGuard: 1,
    regularPrice: 150,
    discount: 0,
    description:
      "A snug retreat nestled among pine trees, perfect for couples seeking a quiet escape.",
    imagePath: "./public/cabins/cabin-003.jpg",
  },
  {
    name: "Sunset Ridge",
    maxCapacity: 4,
    numGuard: 1,
    regularPrice: 250,
    discount: 20,
    description:
      "Perched on a ridge with breathtaking sunset views, ideal for small families or friend groups.",
    imagePath: "./public/cabins/cabin-012.jpg",
  },
  {
    name: "Lakeview Lodge",
    maxCapacity: 6,
    numGuard: 2,
    regularPrice: 380,
    discount: 30,
    description:
      "A spacious lodge with direct lake views and a private deck for outdoor dining.",
    imagePath: "./public/cabins/cabin-011.jpg",
  },
  {
    name: "The Forest Hideaway",
    maxCapacity: 8,
    numGuard: 2,
    regularPrice: 500,
    discount: 50,
    description:
      "Deep in the forest, this cabin offers total seclusion and a true off-grid experience.",
    imagePath: "./public/cabins/cabin-004.jpg",
  },
  {
    name: "Mountain Peak Cabin",
    maxCapacity: 10,
    numGuard: 3,
    regularPrice: 700,
    discount: 100,
    description:
      "Our largest and most luxurious cabin, commanding stunning mountain peak panoramas.",
    imagePath: "./public/cabins/cabin-010.jpg",
  },
  {
    name: "Creekside Cottage",
    maxCapacity: 2,
    numGuard: 1,
    regularPrice: 180,
    discount: 0,
    description:
      "A charming cottage sitting right beside a gentle creek, with the soothing sound of running water as your backdrop.",
    imagePath: "./public/cabins/cabin-009.jpg",
  },
  {
    name: "Birchwood Retreat",
    maxCapacity: 4,
    numGuard: 1,
    regularPrice: 270,
    discount: 25,
    description:
      "Surrounded by elegant birch trees, this cabin offers a bright, airy atmosphere with a wraparound porch.",
    imagePath: "./public/cabins/cabin-002.jpg",
  },
  {
    name: "Desert Star Cabin",
    maxCapacity: 2,
    numGuard: 1,
    regularPrice: 200,
    discount: 15,
    description:
      "A unique desert getaway with wide open skies and unmatched stargazing opportunities on clear nights.",
    imagePath: "./public/cabins/cabin-001.jpg",
  },
  {
    name: "Glacier View Lodge",
    maxCapacity: 6,
    numGuard: 2,
    regularPrice: 420,
    discount: 40,
    description:
      "A premium alpine lodge facing a stunning glacier, equipped with a hot tub and floor-to-ceiling windows.",
    imagePath: "./public/cabins/cabin-005.jpg",
  },
  {
    name: "Autumn Valley Cabin",
    maxCapacity: 8,
    numGuard: 2,
    regularPrice: 550,
    discount: 60,
    description:
      "Nestled in a vibrant valley that blazes with colour every autumn, offering warmth and rustic charm year-round.",
    imagePath: "./public/cabins/cabin-007.jpg",
  },
];

// ─── Seed Function ────────────────────────────────────────────────────────────
async function main() {
  console.log("🌱 Seeding cabins...\n");

  for (const cabin of cabinData) {
    const { imagePath, ...cabinDetails } = cabin;

    try {
      console.log(`📤 Uploading image for "${cabin.name}"...`);
      const imageUrl = await uploadLocalImage(imagePath);
      console.log(`   ✅ Uploaded: ${imageUrl}`);

      console.log(`💾 Creating cabin in database...`);
      const created = await createCabin({ ...cabinDetails, image: imageUrl });
      console.log(
        `   ✅ Created: ${created.name} | Capacity: ${created.maxCapacity} | Price: $${created.regularPrice}\n`,
      );
    } catch (error) {
      const err = error as Error;
      console.error(`❌ Failed for "${cabin.name}": ${err.message}\n`);
    }
  }

  console.log("🎉 Done! All cabins processed.");
}

main().catch((e) => {
  console.error("❌ Seeding error:", e.message);
  process.exit(1);
});
