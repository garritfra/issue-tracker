const express = require("express");
const TicketService = require("../service/TicketService");

const ticketService = new TicketService();

const controller = express.Router();

controller.get("/", (req, res) => {
  const status = req.query.status;
  const tickets =
    status === undefined
      ? ticketService.getAllTickets()
      : ticketService.getAllTicketsWithStatus(status);

  tickets.then(doc => res.send(doc)).catch(err => res.send(err));
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

controller.post("/:ticketId/move", (req, res) => {
  const ticketId = req.params.ticketId;
  const newStatus = req.query.to;
  ticketService
    .updateTicketStatus(ticketId, newStatus)
    .then(ticket => {
      res.send(ticket);
    })
    .catch(err => res.send(err));
});

module.exports = controller;
