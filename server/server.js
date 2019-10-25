const app = require("express")();
const mongoose = require("mongoose");

const Ticket = require("./model/Ticket");

require("dotenv").config();

mongoose
  .connect(process.env.MONGO_DATABASE_URL + "/issuetracker", {
    useNewUrlParser: true,
    useFindAndModify: false,
    useUnifiedTopology: true
  })
  .then(connection =>
    console.log(
      "Connected to Database: " + connection.connection.db.databaseName
    )
  );

app.use(require("body-parser").json());

app.use("/tickets", require("./controller/TicketController"));

app.listen(process.env.PORT || 8080);
