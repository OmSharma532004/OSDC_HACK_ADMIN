const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config(); 
const propertyRoutes = require('./routes/propertyRoutes');
const landRoutes = require('./routes/land');

const app = express();
app.use(cors()); 
app.use(express.json()); 


const uri = process.env.MONGODB_URI;  
mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('Connected to MongoDB'))
    .catch(err => console.error('Error connecting to MongoDB', err));

app.use('/api/properties', propertyRoutes);
app.use('/api/lands', landRoutes);



const port = process.env.PORT || 4000; 
app.listen(port, () => console.log(`Server listening on port ${port}`));
