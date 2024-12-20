// import dotenv from 'dotenv';
// import { MongoClient, ServerApiVersion } from "mongodb";

// dotenv.config({ path: './config.env' });
// const uri = process.env.ATLAS_URI || "";
// const client = new MongoClient(uri, {
//   serverApi: {
//     version: ServerApiVersion.v1,
//     strict: true,
//     deprecationErrors: true,
//   },
// });

// try {
//   // Connect the client to the server
//   await client.connect();
//   // Send a ping to confirm a successful connection
//   await client.db("FutureVision").command({ ping: 1 });
//   console.log(
//    "Pinged your deployment. You successfully connected to MongoDB!"
//   );
// } catch(err) {
//   console.error(err);
// }

// let db = client.db("FutureVision");

// export default db;

import dotenv from 'dotenv';
import { MongoClient, ServerApiVersion } from "mongodb";

dotenv.config({ path: './config.env' });

const uri = process.env.ATLAS_URI || "";
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

try {
  // Connect the client to the server
  await client.connect();
  // Send a ping to confirm a successful connection
  await client.db("FutureVision").command({ ping: 1 });
  console.log("Pinged your deployment. You successfully connected to MongoDB!");
} catch (err) {
  console.error(err);
}

let db = client.db("FutureVision"); // Correct database name

export default db;
