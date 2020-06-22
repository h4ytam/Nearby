const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const user = require("./routes/user");
const shop = require("./routes/shop");
const InitiateMongoServer = require("./config/db");

InitiateMongoServer();
const app = express();

// middleware
// app.use(express.json());

app.use(bodyParser.json());
app.use(
  express.urlencoded({
    extended: false,
  }),
  cors()
);
app.get("/", (req, res) => {
  res.json({ message: "API working" });
});

app.use("/user", user);
app.use("/shop", shop);

app.listen(5000);
