import mongoose from "mongoose";

const despesaSchema = new mongoose.Schema({
    valor: {
        type: Number,
        required: true
    },
    descricao: {
        type: String,
        required: true
    },
    categoria: {
        type: String,
        required: true
    },
    data: {
        type: Date,
        default: new Date()
    }
}, {timestamps: true})

const despesaModel = mongoose.model('despesas', despesaSchema)

export default despesaModel