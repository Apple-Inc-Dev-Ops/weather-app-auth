import { PrismaClient } from '@prisma/client'

export async function createFavorite(userId, lat, long) {
  const prisma = new PrismaClient()

  return await prisma.favorites.create({
    data: {
      userId,
      lat,
      long
    }
  })
}

export async function deleteFavorite(userId, lat, long) {
  const prisma = new PrismaClient()

  return await prisma.favorites.deleteMany({
    where: {
      userId,
      lat,
      long
    }
  })
}

export async function getFavoritesByUserId(userId) {
  const prisma = new PrismaClient()

  return await prisma.favorites.findMany({
    where: {
      userId
    }
  })
}

export async function getFavoriteByLatLong(userId, lat, long) {
  const prisma = new PrismaClient()

  return await prisma.favorites.findMany({
    where: {
      userId,
      lat,
      long
    }
  })
}
