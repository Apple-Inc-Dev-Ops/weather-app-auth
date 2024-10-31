// const { PrismaClient } = require('@prisma/client');
import { PrismaClient } from "@prisma/client";
import { hashSync } from "bcrypt";

export async function createUsers(username, password) {
  try {
    const prisma = new PrismaClient();

    return await prisma.users.create({
        data: {
          username,
          password: hashSync(password, 10),
        }
    });
  } catch (error) {
    throw error;
  }
}