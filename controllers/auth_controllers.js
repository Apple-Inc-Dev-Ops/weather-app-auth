import APIResponse from "../models/api_response.js";
import register from "../services/auth/register.js";
import login from "../services/auth/login.js";

const registerController = async function (req, res, next) {
    try {
        const { username, password } = req.body;
        const user = await register(username, password);
        res.send(APIResponse(user));
    } catch (error) {
        next(error);
    }
}

const loginController = async function (req, res, next) {    
    try {
        const { username, password } = req.body;
        const user = await login(username, password);
        res.send(APIResponse(user));
    } catch (error) {
        next(error);
    }
}

export { registerController, loginController };