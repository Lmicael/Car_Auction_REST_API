/**
 * @swagger
 * /register/auction:
 *   post:
 *     summary: Cadastro de um novo lance.
 *     requestBody:
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               user:
 *                 type: string
 *                 description: Nome do usuário
  *               document_number:
 *                 type: string
 *                 description: Documento (CPF) do Usuário
 *               value:
 *                 type: number
 *                 description: Valor oferecido pelo Usuário
 *               car_id:
 *                 type: object
 *                 description: ID do carro  que o usuário irá ofertar
 *     responses:
 *       201:
 *         description: Lance cadastrado com sucesso!
 *       401:
 *          description: Lance já realizado com o mesmo valor para este carro ou  Carro não disponível para lances.
 *       404:
 *         description: Usuário não cadastrado ou valor do lance negativo.
 *       500:
 *         description: Erro de serviço.
 */

const Auction = require('../models/Auction');
const People = require('../models/Users');
const Car = require('../models/Cars');

const CarAuction = async (req, res) => {
    try {
        let { value } = req.body;
        let { document_number } = req.body;

        let doc = document_number.replace(/[^\d]/g, '');
        let ExistingUser = await People.find({ doc });

        let { car_id } = req.body;
        let ExistingCar = await Car.findById(car_id);

        let ExistingAuction = await Auction.findOne({ car_id, value });

        if (value <= 0) {
            return res.status(404).json({ message: 'O valor do lance deve ser positivo.' });
        }

        if (!ExistingUser) {
            return res.status(404).json({ message: 'Usuário não encontrado.' });
        }

        if (!ExistingCar || !ExistingCar.status) {
            return res.status(401).json({ message: 'Carro não disponível para lances' });
        }

        if (ExistingAuction) {
            return res.status(400).json({ message: 'Lance já realizado com o mesmo valor para este carro.' });
        }

        let newAuction = new Auction(req.body);
        await newAuction.save();

        return res.status(201).json({ message: 'Lance cadastrado com sucesso!' });
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
};

module.exports = { CarAuction };