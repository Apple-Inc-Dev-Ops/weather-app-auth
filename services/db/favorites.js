// const { PrismaClient } = require('@prisma/client');
import { PrismaClient } from "@prisma/client";
import { hashSync } from "bcrypt";

export async function createFavorite(userId, lat, long) {
  try {
    const prisma = new PrismaClient();

    return await prisma.favorites.create({
        data: {
          userId,
          lat,
          long,
        }
    });
  } catch (error) {
    throw error;
  }
}

export async function deleteFavorite(userId, lat, long) {
  try {
    const prisma = new PrismaClient();

    return await prisma.favorites.deleteMany({
        where: {
          userId,
          lat,
          long,
        }
    });
  } catch (error) {
    throw error;
  }
}

export async function getFavoritesByUserId(userId) {
  try {
    const prisma = new PrismaClient();

    return await prisma.favorites.findMany({
        where: {
          userId,
        }
    });
  } catch (error) {
    throw error;
  }
}

export async function getFavoriteByLatLong(userId, lat, long) {
  try {
    const prisma = new PrismaClient();

    return await prisma.favorites.findMany({
        where: {
          userId,
          lat,
          long
        }
    });
  } catch (error) {
    throw error;
  }
}