let { createExtra, getAllExtras } = require('../services/exService');
const { getById } = require('../services/myCubesService');

let exController = require('express').Router();

exController.get('/create', (req, res) => {
    res.render('createExtra', {
        title: 'Create New Accessory'
    });
});

exController.post('/create', async (req, res) => {
    try {
        await createExtra(req.body.name, req.body.description, req.body.imageUrl);
        res.redirect('/');
    } catch (err) {
        res.render('createExtra', {
            title: 'Request Error',
            //error: err.message.split('\n')
        });
    }
});

exController.get('/:cubeId/addAccToCube', async (req, res) => {
    let cubeId = req.params.cubeId;
    let cube = await getById(cubeId);
    let extras = await getAllExtras();

    res.render('addExtra', {
        title: 'Add Accessory',
        cube,
        extras
    });
});

module.exports = exController;
