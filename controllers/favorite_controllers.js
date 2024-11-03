import APIResponse from "../models/api_response.js";
import getFavorites from "../services/favorite/get_favorites.js";
import toggleFavorite from "../services/favorite/toggle_favorite.js";

export async function toggleFavoriteController(req, res) {
    try {
        const { username, lat, long } = req.body;
        const user = await toggleFavorite(username, lat, long);
        res.send(APIResponse(user));
    } catch (error) {
        res.send(APIResponse(null, "ERROR", error));
    }
}

export async function getFavoritesController(req, res) {
    try {
        const { username } = req.params;
        const user = await getFavorites(username);
        res.send(APIResponse(user));
    } catch (error) {
        res.send(APIResponse(null, "ERROR", error));
    }
}