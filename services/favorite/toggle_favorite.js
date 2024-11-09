import { createFavorite, deleteFavorite, getFavoriteByLatLong } from '../db/favorites.js'
import { getUserByUsername } from '../db/users.js'

export default async function toggleFavorite(username, lat, long) { 
  const user = await getUserByUsername(username)
  const checkIfExist = await getFavoriteByLatLong(user.id, lat, long)

  if (checkIfExist.length === 0) {
    return await createFavorite(user.id, lat, long)
  } else {
    return await deleteFavorite(user.id, lat, long)
  }
}
