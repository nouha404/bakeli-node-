const express = require('express');
const router = express.Router();

const Hotel = require('../models/Hotel'); 
const {getAllHotels,deleteHotel,updateHotel,createHotel,}= require('../controllers/hotelController');

router.get('/', getAllHotels);

router.post('/', createHotel);
router.put('/:id', updateHotel);
router.delete('/:id', deleteHotel);

module.exports = router;
