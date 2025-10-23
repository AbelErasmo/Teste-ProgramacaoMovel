import despesaModel from "../models/despesa.js";

const listDespesas = async (req, res) => {
  try {
    const { userId } = await req.auth();
    const { despesaId } = req.par

    const despesas = await despesaModel.findOne({  })
  } catch (error) {}
};

export default listDespesas;
