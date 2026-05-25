
import {
  checkUserPermission,
  generateToken,
  getCurrentuser,
  hashPassword,
  verifyPassword,
} from "@/lib/auth";
import { prisma } from "@/lib/db";
import { Role } from "../generated/prisma";
// import { User } from "../generated/prisma";

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
 


export async function storeCloth(data: {
  imageUrl: string;
  description: string;
  price: number;
  altTag: string;
}) {
  try {
    const { imageUrl, description, price, altTag } = data;
    // Check if user exists
    const user = await getCurrentuser();
    if (!user) throw new Error("Please sign in to make such request");
    // Check that user behind request has admin rights
    const hasRight = checkUserPermission(user, Role.TEST_ADMIN);
    if (!hasRight) throw new Error("You have no such priviledge!");

    await prisma.cloth.create({
      data: {
        imageUrl,
        description,
        price,
        altTag,
      },
    });
    return { success: true, message: "Cloth uploaded successfully" };
  } catch (err) {
    console.error(`Storing cloth error: ${err}`);
    return { success: false, error: "Cloth upload failed" };
  }
}

export async function getClothById(id: string) {
  try {
    const cloth = await prisma.cloth.findUnique({
      where: { id },
    });
    if (!cloth) {
      return { success: false, error: "Cloth not found" };
    }
    return { success: true, cloth };
  } catch (error) {
    console.error("Error fetching cloth by ID:", error);
    return { success: false, error: "Failed to fetch cloth" };
  }
}

export async function editClothDB(data: {
  clothId: string;
  imageUrl?: string;
  description?: string;
  price?: number;
  altTag?: string;
}) {
  const { clothId, ...updateData } = data;
  try {
    const updatedCloth = await prisma.cloth.update({
      where: { id: clothId },
      data: updateData,
    });
    return { success: true, cloth: updatedCloth };
  } catch (error) {
    console.error("Error editing cloth:", error);
    return { success: false, error: "Failed to update cloth" };
  }
}

export async function deleteClothDB(id: string) {
  try {
    const cloth = await prisma.cloth.findUnique({ where: { id } });
    if (!cloth) return { success: false, error: "Cloth not found" };

    // Delete from DB directly without cache wrapping
    await prisma.cloth.delete({ where: { id } });

    return { success: true, imageUrl: cloth.imageUrl };
  } catch (error) {
    console.error("Delete error:", error);
    return { success: false, error: "Failed to delete cloth" };
  }
}

