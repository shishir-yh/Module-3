import express, { Application, Request, Response } from  "express";
import path from "path";
import fs from "fs";

export const todosRouter = express.Router()

const app:Application = express()

// Middleware to parse JSON bodies
app.use(express.json());

const filePath  = path.join(__dirname,'../../../db/todo.json')

todosRouter.get('/', (req: Request, res : Response) => {
    
    // console.log('from query : ', req.query)
    // console.log("from param : ", req.params)
    
    const data = fs.readFileSync(filePath,{encoding:'utf8'})
    res.json(data)
})

todosRouter.post('/created-todo', (req: Request, res : Response) => {
    const {title, body} = req.body
    console.log('*---the created post is:--*')
    console.log(body)
    res.send({title,body}) 
})

todosRouter.get("/:title", (req: Request, res : Response) => {
    const {title, body} = req.body
    console.log('*---the created post is:--*')
    console.log(body)
    res.send({title,body}) 
})

todosRouter.put("/updated-todo/:title", (req: Request, res : Response) => {
    const {title, body} = req.body
    console.log('*---the created post is:--*')
    console.log(body)
    res.send({title,body}) 
})

todosRouter.delete("/delete-todo/:title",(req: Request, res : Response) => {
    const {title, body} = req.body
    console.log('*---the created post is:--*')
    console.log(body)
    res.send({title,body}) 
})
