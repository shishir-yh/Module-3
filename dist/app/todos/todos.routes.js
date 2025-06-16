"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.todosRouter = void 0;
const express_1 = __importDefault(require("express"));
const path_1 = __importDefault(require("path"));
const mongodb_1 = require("../../config/mongodb");
exports.todosRouter = express_1.default.Router();
const app = (0, express_1.default)();
// Middleware to parse JSON bodies
app.use(express_1.default.json());
const filePath = path_1.default.join(__dirname, "../../../db/todo.json");
/* Get all the Data */
exports.todosRouter.get("/", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const db = yield mongodb_1.client.db("todosDB");
    const collection = yield db.collection("todos");
    const cursor = collection.find({});
    const todos = yield cursor.toArray();
    res.json(todos);
}));
/* Post the todos */
exports.todosRouter.post("/created-todo", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { title, description, priority } = req.body;
    const db = yield mongodb_1.client.db("todosDB");
    const collection = yield db.collection("todos");
    yield collection.insertOne({
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
    const todos = yield cursor.toArray();
    res.json(todos);
}));
exports.todosRouter.get("/:title", (req, res) => {
    const { title, body } = req.body;
    console.log("*---the created post is:--*");
    console.log(body);
    res.send({ title, body });
});
exports.todosRouter.put("/updated-todo/:title", (req, res) => {
    const { title, body } = req.body;
    console.log("*---the created post is:--*");
    console.log(body);
    res.send({ title, body });
});
exports.todosRouter.delete("/delete-todo/:title", (req, res) => {
    const { title, body } = req.body;
    console.log("*---the created post is:--*");
    console.log(body);
    res.send({ title, body });
});
