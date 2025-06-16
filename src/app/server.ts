/* server on and off related things*/
import { MongoClient, ServerApiVersion } from 'mongodb';
import app from './app'
import { client } from '../config/mongodb';
let server;
const port = 3000

const bootstrap = async () => {
  await client.connect();
  console.log("connection to the mongobd")
  
  /* const db = await client.db("todosDB")  
  const collection = db.collection("todos").insertOne({
    title: "mongobd",
    body : "its insert ok"
   })
    */
 
  server = app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
  });
};


bootstrap()

