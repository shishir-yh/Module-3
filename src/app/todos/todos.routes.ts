import express, { Application, Request, Response } from "express";
import path from "path";
import fs from "fs";
import { client } from "../../config/mongodb";

export const todosRouter = express.Router();

const app: Application = express();

// Middleware to parse JSON bodies
app.use(express.json());

const filePath = path.join(__dirname, "../../../db/todo.json");

/* Get all the Data */
todosRouter.get("/", async (req: Request, res: Response) => {
  const db = await client.db("todosDB");
  const collection = await db.collection("todos");

  const cursor = collection.find({});
  const todos = await cursor.toArray();
  res.json(todos);
});

/* Post the todos */
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

todosRouter.get("/:title", (req: Request, res: Response) => {
  const { title, body } = req.body;
  console.log("*---the created post is:--*");
  console.log(body);
  res.send({ title, body });
});

todosRouter.put("/updated-todo/:title", (req: Request, res: Response) => {
  const { title, body } = req.body;
  console.log("*---the created post is:--*");
  console.log(body);
  res.send({ title, body });
});

todosRouter.delete("/delete-todo/:title", (req: Request, res: Response) => {
  const { title, body } = req.body;
  console.log("*---the created post is:--*");
  console.log(body);
  res.send({ title, body });
});
