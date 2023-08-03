const { model, Schema } = require('mongoose');

const userSchema = new Schema({
    name: String,
    surname: String,
    age: Number,
    tratement: Number
});

module.exports = model('user', userSchema);