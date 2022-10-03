// TODO: Require Controllers...
let homeController = require('../controllers/homeController');
let createController = require('../controllers/createController');
let exController = require('../controllers/exController');
let defaultController = require('../controllers/defaultController');

module.exports = (app) => {
    // TODO...
    app.use(homeController);
    app.use('/create', createController);
    app.use('/extra', exController);

    app.all('*', defaultController);
};