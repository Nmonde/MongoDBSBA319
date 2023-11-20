const express = require("express")
const {MongoClient} = require("mongodb")
const planetsRoutes = require("./sample_guides/planets")

const app = express()
const PORT = process.env.PORT || 3000

//Mongodb connection
mongoose.connect ("mongodb+srv://mondesirart:m0ng0Db8418s@mongopractice.3swmqto.mongodb.net/", {useNewURLParser: true, useUnifiedTopology: true})

app.use(express.json())

app.use("/planets", planetsRoutes)

app.listen(PORT, ()=> {
    console.log(`Server is running with Andre: ${PORT}`);
})

//not sure if this is needed
// async function connectToMongoDB() {
//     const URI = "mongodb+srv://mondesirart:m0ng0Db8418s@mongopractice.3swmqto.mongodb.net/";
//     const client = new MongoClient(URI, {useNewURLParser: true, useUnifiedTopology: true});
//     try {
//         await client.connect();
//         console.log("Connect to MongoDB")
//     } finally {
//         await client.close();
//         console.log("Disconnected from MongoDB");
//     }
// }

connectToMongoDB();