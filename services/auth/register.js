import { createUsers } from '../db/users.js'

export default async function register (username, password) {
  return await createUsers(username, password)
}
