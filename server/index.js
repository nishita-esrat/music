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
    const Class = database.collection("class");

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

    // create class
    app.post("/add-class", authenticated, async (req, res) => {
      try {
        // find user
        const isInstructor = await User.findOne({
          email: req.authenticated_user.email,
        });
        // check user is instructor or not
        if (!(isInstructor.role == "instructor")) {
          return res.status(403).json({ message: "Forbidden" });
        } else {
          // to get class image photo url
          const { url, public_id } = await uploadImageCloudinary(
            req.body.class_image,
            "class photo"
          );
          // get value
          const newClass = {
            ...req.body,
            class_image: url,
            public_id,
            status: "pending",
            feedback: "",
          };
          // add class
          await Class.insertOne(newClass);
          return res.status(200).json({ message: "new class created" });
        }
      } catch (error) {
        console.log(error);
      }
    });

    // update class
    app.put("/update-class/:classId", authenticated, async (req, res) => {
      try {
        const isInstructor = await User.findOne({
          email: req.authenticated_user.email,
        });
        // check instructor or not
        if (!(isInstructor.role == "instructor")) {
          return res.status(403).json({ message: "Forbidden" });
        } else {
          // get value
          const { class_image, public_id } = req.body;
          // class info
          let info = {
            ...req.body,
          };
          if (class_image && public_id) {
            //to delete previous photo
            const deletePhoto = await deleteImageCloudinary(public_id);
            if (deletePhoto.result == "ok") {
              // to get photo url function
              const { url, public_id } = await uploadImageCloudinary(
                class_image,
                "class photo"
              );
              console.log("iner2");
              info = {
                ...req.body,
                class_image: url,
                public_id,
              };
            }
          }
          // update class
          const result = await Class.updateOne(
            { _id: new ObjectId(req.params.classId) },
            { $set: info },
            { upsert: true }
          );
          return res.status(200).json({ message: "updated class" });
        }
      } catch (error) {
        console.log(error);
      }
    });

    // update class status
    app.put("/update-status/:classId", authenticated, async (req, res) => {
      try {
        // get value
        const { status } = req.body;
        const isAdmin = await User.findOne({
          email: req.authenticated_user.email,
        });
        // check admin or not
        if (!(isAdmin.role == "admin")) {
          return res.status(403).json({ message: "Forbidden" });
        } else {
          // if status is approved than insert class id into instructor approved_class
          if (status == "approved") {
            const existClass = await Class.findOne({
              _id: new ObjectId(req.params.classId),
            });
            const instructor = await User.findOne({
              email: existClass.instructor_email,
            });
            instructor.approved_class.push(req.params.classId);
            await User.replaceOne(
              { _id: new ObjectId(instructor._id) },
              instructor,
              { upsert: true }
            );
          }
          // status info
          const info = {
            $set: {
              status: status,
            },
          };
          // update class status
          await Class.updateOne(
            { _id: new ObjectId(req.params.classId) },
            info,
            { upsert: true }
          );
          return res.status(200).json({ message: "updated status" });
        }
      } catch (error) {
        console.log(error);
      }
    });

    // send feedback
    app.put("/feedback/:classId", authenticated, async (req, res) => {
      try {
        // get value
        const { feedback } = req.body;
        const isAdmin = await User.findOne({
          email: req.authenticated_user.email,
        });
        // check admin or not
        if (!(isAdmin.role == "admin")) {
          return res.status(403).json({ message: "Forbidden" });
        } else {
          // feedback info
          const info = {
            $set: {
              feedback,
            },
          };
          // update class feedback
          const result = await Class.updateOne(
            { _id: new ObjectId(req.params.classId) },
            info,
            { upsert: true }
          );
          return res.status(200).json({ message: "sent feedback" });
        }
      } catch (error) {
        console.log(error);
      }
    });

    // show 6 classes based on the number of student
    app.get("/top-classes", async (_req, res) => {
      // filter based on the total student ,greater than 6
      const filter = {
        $expr: {
          $gte: [{ $size: "$total_enrolled_students" }, 6],
        },
      };
      const result = await Class.find(filter).toArray();
      res.status(200).json({ top_classes: result });
    });
  } finally {
    // Ensures that the client will close when you finish/error
    // await client.close();
    app.listen(port, () => console.log(`server is runing on port ${port}`));
  }
}
run().catch(console.dir);
