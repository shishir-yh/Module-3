/* Initial file of express js --> get , post , delete,search */

import express, { Application, NextFunction, Request, Response } from "express";
import path from "path";
import fs from "fs";

const app: Application = express();

app.use(express.json()); // perser , it it used to make the json file into object

// router related middleware :-
const todosRouter = express.Router();
const userRouter = express.Router();

app.use("/todos", todosRouter);
app.use("/users", userRouter);

app.get("/", (req: Request, res: Response) => {
  res.send("I am learning");
});

/* lets work on error  */
app.get("/error", async (req: Request, res: Response, next: NextFunction) => {
  try {
    console.log(something);
    res.send("welcome to error er duniya");
  } catch (error) {
    next(error);
  }
});

/* When we can't find any route, we will give that error. */
app.use((req: Request, res: Response, next: NextFunction) => {
  res.status(404).json({ message: "Sorry route is not found" });
});

/* how we handle the global error */
app.use((error: any, req: Request, res: Response, next: NextFunction) => {
  if (error) {
    console.log("error", error);
    res.status(400).json({ message: "something is went wrong" });
  }
});

export default app;

/*
server --> server handling like--> starting, closing, error handling of server. only related to server
app --> routing handling, middleware, route related error handling
app folder --> business logic  handing like create read update delete, database related work

*/
