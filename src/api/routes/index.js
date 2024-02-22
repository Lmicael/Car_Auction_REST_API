const express = require('express');
const router = express.Router();

const CarController = require('../controllers/CarsController');
const UserController = require('../controllers/UserController');
const MakeOffersController = require('../controllers/MakeOffersController');
const OffersController = require('../controllers/OffersController');
const ClosureController = require('../controllers/ClosureController');

router.post('/register/car', CarController.registerCar);
router.get('/list/:car_Id', OffersController.listBids);
router.put('/end/:car_Id', ClosureController.ClosureAuction);
router.post('/register/user', UserController.registerUser);
router.post('/register/auction', MakeOffersController.CarAuction);

module.exports = router;