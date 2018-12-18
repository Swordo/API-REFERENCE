const express = require('express');

const router = express.Router();

const carModel = require('../../models/cars');
const sellerModel = require('../../models/seller')

router.route('/cars/:sid').get(async (req, res, next) => {
    const {
        sid
    } = req.params;
    const data = await sellerModel.findById(sid).populate('cars', 'name -_id');
    res.json(data)

}).post(async (req, res, next) => {
    const {
        sid
    } = req.params;

    const newData = new carModel(req.body)
    const sellerData = await sellerModel.findById(sid);
    newData.sellerData = sellerData
    // console.log(sellerData);
    await newData.save();
    sellerData.cars.push(newData);
    await sellerData.save();
    // console.log(newData);
    res.json(newData);
})


module.exports = router;