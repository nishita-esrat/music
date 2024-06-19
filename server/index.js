require("dotenv").config();
const express = require("express");
const cors = require("cors");
const { MongoClient, ServerApiVersion } = require("mongodb");
const { generateToken } = require("./utility/generate-token");
const { uploadImageCloudinary } = require("./utility/cloudinary");
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

    //  register a new user
    app.post("/register", async (req, res) => {
      try {
        // get value from req body
        const { name, email, photo_url, gender, phone_number, address } =
          req.body;
        const existUser = await User.findOne({ email });
        // check user is exist or not
        if (existUser) {
          return res.status(409).json({ message: "user already exist" });
        } else {
          // to get photo url function
          const { url, public_id } = await uploadImageCloudinary(
            photo_url,
            "avater"
          );
          const newUser = {
            name,
            email,
            photo_url: url,
            public_id,
            gender: gender ? gender : "",
            phone_number: phone_number ? phone_number : "",
            address: address ? address : "",
            role: "student",
            following: [],
            select_class: [],
            enrolled_class: [],
          };
          const result = await User.insertOne(newUser);
          // generate token function
          const token = generateToken(email);
          return res
            .status(201)
            .json({ message: "User registered successfully", token });
        }
      } catch (error) {
        console.log(error);
      }
    });
  } finally {
    // Ensures that the client will close when you finish/error
    // await client.close();
    app.listen(port, () => console.log(`server is runing on port ${port}`));
  }
}
run().catch(console.dir);
