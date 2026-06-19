
import { prisma } from "@/lib/db";

export async function createCabin(data: {
  name: string;
  maxCapacity: number;
  numGuard: number;
  regularPrice: number;
  discount: number;
  description: string;
  image: string; // Cloudinary URL or placeholder for seeding
}) {
  return prisma.cabin.create({ data });
}

export async function getCabins() {
  return prisma.cabin.findMany({
    orderBy: {
      regularPrice: "desc",
    },
  });
}

export async function getCabinById(id: string) {
  return prisma.cabin.findUnique({
    where: {
      id,
    },
  });
}

export async function getAvailableCabins() {}

export async function getOccupiedCabins() {}

export async function getBookedDatesByCabinId(id: string) {
  const bookings = await prisma.booking.findMany({
    where: { cabinId: id },
    select: { startDate: true, endDate: true },
  });

  const bookedDates: Date[] = [];
  for (const booking of bookings) {
    const current = new Date(booking.startDate);
    const endDate = new Date(booking.endDate);
    while (current <= endDate) {
      bookedDates.push(new Date(current));
      current.setDate(current.getDate() + 1);
    }
  }

  return bookedDates;
}

export async function getSettings() {
  const settings = await prisma.settings.findUnique({
    where: { key: "default" }, // ← more reliable than findFirst()
  });

  if (!settings) {
    return { minBookingLength: 1, maxBookingLength: 90 };
  }

  return {
    minBookingLength: settings.minBookingLength,
    maxBookingLength: settings.maxBookingLength,
  };
}
