const {check} = require('express-validator');


const validadores = {
    cadastroValidador: [
     check('nome').isLength({min:3}).withMessage('Nome deve ter pelo menos tres caracteres'),
     check('descricao').notEmpty().withMessage('Descrição deve ser preenchida'),
]
}

module.exports = validadores;