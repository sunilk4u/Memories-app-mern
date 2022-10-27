const mongoose = require("mongoose");
const mongo_uri = process.env.MONGO_URI;

const db_connect = () =>
  mongoose
    .connect(mongo_uri, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => {
      console.log("MongoDB database is connected");
    })
    .catch((err) => {
      console.log(err);
      console.log("MongoDB database could not be connected");
    });

module.exports = db_connect;
