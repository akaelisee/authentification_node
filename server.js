require('dotenv').config()

const express = require('express');
const bodyParser = require('body-parser');
const db = require('./src/util/db');
const cors = require('cors');
const apiRoutes = require('./src/routes/apiRoutes');

const app = express();

const ports = process.env.PORT || 4000;

app.use(cors());

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(express.json());

app.use(apiRoutes);

app.get('/', (req, res) => {
    res.send('Mon authentigication');
});

app.listen(ports, () => {
    console.log(`listing on port ${ports}`);
})
