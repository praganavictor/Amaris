const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const bodyParser = require("body-parser");
const port = process.env.PORT || 5000;

const routes = require("./routes");

const server = express();

mongoose.connect("mongodb://db/amaris", {
  useUnifiedTopology: true,
  useNewUrlParser: true,
});

mongoose.set("useCreateIndex", true);
mongoose.set("useFindAndModify", false);

server.use(cors());
server.use(bodyParser.json());
server.use(bodyParser.urlencoded({ extended: false }));
server.use(routes);

server.listen(port, () => console.log(`Escutando a porta ${port}`));
