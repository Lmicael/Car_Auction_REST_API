/**
 * @swagger
 * /register/car:
 *   post:
 *     summary: Cadastro de um novo lance.
 *     requestBody:
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               model:
 *                 type: string
 *                 description: Modelo do carro
  *               year:
 *                 type: number
 *                 description: Ano de favricação do carro
 *               color:
 *                 type: string
 *                 description: Cor do carro
 *               initial_value:
 *                 type: number
 *                 description: Valor inicial do lance
 *               description:
 *                 type: string
 *                 description: Descrição do carro
 *               KM:
 *                 type: string
 *                 description: Km atual do carro
 *               Combustivel:
 *                 type: string
 *                 description: Tipo de combústivel do carro
 *               Cambio:
 *                 type: string
 *                 description: Tipo de câmbio do carro
 *               image_url:
 *                 type: string
 *                 description: URL da imagem do carro
 *               status:
 *                 type: boolean
 *                 description: true ou false para lances
 *     responses:
 *       201:
 *         description: Lance Cadastrado com sucesso!
 *       500:
 *         description: Erro de serviço.
 */

const Car = require('../models/Cars');

let registerCar = async (req, res) => {
    try {
        let newCar = new Car(req.body);
        await newCar.save();

        res.status(201).json({ message: 'Cadastrado com sucesso!' });
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
};

module.exports = { registerCar };