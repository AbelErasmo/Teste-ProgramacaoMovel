import despesaModel from "../models/despesa.js";

const deletedespesa = async (req, res) => {
  try {
    const { userId } = await req.auth();
    const { idDespesa } = req.params;

    const deletar = await despesaModel.findById({ _id: idDespesa, userId });
    if (!deletar) {
      return res.status(404).json({ message: "Despesa nao encontrada" });
    }

    await despesaModel.findByIdAndDelete(idDespesa);
    
    return res.status(200).json({ message: "Tarefa Apagada com sucesso" });
  } catch (error) {
    return res.status(500).json({ message: `Internal error server ${error}` })
  }
};

export default deletedespesa;
