import dotenv from "dotenv";
dotenv.config();
import express from "express";
import { fileURLToPath } from "url";
import cors from "cors";
import connection from "./config/db_connection.js";
import { clerkMiddleware } from "./middleware/auth.js";
<<<<<<< HEAD
import path from "path";
=======
import route from "./routes/route.js";
>>>>>>> fb5315246baeadda227f1613ccd7b8fed4485894

const app = express();
const PORT = process.env.PORT;

<<<<<<< HEAD
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
app.set('view engine', 'ejs');
app.use(express.static(path.join(__dirname, 'public')));
app.use(cors());
=======
app.use('/', route)
app.use(clerkMiddleware());
>>>>>>> fb5315246baeadda227f1613ccd7b8fed4485894

app.use(clerkMiddleware());
    connection().then(() => {
        app.listen(PORT, () => {
        console.log(`Servidor rodando em http://localhost:${PORT}`);
    });
}) 





