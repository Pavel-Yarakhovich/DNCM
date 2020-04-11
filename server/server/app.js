const express = require("express");
const graphqlHTTP = require("express-graphql");
const schema = require("../schema/schema");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();
const PORT = 3005;

// async function listDatabases(client){
//   const databasesList = await client.db().admin().listDatabases();
//   console.log("Databases");
//   databasesList.databases.forEach(db => console.log(` - ${db.name}`));
// }

// async function main() {
//   const uri =
//     "mongodb+srv://Pavel:julia03081989@cluster0-0nlh0.mongodb.net/test?retryWrites=true&w=majority";
//   const client = new MongoClient(uri);
//   try {
//     await client.connect();
//     await listDatabases(client);
//   } catch (e) {
//     console.log(e);
//   } finally {
//     await client.close();
//   }
// }

// main().catch(console.error);

mongoose.connect(
  "mongodb+srv://Pavel:julia03081989@cluster0-0nlh0.mongodb.net/test?retryWrites=true&w=majority",
  { useNewUrlParser: true }
);

app.use(cors());

app.use(
  "/graphql",
  graphqlHTTP({
    schema,
    graphiql: true,
  })
);

const dbConnection = mongoose.connection;
dbConnection.on("error", (err) => console.log(`Connection error: ${err}`));
dbConnection.once("open", () => console.log("Connected to DB"));

app.listen(PORT, (err) => {
  err ? console.log(err) : console.log("Server started!");
});
