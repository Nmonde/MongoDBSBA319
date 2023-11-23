import express from "express"
import db from "../db/conn.mjs"
import { ObjectId } from "mongodb"

const router = express.Router()

// Working route to Get all planets collections
// router.get('/', async (req, res) => {
//   const planetsCollection = await db.collection("planets")
//   const results = await planetsCollection.find({}).toArray()
//   res.send(results).status(200)
// })


//Show one of the planets collections using name Mercury, Mars, etc. on localhost3000
// router.get("/:name", async (req, res) => {
//     const planetsCollection =  db.collection("planets")
//     const results = await planetsCollection.findOne( {name:req.params.name} )
//     res.send(results).status(200)
//   })
//or


//Insert new Id on GET request to create new planet object on localhost3000
// router.get("/:name", async (req, res) => {
//       const planetsCollection =  db.collection("planets")
//       const results = await planetsCollection.insertOne( {name:req.body.name}, {orderFromSun:req.body.orderFromSun} )
//       res.send(results).status(200)
//     })


// CRUD Operations

async function insertDocument(document) {
  const collection = await connectToDatabase();
  const result = await collection.insertOne(document);
  console.log(`Document inserted with ID: ${result.insertedId}`);
}

async function findDocuments(query) {
  const collection = await connectToDatabase();
  const documents = await collection.find(query).toArray();
  console.log('Found documents:', documents);
}

async function updateDocument(query, update) {
  const collection = await connectToDatabase();
  const result = await collection.updateOne(query, { $set: update });
  console.log(`${result.modifiedCount} document(s) updated`);
}

async function deleteDocument(query) {
  const collection = await connectToDatabase();
  const result = await collection.deleteOne(query);
  console.log(`${result.deletedCount} document(s) deleted`);
}

// Uncomment and modify the lines below to use the CRUD functions

// insertDocument({ name: 'New Planet', type: 'Terrestrial' });
// findDocuments({});
// updateDocument({ name: 'New Planet' }, { type: 'Gas Giant' });
// deleteDocument({ name: 'New Planet' });
//Create new planet data on postman
// router.post("/", async (req, res) => {
//   const planet = new Planet.insertOne(req.body);
//   try {
//     const newPlanet = await planet.save();
//     res.status(201).json(newPlanet);
//   } catch (error) {
//     res.status(400).json({ message: error.message });
//   }
// });

// // Update planet data on reqbin
// router.patch('/:id', async (req, res) => {
//   const planetsCollection = client.db().collection('planets');
//   try {
//     const updatedPlanet = await planetsCollection.insertDocumet(
//       { _id: ObjectId(req.params.id) },
//       { $set: req.body },
//       { returnDocument: 'after' }
//     );
//     res.json(updatedPlanet.value);
//   } catch (error) {
//     res.status(400).json({ message: error.message });
//   }
// });

// // Delete a planet data on reqbin
// router.delete("/:id", async (req, res) => {
//   const planetsCollection = client.db().collection('planets');
//   try {
//     const result = await planetsCollection.deleteOne({ _id: ObjectId(req.params.id) });
//     if (result.deletedCount === 1) {
//       res.json({ message: "Planet deleted successfully" });
//     } else {
//       res.status(404).json({ message: "Planet not found" });
//     }
//   } catch (error) {
//     res.status(500).json({ message: error.message });
//   }
// });

export default router
