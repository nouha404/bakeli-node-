const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
const dotenv=require('dotenv');

dotenv.config({path:'./.env'});

const app = express();
const port = 3005;

const userRoutes = require('./routes/users');
const hotelRoutes = require('./routes/hotel');





// Middleware
app.use(bodyParser.json());
app.use(cors());

// Connexion à la base de données MongoDB
mongoose.connect(process.env.DATABASE_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log('MongoDB connected');
}).catch(err => {
    console.error('MongoDB connection error:', err);
});

// Importation et utilisation des routes
app.use('/api/users', userRoutes);
app.use('/api/hotels', hotelRoutes);


// Lancer le serveur
app.listen(port, () => {
    console.log(`Serveur démarré sur http://localhost:${port}`);
});
