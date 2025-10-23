import dotenv from "dotenv";
dotenv.config();
import express from "express";
import connection from "./config/db_connection.js";


const app = express();
const PORT = process.env.PORT;


connection().then(() => {
    app.listen(PORT, () => {
    console.log(`Servidor rodando em http//localhost:${PORT}`);
});
}) 





