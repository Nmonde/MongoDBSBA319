const express = require("express")
const router = express.Router()
const Planet = require("./sample_guides/planets")

//Get all planets
router.get("/", async(req, res)=> {
    try {
        const planets = await Planet.find();
        res.json(planets);
    } catch (error) {
        res.status(500).json({message:error.message})
    }
})
// create new planet data
router.post("/", async (req, res)=> {
    const planet = new Planet(req.body);
    try {
        const newPlanet = await planet.save();
        res.status(200).json(newPlanet);
    } catch(error) {
        res.status(400).json({message: error.message});
    }
})

//update planet data
router.patch("/:id", async(req,res)=> {
    try {
        const updatedPlanet = await Planet.findByIdAndUpdate(req.params.id, req.body, {new: true});
        res.json(updatedPlanet);
    } catch(error) {
        res.status(400).json({message:error.message});
    }
})

//Delete a planet data
router.delete("/:id", async(req,res)=> {
    try {
        await Planet.findByIdAndDelete(req.params.id);
        res.json({messsage: "Planet deleted successfully"});
    } catch (error) {
        res.status(500).json({message: error.message});
    }
})

module.exports = router