import { PrismaClient } from '@prisma/client'
import { hashSync } from 'bcrypt'

export async function createUsers(username, password) {
  const prisma = new PrismaClient()

  return await prisma.users.create({
    data: {
      username,
      password: hashSync(password, 10)
    }
  })
}

export async function getUserByUsername(username) {
  const prisma = new PrismaClient()

  return await prisma.users.findFirstOrThrow({
    where: {
      username
    }
  })
}

export async function getUser(username) {
  const prisma = new PrismaClient()

  return await prisma.users.findUnique({
    where: {
      username
    }
  })
}
