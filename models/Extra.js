let { Schema, model, Types } = require('mongoose');

let exSchema = new Schema({
    name: { type: String, required: true },
    imageUrl: { type: String },
    description: { type: String, required: true },
    cubes: { type: [Types.ObjectId], default: [], ref: 'Cube'}
});

let Extra = model('Extra', exSchema);

module.exports = Extra;