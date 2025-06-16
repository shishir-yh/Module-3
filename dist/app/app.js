"use strict";
/* Initial file of express js --> get , post , delete,search */
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const todos_routes_1 = require("./todos/todos.routes");
const app = (0, express_1.default)();
app.use(express_1.default.json()); // perser , it it used to make the json file into object
// router related middleware :-
const userRouter = express_1.default.Router();
app.use("/todos", todos_routes_1.todosRouter);
app.use("/users", userRouter);
app.get('/', (req, res) => {
    res.send('I am learning express js and mongodb');
});
exports.default = app;
/*
server --> server handling like--> starting, closing, error handling of server. only related to server
app --> routing handling, middleware, route related error handling
app folder --> business logic  handing like create read update delete, database related work

*/ 
