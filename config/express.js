const express = require('express');


const hbs = require('express-handlebars').create({
    extname: '.hbs'
});
//const bodyParser = require('body-parser');

module.exports = (app) => {
    
    app.engine('.hbs', hbs.engine);
    app.set('view engine', '.hbs');

    app.use(express.urlencoded({ extended: true }));
    app.use('/static', express.static('static'));

    
    //TODO: Setup the view engine

    //TODO: Setup the body parser

    //TODO: Setup the static files

};