require('dotenv').config();
const express = require('express');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 3333;


require('./database/connection');
//Middlewares

app.use(express.urlencoded({ extended:true }));
app.use(express.json());
app.use(cors());

//Routes
const router = express.Router();
app.use('/api', router);
require('./routes')(router);

app.listen(PORT);