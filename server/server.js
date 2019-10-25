const app = require("express")();
const mongoose = require("mongoose");

const Ticket = require("./model/Ticket");

require("dotenv").config();

mongoose.connect(process.env.MONGO_DATABASE_URL + "/issuetracker", {
  useNewUrlParser: true
});

app.use("/tickets", require("./controller/TicketController"));

app.listen(process.env.PORT || 8080);
