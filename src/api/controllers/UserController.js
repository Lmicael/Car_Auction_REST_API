/**
 * @swagger
 * /register/user:
 *   post:
 *     summary: Cadastro de um novo usuário.
 *     requestBody:
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *                 description: Nome do usuário
 *               birth_date:
 *                 type: string
 *                 description: Nascimento do Usuário
 *               email:
 *                 type: string
 *                 description: E-mail do Usuário
 *               telephone:
 *                 type: string
 *                 description: Número de Telefone do Usuário
 *               document_number:
 *                 type: string
 *                 description: Documento (CPF) do Usuário
 *     responses:
 *       201:
 *         description: Usuário criado
 *       404:
 *         description: Usuário já cadastrado ou documento inválido.
 *       500:
 *          description: Erro de serviço.
 */


const { cpf, cnpj } = require('cpf-cnpj-validator');
const People = require('../models/Users');

let registerUser = async (req, res) => {
    try {
        let { document_number } = req.body;
        let doc = document_number.replace(/[^\d]/g, '');
        let Existing = await People.find({ doc });
        
        if (!Existing) {
            return res.status(400).json({ message: 'Usuário já cadastrado.' });
        }

        if(!cpf.isValid(doc)){
            return res.status(400).json({ message: 'Documento Inválido.' });
        }

        let newUser = new People(req.body);
        await newUser.save();

        return res.status(201).json({ message: 'Usuário criado.' });
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
};

module.exports = { registerUser };
