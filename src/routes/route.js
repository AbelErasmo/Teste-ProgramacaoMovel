import express from 'express'
const route = express.Router()
import createDespesa from '../controllers/create.despesa.js'
import listDespesas from '../controllers/listar.despesa.js'
import despesaEspecifica from '../controllers/despesaById.js'
import { requireAuth } from '../middleware/auth.js'
import { despesaValidacao } from '../middleware/despesa.validate.js'
import deletedespesa from '../controllers/delete.despesa.js'

route.use(requireAuth)

route.post('/criardespesa',despesaValidacao, createDespesa )
route.put('/despesaviaId',  despesaEspecifica )
route.get('/listardespesa',  listDespesas )
route.delete('/apagardespesa',  deletedespesa)


export default route
