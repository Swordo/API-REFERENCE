const mongoose = require('mongoose');

const Schema = mongoose.Schema;

var carSchema = new Schema({
    name: {
        type: String
    },
    model: {
        type: Number
    },
    seller: {
        type: Schema.Types.ObjectId,
        ref: 'sellerModel'
    }
})


module.exports = mongoose.model('carModel', carSchema, 'cars');