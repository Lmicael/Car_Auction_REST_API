/**
 * @swagger
 * /list/:car_Id:
 *   get:
 *     summary: Listar lances de um determinado carro.
 *     requestBody:
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               car_Id:
 *                 type: string
 *                 description: ID do carro
 *     responses:
 *       200:
 *         description: Retorna uma lista contendo todos os lances em um determinado carro
 *       500:
 *         description: Erro de serviço.
 */


const Throw = require('../models/Auction');

let listBids = async (req, res) => {
    try {
        let carId = req.params.car_Id;
        let bids = await Throw.find({ car_id: carId });

        return res.status(200).json(bids);
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
};

module.exports = { listBids };
