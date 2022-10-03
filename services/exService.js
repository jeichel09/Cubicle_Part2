let Extra = require('../models/Extra');

async function getAllExtras() {
    return Extra.find({}).lean();
}

async function createExtra(exData) {
    let extra = {
        name: exData.name,
        description: exData.description,
        imageUrl: exData.imageUrl
    };

    let missing = Object.entries(extra).filter(([k, v]) => !v);
    if (missing.length > 0) {
        throw new Error(missing.map(m => `${m[0]} is required!`).join('\n'));
    }

    let result = await Extra.create(extra);
    return result;
}

module.exports = {
    getAllExtras,
    createExtra
};