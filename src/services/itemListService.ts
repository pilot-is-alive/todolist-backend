import { QueryConfig } from "pg";
import Item from "../models/Item";
import pool from "../utils/db";

export async function createItem(item: Item): Promise<Item> {
    let dateCreated = item.date_created.toISOString();
    let timeCreated = item.time_created.toISOString();

    const query: QueryConfig = {
        text: "INSERT INTO items (item_id, list_id, item_text, is_done, date_created, time_created) VALUES ($1, $2, $3, $4, $5, $6) RETURNING *",
        values: [item.item_id, item.list_id, item.item_text, item.is_done, dateCreated, timeCreated]
    }
    
    const { rows } = await pool.query(query);
    return rows[0];
}