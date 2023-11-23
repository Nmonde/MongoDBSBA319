import express from "express"
import db from "../db/conn.mjs"
import { ObjectId } from "mongodb"
//import { ObjectId } from "mongodb"

const router = express.Router()

// // Working route to Get all planets collections
// router.get('/', async (req, res) => {
//   const planetsCollection = await db.collection("planets")
//   const results = await planetsCollection.find({}).toArray()
//   res.send(results).status(200)
// })


//Show one of the planets collections using name Mercury, Mars, etc.
// router.get("/:name", async (req, res) => {
//     const planetsCollection =  db.collection("planets")
//     const results = await planetsCollection.findOne( {name:req.params.name} )
//     res.send(results).status(200)
//   })
  
// router.get("/:name", async (req, res) => {
//       const planetsCollection =  db.collection("planets")
//       const results = await planetsCollection.insertOne( {name:req.params.name} )
//       res.send(results).status(200)
//     })

// Create new planet data
// router.post("/", async (req, res) => {
//   const planet = new Planet(req.body);
//   try {
//     const newPlanet = await planet.save();
//     res.status(201).json(newPlanet);
//   } catch (error) {
//     res.status(400).json({ message: error.message });
//   }
// });

// // Update planet data
// router.patch('/:id', async (req, res) => {
//   const planetsCollection = client.db().collection('planets');
//   try {
//     const updatedPlanet = await planetsCollection.findOneAndUpdate(
//       { _id: ObjectId(req.params.id) },
//       { $set: req.body },
//       { returnDocument: 'after' }
//     );
//     res.json(updatedPlanet.value);
//   } catch (error) {
//     res.status(400).json({ message: error.message });
//   }
// });

// // Delete a planet data
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
