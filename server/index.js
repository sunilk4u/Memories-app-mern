require("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cors");
const db_connect = require("./configs/dbConfig");
const postRouter = require("./routes/posts");
const userRouter = require("./routes/users");
const server_port = process.env.PORT || 5000;

//db config
db_connect();

//midlewares
app.use(
  cors({
    origin: process.env.CLIENT_URI,
    optionsSuccessStatus: 200,
  })
);
app.use(express.json({ limit: "30mb", extended: true }));
app.use(express.urlencoded({ limit: "30mb", extended: true }));
app.use("/posts", postRouter);
app.use("/user", userRouter)

//routes

//server online response
app.get("/", (req, res) => {
  res.status(200).json({
    message: "server is up and running",
  });
});

//request did not match any endpoint/route
app.all("*", (req, res) => {
  res.status(404).json({
    message: "resource not found",
  });
});

app.listen(server_port, (err) => {
  if (err) {
    console.log(err);
  }

  console.log(`server is listening to port ${server_port}`);
});
