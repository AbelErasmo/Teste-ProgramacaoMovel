import despesaModel from "../models/despesa.js";
import { validationResult } from "express-validator";

const createDespesa = async (req, res) => {
    const errors = validationResult(req)

    if (!errors.isEmpty()) {
    res.status(400).json({ errors: errors.array() });
    }

    try {
        const userId = await req.auth?.userId
        const { valor, descricao, categoria } = req.body

        const novadespesa = new despesaModel({
            valor,
            descricao,
            categoria,
            data,
            userId
        })
        await novadespesa.save()

        return res.status(201).json({ message:'Despesa criada com sucesso', novadespesa })

    } catch (error) {
        return res.status(500).json({ message: `Internal error server ${error.message}` })   
    }



}

export default createDespesa