const Ticket = require("../model/Ticket");

module.exports = class TicketService {
  constructor() {}

  getAllTickets() {
    return Ticket.find({});
  }

  getTicketById(ticketId) {
    return Ticket.findById(ticketId);
  }

  getAllTicketsWithStatus(status) {
    return Ticket.find({ status: status });
  }

  updateTicketStatus(documentId, newStatus) {
    return Ticket.findByIdAndUpdate(
      documentId,
      { status: newStatus },
      { new: true }
    );
  }
};
