let { create } = require('../services/myCubesService');

let router = require('express').Router();

router.get('/', (req, res) => {
    res.render('create', {
        title: 'Create New Cube'
    });
});

router.post('/', async (req, res) => {
    try {
        const result = await create(req.body);
        res.redirect('/');
    } catch(err) {
        res.render('create', {
            title: 'Request Error',
            error: err.message.split('\n')
        });
    }
});

module.exports = router;