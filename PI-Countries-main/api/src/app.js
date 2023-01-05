const express = require('express');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser'); // se remplaza por express
const morgan = require('morgan');
const routes = require('./routes/index.js');

require('./db.js');  //requiere todo de la base de datos para hacer la conexion con postgres 

const server = express();

// const cors= require("cors")

server.name = 'API';

// server.use(cors())
server.use(express.urlencoded({ extended: true, limit: '50mb' }));
server.use(express.json({ limit: '50mb' }));
server.use(cookieParser());
server.use(morgan('dev'));
server.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*'); //con "*" se le da acceso a todo 
  // update to match the domain you will make the request from
  res.header('Access-Control-Allow-Credentials', 'true');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
  next();
});

server.use('/', routes);

//esto solo es para capturar errores 
// Error catching endware. 
server.use((err, req, res, next) => { // eslint-disable-line no-unused-vars
  const status = err.status || 500;
  const message = err.message || err;
  console.error(err);
  res.status(status).send(message);
});

module.exports = server;