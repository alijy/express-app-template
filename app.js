const express = require('express');
const chalk = require('chalk'); // for colour-coding the log messages
const debug = require('debug')('app');  // for debug mode (i.e. logging messages in debug mode only)
const morgan = require('morgan');   // for web traffic message display
const path = require('path');   // for path.join for forming a valid path based on the OS

var app = express();

app.use(morgan('tiny'));    // tiny for minimum, or - for max details
app.use(express.static(path.join(__dirname, 'public')));    // to declare to express that static files (css and js) can be found in public directory
app.use('/css', express.static(path.join(__dirname, '/node_modules/bootstrap/dist/css')));  // to give express an alternative location for any resource with relative path starting with '/css'
app.use('/js', express.static(path.join(__dirname, '/node_modules/bootstrap/dist/js')));    // to give express an alternative location for any resource with relative path starting with '/js'
app.use('/js', express.static(path.join(__dirname, '/node_modules/jquery/dist')));
app.use('/js', express.static(path.join(__dirname, '/node_modules/@popperjs/core/dist/cjs')));

app.get('/', function (req, res) {
    debug(`Hello from my ${chalk.green('library app')}`);
    res.sendFile(path.join(__dirname, 'views', 'index.html'));  // to serve a html file
});

app.listen(3000, function () {
    debug(`${chalk.yellow('listening on port 3000')}`); // to log in debug mode only
});