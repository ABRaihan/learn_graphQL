"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const express_graphql_1 = require("express-graphql");
const book_1 = __importDefault(require("./schema/book"));
const app = (0, express_1.default)();
const PORT = 3000;
app.use("/graphql", (0, express_graphql_1.graphqlHTTP)({
    schema: book_1.default,
    graphiql: true,
}));
app.listen(PORT, () => {
    console.log("server is connect " + PORT);
});
