import { MongoClient } from "mongodb"

const uri = process.env.MONGODB_URI || "mongodb+srv://mondesirart:m0ng0Db8418s@mongopractice.3swmqto.mongodb.net"

const client = new MongoClient(uri)

let conn;
try {
  conn = await client.connect();
} catch (err) {
  console.error(err);
}

let db = conn.db("sample_guides");

export default db;