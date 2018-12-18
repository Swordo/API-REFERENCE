const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const sellerSchema = new Schema({
    //one to many relations
    name: {
        type: String
    },
    email: {
        type: String
    },
    cars: [{
        type: Schema.Types.ObjectId,
        ref: 'carModel'
    }]

})


module.exports = mongoose.model('sellerModel', sellerSchema, 'sellers');