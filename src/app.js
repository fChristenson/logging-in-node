const express = require("express");
const app = express();
const User = require("./lib/User");
const logger = require("./lib/logger");

app.get("/", (req, res) => {
  logger.info("/ query", { query: req.query });

  logger.info("Finding user", { q: req.query.q });
  const foundUser = User.findUser(req.query.q);
  logger.info("User found", { foundUser });

  const msg = {
    username: foundUser && foundUser.username,
    foundUser: !!foundUser
  };
  logger.info("/ response", msg);
  res.json(msg);
});

module.exports = app;
