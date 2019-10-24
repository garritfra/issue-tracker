const app = require("express")();

app.get("/", (req, res) => res.send("Hello World!"));

app.use("/tickets", require("./controller/TicketController"));

app.listen(8080);
