import dotenv from "dotenv";
dotenv.config();
import express from "express";
import connection from "./config/db_connection.js";
import { clerkMiddleware } from "./middleware/auth.js";
import route from "./routes/route.js";

const app = express();
const PORT = process.env.PORT;

app.use('/', route)
app.use(clerkMiddleware());

connection().then(() => {
    app.listen(PORT, () => {
    console.log(`Servidor rodando em http//localhost:${PORT}`);
});
}) 





