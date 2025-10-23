import despesaModel from "../models/despesa.js";

const despesaEspecifica = async (req, res) => {
  try {
    const { userId } = await req.auth();
    const { despesaId } = req.params;
    const despesaExpe = await despesaModel.findById({ _id: despesaId, userId })

    if(!despesaExpe){
        return res.status(404).json({ message: 'Despesa nao existe ou nao pertence ao usuario' })
    }

    return res.status(200).json({ message: 'Despesa', despesaExpe })
  } catch (error) {}
};

export default despesaEspecifica;
