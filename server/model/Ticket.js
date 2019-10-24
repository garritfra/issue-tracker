const mongoose = require("mongoose");

const Ticket = new mongoose.Schema({
  title: String,
  body: String,
  status: String
});

module.exports = mongoose.model("Ticket", Ticket);
