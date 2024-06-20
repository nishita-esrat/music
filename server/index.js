require("dotenv").config();
const express = require("express");
const cors = require("cors");
const { MongoClient, ServerApiVersion, ObjectId } = require("mongodb");
const { generateToken } = require("./utility/generate-token");
const {
  uploadImageCloudinary,
  deleteImageCloudinary,
} = require("./utility/cloudinary");
const { authenticated } = require("./middleware");
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

    // login user
    app.post("/login", (req, res) => {
      try {
        const { email } = req.body;
        const token = generateToken(email);
        return res.status(200).json({ token });
      } catch (error) {
        console.log(error);
      }
    });

    // make role admin or instructor
    app.put("/update-role/:userId", authenticated, async (req, res) => {
      try {
        // get value
        const { role } = req.body;
        // find user
        const isAdmin = await User.findOne({
          email: req.authenticated_user.email,
        });
        // check user is admin or not
        if (!(isAdmin.role == "admin")) {
          return res.status(403).json({ message: "Forbidden" });
        } else {
          const user = await User.findOne({
            _id: new ObjectId(req.params.userId),
          });
          // update role admin or instructor
          if (role == "admin") {
            user.role = role;
            const newUser = { ...user, role };
            await User.updateOne(
              {
                _id: new ObjectId(req.params.userId),
              },
              { $set: newUser },
              { upsert: true }
            );
            return res
              .status(200)
              .json({ message: `now ${user.name} is admin` });
          } else {
            // add some porperty in user object
            user.role = role;
            user.follower = [];
            user.approved_class = [];
            await User.replaceOne(
              {
                _id: new ObjectId(req.params.userId),
              },
              user,
              { upsert: true }
            );
            return res
              .status(200)
              .json({ message: `now ${user.name} is intructor` });
          }
        }
      } catch (error) {
        console.log(error);
      }
    });

    // update profile
    app.put("/update-profile/:userId", async (req, res) => {
      try {
        const { photo_url, public_id } = req.body;
        let update_info = { ...req.body };
        if (photo_url && public_id) {
          //to delete previous photo
          const deletePhoto = await deleteImageCloudinary(public_id);
          if (deletePhoto.result == "ok") {
            // to get photo url function
            const { url, public_id } = await uploadImageCloudinary(
              photo_url,
              "avater"
            );
            update_info = { ...req.body, photo_url: url, public_id: public_id };
          }
        }
        await User.updateOne(
          { _id: new ObjectId(req.params.userId) },
          { $set: update_info },
          { upsert: true }
        );
        res.status(200).json({ message: "your profile is updated" });
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
