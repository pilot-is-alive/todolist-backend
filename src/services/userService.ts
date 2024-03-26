import User from "../models/User";
import pool from "../utils/db";

export async function createUser(user: User): Promise<User> {
    const query = ""; // TODO: add relevant query
    const { rows } =  await pool.query(query, [user.user_id]);
    return rows[0];
}