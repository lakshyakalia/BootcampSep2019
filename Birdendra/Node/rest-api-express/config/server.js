const express = require("express");
const bodyParser = require("body-parser");
const moongoose = require("../db/mongoose");
// const auth = require("../auth/authenticator");

const apiRouter = require('../router/apiRouter');

const { PORT, HOST } = require("./config");

const server = express();

server.use(bodyParser({
  extended: false
}));

// server.use(auth, apiRouter());
server.use( apiRouter());

server.listen(PORT, HOST, err => {
  if (err) throw err;
  console.log(`Runnnig on: http://${HOST}:${PORT}`);
});