const express = require("express");
const graphqlHTTP = require("express-graphql");
const schema = require("../schema/schema");
const mongoose = require("mongoose");
const cors = require("cors");
const MongoClient = require('mongodb').MongoClient;

const app = express();
const PORT = process.env.PORT || 3005;

mongoose.connect(
  "mongodb+srv://Pavel:julia03081989@cluster0-0nlh0.mongodb.net/dncm?retryWrites=true&w=majority",
  { useNewUrlParser: true, useUnifiedTopology: true },
).then(() => console.log('DB Connected!'))
.catch(err => {
console.log(Error, err.message);
});;

app.use(cors());

app.use(
  "/graphql",
  graphqlHTTP({
    schema,
    graphiql: true,
  })
);

app.listen(PORT, (err) => {
  err ? console.log(err) : console.log("Server started!");
});
