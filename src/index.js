const http = require('http');
const express = require('express');
const next = require('next');
const helmet = require('helmet');
const compression = require('compression');
const methodOverride = require('method-override');
const cors = require('cors');
const bodyParser = require('body-parser');

const dev = process.env.NODE_ENV !== 'production';
const nextApp = next({ dev });
const handle = nextApp.getRequestHandler();
const port = process.env.PORT || 3000;

const run = async () => {
    // Server errors
    process.on('unhandledRejection', error => console.log('!! Unhandled Rejection !!', error));
    process.on('uncaughtException', error => console.log('!! Uncaught Exception !!', error));

    await nextApp.prepare();

    const app = express();

    // Middlewares for setup
    app.set('json spaces', 2);
    app.set('subdomain offset', 1);

    app.use(helmet());
    app.use(compression());
    app.use(methodOverride());
    app.use(cors({ origin: '*' }));
    app.use(bodyParser.json());

    app.on('error', error => {
        switch (error.code) {
            case 'EACCES':
                console.error(`${Config.config.port} requires elevated privileges`);
                break;
            case 'EADDRINUSE':
                console.error(`${Config.config.port} is already in use`);
                break;
            default:
                throw error;
        }

        process.exit(1);
    });

    app.all('*', (req, res) => handle(req, res));

    const httpServer = http.createServer(app);

    httpServer.listen(port, error => {
        if (error) throw error;
        console.log(`Server running on ${port}`);
    });
};

run();
