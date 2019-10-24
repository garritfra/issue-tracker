const express = require("express");

const controller = express.Router();

controller.get("/", (req, res) => res.json(["First Issue", "Second Issue"]));

module.exports = controller;
