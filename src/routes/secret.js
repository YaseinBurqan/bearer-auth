"use strict";
const express = require("express");
const secretRouter = express.Router();
const bearer = require("../middleware/bearer");
// const logger = require("../middleware/logger");

secretRouter.get("/secret", bearer, (req, res) => {
  res.status(200).json({
    message: "You are authorized to view the user orders",
    user: req.user,
  });
});

// secretRouter.use(logger);

module.exports = secretRouter;
