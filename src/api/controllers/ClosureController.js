/**
 * @swagger
 * /end/:car_Id:
 *   put:
 *     summary: Finalizar os lances de um determinado carro.
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
 *         description: Retorna uma lista informando o ganhador do leilão e finaliza  todos os lances.
 *       500:
 *         description: Erro de serviço.
 */


const Throw = require('../models/Auction');
const Car = require('../models/Cars');

let winner = async (arr) => {
    let highestBid = 0;
    let nameBid = '';
    let docBid = '';

    arr.forEach(bid => {
        if (bid.value > highestBid) {
            highestBid = bid.value;
            nameBid = bid.user;
            docBid = bid.document_number;
        }
    });
    return { name: nameBid, document: docBid, value: highestBid };
}

const ClosureAuction = async (req, res) => {
    try {
        let carId = req.params.car_Id;
        let bids = await Throw.find({ car_id: carId });
        let data = await winner(bids);
        
        await Car.findOneAndUpdate({ _id: carId }, { $set: { status: false } });

        return res.status(200).json({
            message: 'Leilão encerrado.',
            data: {
                vencedor: data.name,
                documento: data.document,
                valor_ofertado: data.value
            }
        });
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
};

module.exports = { ClosureAuction };
