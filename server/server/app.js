const express = require("express");
const graphqlHTTP = require("express-graphql");
const schema = require("../schema/schema");
const mongoose = require("mongoose");
const cors = require("cors");
const MongoClient = require('mongodb').MongoClient;

const app = express();
const PORT = process.env.PORT || 3005;

mongoose.connect(
  process.env.MONGODB_URI ||
  "mongodb+srv://Pavel:julia03081989@cluster0-0nlh0.mongodb.net/dncm?retryWrites=true&w=majority",
  { useNewUrlParser: true, useUnifiedTopology: true },
).then(() => console.log('DB Connected!'))
.catch(err => {
console.log(Error, err.message);
});;

mongoose.connection.on("connected", () => {
  console.log("Mongoose is connected!!!");
});

app.use(cors());

app.use(
  "/graphql",
  graphqlHTTP({
    schema,
    graphiql: true,
  })
);

if (process.env.NODE_ENV === "production") {
  app.use(express.static("build"));
}

app.listen(PORT, (err) => {
  err ? console.log(err) : console.log("Server started!");
});
