import { getUser } from "../db/users.js";
import { compare } from "bcrypt";

export default async function login(username, password) {
    try {
        const user = await getUser(username);
        if (!user || ! await compare(password, user.password)) {
            throw new Error('login invalid!');
        }

        return user;
    } catch (error) {
        throw error;
    }
}