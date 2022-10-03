const env = process.env.NODE_ENV || 'development';
let express = require('express');
let databaseConfig = require('./config/database');
let expressConfig = require('./config/express');
let routesConfig = require('./config/routes');

const config = require('./config/config')[env];

async function start() {
    const app = express();

    await databaseConfig(app);
    expressConfig(app);
    routesConfig(app);
    
    app.listen(config.port, console.log(`Listening on port ${config.port}! Now its up to you...`));
}

start();

//require('./config/express')(app);
//require('./config/routes')(app);

