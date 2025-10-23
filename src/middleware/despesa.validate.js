import { body } from "express-validator";

export const despesaValidacao = [
    body('valor')
        .notEmpty()
        .withMessage('o campo valor deve ser preenchido devidadmente')
        .isNumeric()
        .withMessage('insira um valor valido'),
    body('descricao')
        .notEmpty()
        .withMessage('preencha o campo descricao.'),
    body('categoria')
        .isEmpty()
        .withMessage('preencha o campo categoria.')
]