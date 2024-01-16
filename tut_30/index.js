const { MongoClient } = require('mongodb')  // this line and the below line are same
// const MongoClient = require('mongodb').MongoClient
const url= 'mongodb://localhost:27017';
const databaseName='e-comm'
const client = new MongoClient(url);

async function getData()
{
    // let result = await client.connect();
    // db= result.db(databaseName);
    // collection = db.collection('products');
    // let data = await collection.find({}).toArray();
    // console.log(data)
    try {
        await client.connect();
        console.log('Connected to the database');

        const database = client.db(databaseName);
        const collection = database.collection('product');
    

        const data = await collection.find({}).toArray();
        console.log(data);
    } finally {
        await client.close();
        console.log('Connection closed');
    }

}

getData().catch(err => console.error(err));

// const express = require("express");
// const { MongoClient, ServerApiVersion } = require("mongodb");
// // Replace the placeholder with your Atlas connection string
// const uri = "mongodb://localhost:27017";
// // Create a MongoClient with a MongoClientOptions object to set the Stable API version
// const client = new MongoClient(uri,  {
//         serverApi: {
//             version: ServerApiVersion.v1,
//             strict: true,
//             deprecationErrors: true,
//         }
//     }
// );

// const app = express()
// async function run() {
//   try {
//     // Connect the client to the server (optional starting in v4.7)
//     await client.connect();
//     // Send a ping to confirm a successful connection
//     await client.db("admin").command({ ping: 1 });
//     console.log("Pinged your deployment. You successfully connected to MongoDB!");
//   } finally {
//     // Ensures that the client will close when you finish/error
//     await client.close();
//   }
// }
// run().catch(console.dir);

// app.listen(5000)


// const express = require('express')
// const mongoose = require('mongodb')

// const app = express()
// // mongoose.connect("mongodb://127.0.0.1:27017/e-comm")
// mongoose.connect("mongodb://localhost:27017/e-comm")

// const UserSchema = new mongoose.UserSchema({
//     name: String,
//     brand: String,
//     price: Number,
//     category: String
// })

// const UserModel = mongoose.model("product", UserSchema)

// app.get("/", (req, res) => {
//     res.json(UserModel.find().toArray())
// })

// app.listen(5000, () => {
//     console.log(`Server is running on port 5000`)
// })