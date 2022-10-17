const { json } = require("express");
const mongoose = require("mongoose");
const connectionString =
  "mongodb+srv://headshigh:720058726Nn@@nodeexpressprojects.19wvolp.mongodb.net/nischal?retryWrites=true&w=majority";
const connectDb = (url) => {
  return mongoose.connect(url, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology: true,
  });
};
module.exports = connectDb;
