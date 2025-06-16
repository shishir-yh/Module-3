/* Initial file of express js --> get , post , delete,search */

import express, { Application, Request, Response } from  "express";
import path from "path";
import fs from "fs";
import { todosRouter } from "./todos/todos.routes";

const app:Application = express()

app.use(express.json()) // perser , it it used to make the json file into object

 // router related middleware :-

const userRouter = express.Router()

app.use("/todos",todosRouter)
app.use("/users",userRouter)



app.get('/', (req: Request, res : Response) => {
    
    res.send('I am learning express js and mongodb')
})




export default app;

/*
server --> server handling like--> starting, closing, error handling of server. only related to server
app --> routing handling, middleware, route related error handling
app folder --> business logic  handing like create read update delete, database related work

*/