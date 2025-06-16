import express, { Application, Request, Response } from "express";
import path from "path";
import fs from "fs";
import { client } from "../../config/mongodb";
import { Collection, ObjectId } from "mongodb";

export const todosRouter = express.Router();

const app: Application = express();

// Middleware to parse JSON bodies
app.use(express.json());


/* Get all the Data part - 1 */
todosRouter.get("/", async (req: Request, res: Response) => {
  const db = await client.db("todosDB");
  const collection = await db.collection("todos");

  const cursor = collection.find({});
  const todos = await cursor.toArray();
  res.json(todos);
});

/* Post the todos part - 2 */
todosRouter.post("/created-todo", async (req: Request, res: Response) => {
  const { title, description, priority } = req.body;

  const db = await client.db("todosDB");
  const collection = await db.collection("todos");

  await collection.insertOne({
    title: title,
    description: description,
    priority: priority,
    isCompleted: false,
  });

  //title
  //description
  // priority: High, medium, Low
  //isCompleted: true
  const cursor = collection.find({});
  const todos = await cursor.toArray();

  res.json(todos);
});

/* get the single id: part -3 */

todosRouter.get("/:id", async (req: Request, res: Response) => {
  const id = req.params.id;
  const db = await client.db("todosDB");
  const collection = await db.collection("todos");
  const todo = await collection.findOne({ _id: new ObjectId(id) });

  res.json(todo);
});

todosRouter.put("/updated-todo/:id", async(req: Request, res: Response) => {
  const id = req.params.id;
  const {title,description,priority,isCompleted} = req.body
  
  const db = await client.db("todosDB");
  const collection = await db.collection("todos");
  
  const filter = ({_id: new ObjectId(id)})
  const updateTodo = await collection.updateOne(filter,
  {$set:{title,description,priority,isCompleted}},
  {upsert:true})
 
 res.json(updateTodo)
});

/* delete the single id  part -4 */
todosRouter.delete("/delete-todo/:id", async (req: Request, res: Response) => {
  const id = req.params.id;
  const db = await client.db("todosDB");
  const collection = await db.collection("todos");
  await collection.deleteOne({ _id: new ObjectId(id) });

  res.json({
    message: "deleted succesfully";
  });
});
