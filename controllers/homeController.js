let { getAll, getById } = require('../services/myCubesService');

let router = require('express').Router();

router.get('/', async(req, res) => {
    let search = req.query.search || '';
    //let description = req.query.description || '';
    let fromDifficulty = req.query.fromDifficulty || 1;
    let toDifficulty = req.query.toDifficulty || 6;

    let cubes = await getAll(search, fromDifficulty, toDifficulty);

    res.render('home', {
        title: 'Cubicle Test',
        cubes,
        search,
        fromDifficulty,
        toDifficulty
    });
});

router.get('/details/:id', async (req, res) => {
    let cubeId = req.params.id;
    let cube = await getById(cubeId);

    if (cube) {
        res.render('details', {
            title: 'Cube\'s details',
            cube
        });
    } else {
        res.render('404', {
            title: 'Cube\s details',
            cubeId
        });
    }
});

router.get('/about', (req, res) => {
    res.render('about', {
        title: 'About Us'
    });
});

module.exports = router;