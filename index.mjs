import express from "express"
const app = express()
import planets from "./routes/planets.mjs"

//middleware
app.use(express.json())
app.use("/planets", planets)

///error handling middleware
app.use((err, req, res, next)=> {
    res.status(500).send("Something is wrong man!")
})


const port = 3000
app.listen(port, ()=> {
    console.log(`Server is listening to Andre: ${port}`)
})