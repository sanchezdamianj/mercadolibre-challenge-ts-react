const express = require("express");
const routes = require("./router/index.js");

const server = express();
server.use("/", routes);
server.use((err, req, res, next) => {
  const status = err.status || 500;
  const messages = err.messages || err;
  console.error(err);
  res.status(status).send(messages);
});

module.exports = server;
