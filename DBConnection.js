const mongoose = require('mongoose')


module.exports = mongoose.connect('mongodb://localhost:27017/Information', {
    useNewUrlParser: true
}, function (err) {
    if (err) {
        throw err;
    } else {
        console.log('Data base is connected');
    }
})