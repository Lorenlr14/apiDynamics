const { model, Schema } = require('mongoose');

const userSchema = new Schema({
    name: String,
    surname: String,
    age: Number,
    tratement: Number
}, { timestamps: true, versionKey: false });

module.exports = model('user', userSchema);