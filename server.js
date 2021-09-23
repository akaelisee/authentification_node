require('dotenv').config()

const express = require('express');
const bodyParser = require('body-parser');
const db = require('./src/util/db');
const cors = require('cors');
const apiRoutes = require('./src/routes/apiRoutes');

const app = express();

const ports = process.env.PORT || 4000;

app.set('/public', express.static('public')); // à supprumer
app.set('views', './src/views'); // à supprumer
app.set('view engine', 'ejs'); // à supprumer

app.use(cors());

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(express.json());

app.use(apiRoutes);

app.get('/', (req, res) => {
    //res.render('index.ejs');
    res.send('elisee');
});

app.listen(ports, () => {
    console.log(`listing on port ${ports}`);
})

// {
// 	"firstname": "genre"
// 	"lastname": "genre"
// 	"email": "genre@gmail.com"
// 	"password": "genre"
// }
