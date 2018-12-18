const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser');

const DB = require('./DBConnection')
const CarsModel = require('./models/cars');
const SellerModel = require('./models/seller');
const Cars = require('./Router/cars/');
const Sellers = require('./Router/sellers/');

const app = express()
const port = process.env.port || 8080;

app.use(bodyParser.urlencoded({
    extended: false
}))
app.use(bodyParser.json())

app.use('/', Cars);
app.use('/', Sellers);

app.listen(port, (err) => {
    if (err) {
        throw err;
    } else {
        console.log('Server is running');
    }
})