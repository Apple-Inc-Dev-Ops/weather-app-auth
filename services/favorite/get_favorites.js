import { getFavoritesByUserId } from '../db/favorites.js'
import { getUserByUsername } from '../db/users.js'

export default async function getFavorites (username) {
  const user = await getUserByUsername(username)
  return await getFavoritesByUserId(user.id)
}
