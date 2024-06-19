require("dotenv").config();
const express = require("express");
const cors = require("cors");
const { MongoClient, ServerApiVersion } = require("mongodb");
const app = express();
// middleware
app.use(express.json());
app.use(cors());
const port = process.env.PORT || 3000;
const uri = process.env.DB_URL;

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

async function run() {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    await client.connect();
  // database collection
  const database = client.db("music");
  const User = database.collection("user");

  // for checking route
  app.get("/health", (_req, res) => {
    res.send("hello");
  });
   
  } finally {
    // Ensures that the client will close when you finish/error
    // await client.close();
    app.listen(port, () => console.log(`server is runing on port ${port}`));
  }
}
run().catch(console.dir);
