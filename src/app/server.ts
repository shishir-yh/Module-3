/* server on and off related things*/
import { MongoClient, ServerApiVersion } from 'mongodb';
import app from './app'
let server;
const port = 3000

const uri = "mongodb+srv://mongobd:12345@cluster0.364im.mongodb.net/todosDB?retryWrites=true&w=majority&appName=Cluster0";
// Create a MongoClient with a MongoClientOptions object to set the Stable API version

const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});


const bootstrap = async () => {
  await client.connect();
  console.log("connection to the mongobd")
  
  const db = await client.db("todosDB")  
  const collection = db.collection("todos").insertOne({
    title: "mongobd",
    body : "its insert ok"
   })
   
 
  server = app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
  });
};


bootstrap()

