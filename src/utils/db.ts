import { Pool } from 'pg';

const pool = new Pool({
    user: "postgres",
    host: "localhost",
    database: "to-do-list",
    password: "Godisalive010204#",
    port: 5432
})

export default pool;