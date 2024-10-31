const jsonServer = require("json-server");
const express = require("express");
const server = jsonServer.create();
const router = jsonServer.router("db.json");
const middlewares = jsonServer.defaults();

server.use("/images/basic", express.static("images/basic"));
server.use("/images/cooking", express.static("images/cooking"));
server.use(middlewares);
server.use(router);

server.listen(3000, () => {
  console.log("JSON Server is running port:3000");
});
