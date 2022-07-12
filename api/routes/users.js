var express = require('express');
var router = express.Router();

"use strict";
const express = require("express");
const router = express.Router();

const userRewardsControllers = require("../controllers/userrewards");

router.get("/api",(req, res) =>
  res.status(200).send({
    message: "Welcome to the Domains API!"
  })
);

router.post(
  "/",
  userRewardsControllers.validateOrUpdatePoints,
);

module.exports = router;
