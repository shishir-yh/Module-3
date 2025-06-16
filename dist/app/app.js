"use strict";
/* Initial file of express js --> get , post , delete,search */
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
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
app.use(express_1.default.json()); // perser , it it used to make the json file into object
// router related middleware :-
const todosRouter = express_1.default.Router();
const userRouter = express_1.default.Router();
app.use("/todos", todosRouter);
app.use("/users", userRouter);
app.get("/", (req, res) => {
    res.send("I am learning");
});
/* lets work on error  */
app.get("/error", (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        console.log(something);
        res.send("welcome to error er duniya");
    }
    catch (error) {
        next(error);
    }
}));
/* When we can't find any route, we will give that error. */
app.use((req, res, next) => {
    res.status(404).json({ message: "Sorry route is not found" });
});
/* how we handle the global error */
app.use((error, req, res, next) => {
    if (error) {
        console.log("error", error);
        res.status(400).json({ message: "something is went wrong" });
    }
});
exports.default = app;
/*
server --> server handling like--> starting, closing, error handling of server. only related to server
app --> routing handling, middleware, route related error handling
app folder --> business logic  handing like create read update delete, database related work

*/
