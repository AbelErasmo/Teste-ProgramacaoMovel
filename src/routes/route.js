import express from 'express'
const route = express.Router()
import createDespesa from '../controllers/create.despesa.js'
import listDespesas from '../controllers/listar.despesa.js'
import despesaEspecifica from '../controllers/despesaById.js'
import { requireAuth } from '../middleware/auth.js'
import { despesaValidacao } from '../middleware/despesa.validate.js'
import deletedespesa from '../controllers/delete.despesa.js'

route.post('/criardespesa',despesaValidacao, requireAuth, createDespesa )
route.put('/despesaviaId', requireAuth, despesaEspecifica )
route.get('/listardespesa', requireAuth, listDespesas )
route.delete('/apagardespesa', requireAuth, deletedespesa)


export default route
