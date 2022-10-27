require("dotenv").config();
const express = require("express");
const app = express();

const server_port = process.env.PORT || 5000;

//db config

//midlewares
app.use(express.json());

//routes

//server online response
app.get("/", (req, res) => {
  res.status(200).json({
    status: 200,
    message: "server is up and running",
  });
});

//request did not match any endpoint/route
app.all("*", (req, res) => {
  res.status(404).json({
    status: 200,
    message: "resource not found",
  });
});

app.listen(server_port, (err) => {
  if (err) {
    console.log(err);
  }

  console.log(`server is listening to port ${server_port}`);
});
