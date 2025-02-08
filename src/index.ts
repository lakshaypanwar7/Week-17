import { Client } from "pg";

const pgClient = new Client("postgresql://neondb_owner:npg_HZ9YnCMflIN4@ep-shiny-credit-a9j5nvjb-pooler.gwc.azure.neon.tech/neondb?sslmode=require")

async function main() {
    await pgClient.connect(); // its a non-blocking(async call) call to somewhere in the server network, thats why its wrapped in an async function

    const res = await pgClient.query("SELECT * FROM USERS;")
    console.log(res.rows);
}

main();