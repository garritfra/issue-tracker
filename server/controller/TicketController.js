const express = require("express");

const Ticket = require("../model/Ticket");

const controller = express.Router();

controller.get("/", (req, res) => {
  Ticket.find({})
    .then(doc => res.send(doc))
    .catch(err => res.send(err));
});

controller.post("/", (req, res) => {
  const testTicket = new Ticket({
    title: "Test Ticket",
    body: "This is a test Ticket",
    status: "ToDo"
  });
  testTicket.save().then(r => res.send(r));
});

controller.delete("/", (req, res) => {
  Ticket.deleteMany({})
    .then(r => res.send(r))
    .catch(err => res.send(err));
});

module.exports = controller;
