let { Schema, model, Types } = require('mongoose');

let cubeSchema = new Schema({
    name: { type: String, required: true },
    description: { type: String, required: true },
    imageUrl: { type: String },
    difficultyLevel:  { type: Number, required: true },
    extras: { type: [Types.ObjectId], default: [], ref: 'Extra' }
});

let Cube = model('Cube', cubeSchema);

module.exports = Cube;