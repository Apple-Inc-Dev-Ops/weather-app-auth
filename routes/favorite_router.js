import { Router } from 'express'
import { getFavoritesController, toggleFavoriteController } from '../controllers/favorite_controllers.js'

const favoriteRouter = Router()

favoriteRouter.put('/favorites/toggle', toggleFavoriteController)
favoriteRouter.get('/favorites/:username', getFavoritesController)

export default favoriteRouter
