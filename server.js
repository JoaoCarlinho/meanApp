process.env.PWD = process.cwd()
var createError = require('http-errors');
const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const session = require('express-session');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var mongoose = require('mongoose');
const http = require('http');
let socket = require('socket.io');
var cors = require('cors');
const errorHandler = require('errorhandler');
var methodOverride = require('method-override');

mongoose.Promise = global.Promise;

//Configure isProduction variable
const isProduction = process.env.NODE_ENV === 'production';

var admin = require('./server/routes/admin');
var consultations = require('./server/routes/consultations');
const ioservices = require('./server/routes/ioservices');
var newsletters = require('./server/routes/newsletters');
var subscribers = require('./server/routes/subscribers');

const app = express();
require('./server/models/users');
require('./server/config/passport');
const server = http.createServer(app);
let io = socket(server);

// Parsers
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false}));
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(methodOverride());
app.use(cors());

app.use(session({ secret: 'passport-tutorial', cookie: { maxAge: 60000 }, resave: false, saveUninitialized: false }));
/*

if(!isProduction) {
  app.use(errorHandler());
}

*/
//use native node-promise
mongoose.connect('mongodb://JCarlinho:g3t$MART18js@ds133104.mlab.com:33104/io',{
    useNewUrlParser: true
});

mongoose.set('debug', true);

mongoose.connection.on('connected', ()=>{
    console.log('MongoDB connected to mongo lab')
});


mongoose.connection.on('error', (err)=>{
    console.log(err);
});;
/*
//Error handlers & middlewares
if(!isProduction) {
    app.use((err, req, res) => {
      res.status(err.status || 500);
  
      res.json({
        errors: {
          message: err.message,
          error: err,
        },
      });
    });
  }
  
  app.use((err, req, res) => {
    res.status(err.status || 500);
  
    res.json({
      errors: {
        message: err.message,
        error: {},
      },
    });
  });
*/

// Add headers
app.use(function (req, res, next) {

    // Website you wish to allow to connect
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:4200');

    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

    // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

    // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
    res.setHeader('Access-Control-Allow-Credentials', true);

    // Pass to next layer of middleware
    next();
});

/// Angular DIST output folder
app.use(express.static(path.join(process.env.PWD, 'public'))) 

// set routes
app.use('/admin', admin);
app.use('/ioservices', ioservices);
app.use('/consultations', consultations);
app.use('/newsletters', newsletters);
app.use('/subscribers', subscribers);
app.use(require('./server/routes'));

// Send all other requests to the Angular app
app.get('*', (req, res) => {
    res.sendFile(path.join(process.env.PWD, 'public/index.html'));
});


// catch 404 and forward to error handler
app.use(function(req, res, next) {
    next(createError(404));
  });
  
// error handler
app.use(function(err, req, res, next) {
// set locals, only providing error in development
res.locals.message = err.message;
res.locals.error = req.app.get('env') === 'development' ? err : {};

// render the error page
res.status(err.status || 500);
res.render('error');
});

//Set Port
const port = process.env.PORT || '8080';
app.set('port', port);

server.listen(port, () => console.log(`Running on localhost:${port}`));