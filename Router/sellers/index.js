const express = require('express');

const router = express.Router();
const sellerModel = require('../../models/seller');

router.route('/seller').get(async (req, res, next) => {
    const data = await sellerModel.find({});
    res.json(data);
}).post(async (req, res, ext) => {
    const newData = new sellerModel(req.body);
    await newData.save();
    res.json(newData);
})

module.exports = router;