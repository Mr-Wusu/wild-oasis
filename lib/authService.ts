
import {
  checkUserPermission,
  generateToken,
  getCurrentuser,
  hashPassword,
  verifyPassword,
} from "@/lib/auth";
import { prisma } from "@/lib/db";
import { Role } from "../generated/prisma";
import { cookies } from "next/headers";


export async function registerUser(data: {
  firstname: string;
  surname: string;
  email: string;
  password: string;
}) {
  const { firstname, surname, email, password } = data;

  const existingUser = await prisma.user.findUnique({ where: { email } });
  if (existingUser) throw new Error("Email already taken!"); 

  const hashedPassword = await hashPassword(password);
  const userCount = await prisma.user.count();
  const role = userCount === 0 ? Role.ADMIN : Role.USER;

  return prisma.user.create({
    data: { firstname, surname, email, password: hashedPassword, role },
    include: { cabin: true },
  });
}

export async function loginUser(data: { email: string; password: string }) {
  const { email, password } = data;
  if(!email || !password) throw new Error("Email and password are both required")

  const userFromDB = await prisma.user.findUnique({
    where: { email },
    include: { cabin: true, },
  });

  if (!userFromDB) throw new Error("Invalid credentials");

  const isCorrectPassword = await verifyPassword(password, userFromDB.password);
  if (!isCorrectPassword) throw new Error("Invalid credentials");

  const token = generateToken(userFromDB.id);

  return {
    user: {
      id: userFromDB.id,
      firstname: userFromDB.firstname,
      surname: userFromDB.surname,
      email: userFromDB.email,
      role: userFromDB.role,
      token,
    },
  };
}

export async function logoutUser() {
  const cookieStore = await cookies();

  cookieStore.set("token", "", {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
    maxAge: 0,
  });

}

export const getUsers = 
  async () => {
    const user = await getCurrentuser()
    if(!user) throw new Error("You are not logged in")
    const hasRight = checkUserPermission(user, Role.TEST_ADMIN)
    if(!hasRight) throw new Error("You have no such priviledge!")
      return prisma.user.findMany({
      orderBy: { createdAt: "desc" },
    });
  }

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
        regularPrice: "desc"
      }
    })
  }

  export async function getCabinById(id: string) {
    return prisma.cabin.findUnique({
      where: {
        id
      }
    })
  }

  export async function getAvailableCabins() {}

  export async function getOccupiedCabins() {}

  export async function getBookedDatesByCabinId(id: string) {
    return prisma.cabin.findUnique({
      where: {
        id,
      },
    });
  }

  export async function getSettings() {}







