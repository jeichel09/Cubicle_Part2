let fs = require('fs');

let filename = './models/database.json';
let data = JSON.parse(fs.readFileSync(filename));

async function persist() {
    return new Promise((res, rej) => {
        fs.writeFile(filename, JSON.stringify(data, null, 2), (err) => {
            if (err == null) {
                res();
            } else {
                rej(err);
            }
        });
    });
}

function getAll(search, fromDifficulty, toDifficulty) {
    search = search.toLowerCase();
    return data
        .filter(r => r.name.toLowerCase().includes(search) || r.description.toLowerCase().includes(search))
        .filter(r => r.difficultyLevel >= fromDifficulty && r.difficultyLevel <= toDifficulty);
}

function getById(id) {
    return data.find(i => i.id == id);
}

async function create(cubeData) {
    let cube = {
        id: getId(),
        name: cubeData.name,
        description: cubeData.description,
        imageUrl: cubeData.imageUrl,
        difficultyLevel: Number(cubeData.difficultyLevel)
    };

    let missing = Object.entries(cube).filter(([k, v]) => !v);
    if (missing.length > 0) {
        throw new Error(missing.map(m => `${m[0]} is required!`).join('\n'));
    }

    data.push(cube);
    await persist();

    return cube;
}

function getId() {
    return ('000000' + (Math.random() * 999999 | 0).toString(16)).slice(-6);
}

module.exports = {
    getAll,
    getById,
    create
};