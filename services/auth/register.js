import { createUsers } from "../db/users.js";

export default async function register(username, password) {
    try {
        return await createUsers(username, password);
    } catch (error) {
        throw error;
    }
}