const express = require("express");
const cors = require("cors");
const app = express();
const port = process.env.PORT || 5000;
// middleware
app.use(cors());
app.use(express.json());

// connect mongodb

const { MongoClient, ServerApiVersion } = require("mongodb");
const uri =
  "mongodb+srv://dbuser3:mWtht6BGjQD1uhQQ@cluster0.efpjwcu.mongodb.net/?retryWrites=true&w=majority";
const client = new MongoClient(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  serverApi: ServerApiVersion.v1,
});

async function run() {
  try {
    const userCollection = client.db("mongodbNode").collection("userSet");
    const user = { name: "Maruf", email: "maruf112@gmail.com" };
    const result = await userCollection.insertOne(user);
    console.log(result);
  } finally {
  }
}
run().catch((err) => console.log(err));

app.get("/", (req, res) => {
  res.send("I am on HOME.");
});
app.listen(port, () => {
  console.log(`Server is running on ${port}`);
});
