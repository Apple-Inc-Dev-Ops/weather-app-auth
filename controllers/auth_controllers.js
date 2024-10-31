import APIResponse from "../models/api_response.js";
import register from "../services/auth/register.js";

export default async function registerController(req, res) {
    try {
        const { username, password } = req.body;
        const user = await register(username, password);
        res.send(APIResponse(user));
    } catch (error) {
        res.send(APIResponse(null, "ERROR", error));
    }
}