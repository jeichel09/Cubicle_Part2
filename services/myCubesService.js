let Cube = require('../models/Cube');

function getAll(search, fromDifficulty, toDifficulty) {
    return Cube.find({}).lean();
}

function getById(id) {
    return Cube.findById(id).lean();
}

async function create(cubeData) {
    let cube = {
        name: cubeData.name,
        description: cubeData.description,
        imageUrl: cubeData.imageUrl,
        difficultyLevel: Number(cubeData.difficultyLevel)
    };

    let missing = Object.entries(cube).filter(([k, v]) => !v);
    if (missing.length > 0) {
        throw new Error(missing.map(m => `${m[0]} is required!`).join('\n'));
    }

    let result = await Cube.create(cube);
    return result;
}

module.exports = {
    getAll,
    getById,
    create
};