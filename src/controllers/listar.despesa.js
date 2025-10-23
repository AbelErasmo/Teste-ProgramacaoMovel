import { error } from "console";
import despesaModel from "../models/despesa.js";

const listDespesas = async (req, res) => {
  try {
    const { userId } = await req.auth();

    const despesas = await despesaModel.find({ userId })

    if(!despesas || despesas.length === 0){
      return res.status(404).json({ message: 'despesas nao encontradas' })
    }

    return res.status(200).json({ message: "Despesas", despesas })
  } catch (error) {}
  return res.status(500).json({ message: `Internal error server ${error}` })
};

export default listDespesas;
