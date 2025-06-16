"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.todosRouter = void 0;
const express_1 = __importDefault(require("express"));
const path_1 = __importDefault(require("path"));
const fs_1 = __importDefault(require("fs"));
exports.todosRouter = express_1.default.Router();
const app = (0, express_1.default)();
// Middleware to parse JSON bodies
app.use(express_1.default.json());
const filePath = path_1.default.join(__dirname, '../../../db/todo.json');
exports.todosRouter.get('/', (req, res) => {
    // console.log('from query : ', req.query)
    // console.log("from param : ", req.params)
    const data = fs_1.default.readFileSync(filePath, { encoding: 'utf8' });
    res.json(data);
});
exports.todosRouter.post('/created-todo', (req, res) => {
    const { title, body } = req.body;
    console.log('*---the created post is:--*');
    console.log(body);
    res.send({ title, body });
});
exports.todosRouter.get("/:title", (req, res) => {
    const { title, body } = req.body;
    console.log('*---the created post is:--*');
    console.log(body);
    res.send({ title, body });
});
exports.todosRouter.put("/updated-todo/:title", (req, res) => {
    const { title, body } = req.body;
    console.log('*---the created post is:--*');
    console.log(body);
    res.send({ title, body });
});
exports.todosRouter.delete("/delete-todo/:title", (req, res) => {
    const { title, body } = req.body;
    console.log('*---the created post is:--*');
    console.log(body);
    res.send({ title, body });
});
