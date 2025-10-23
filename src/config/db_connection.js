import dotenv from "dotenv";
dotenv.config();
import mongoose from "mongoose";

const MONGO_URL = process.env.MONGO_URL;

const connection = async () => {
    try {
        await mongoose.connect(MONGO_URL);

        console.log("Conexao com base de dados estabelcida com sucesso!");
    } catch (error) {
        console.log("Falha ao estabeler a conexao!", error);
    }
}

export default connection;
