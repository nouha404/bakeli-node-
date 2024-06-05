const Hotel = require('../models/Hotel');


const getAllHotels = async (req, res) => {
    try {
        const hotels = await Hotel.find();
        res.json(hotels);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};



const createHotel = async (req, res) => {
    const hotel = new Hotel({
        name: req.body.name,
        address: req.body.address,
        email: req.body.email,
        telephone: req.body.telephone,
        pricePerNight: req.body.pricePerNight,
        imageUrl: req.body.imageUrl
    });

    try {
        const newHotel = await hotel.save();
        res.status(201).json(newHotel);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};

const updateHotel = async (req, res) => {
    try {
        const hotel = await Hotel.findById(req.params.id);
        if (hotel == null) {
            return res.status(404).json({ message: 'Hôtel non trouvé' });
        }

        if (req.body.name != null) {
            hotel.name = req.body.name;
        }
        if (req.body.address != null) {
            hotel.address = req.body.address;
        }
        if (req.body.email != null) {
            hotel.email = req.body.email;
        }
        if (req.body.telephone != null) {
            hotel.telephone = req.body.telephone;
        }
        if (req.body.pricePerNight != null) {
            hotel.pricePerNight = req.body.pricePerNight;
        }
        if (req.body.imageUrl != null) {
            hotel.imageUrl = req.body.imageUrl;
        }

        const updatedHotel = await hotel.save();
        res.json(updatedHotel);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};

const deleteHotel = async (req, res) => {
    try {
        const hotel = await Hotel.findById(req.params.id);
        if (hotel == null) {
            return res.status(404).json({ message: 'Hôtel non trouvé' });
        }
        await hotel.remove();
        res.json({ message: 'Hôtel supprimé' });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};


module.exports={deleteHotel,updateHotel,getAllHotels,createHotel}