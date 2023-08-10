"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const graphql_1 = require("graphql");
const lodash_1 = __importDefault(require("lodash"));
const book = [
    {
        name: "Name of the Wind",
        id: "1",
        genre: "Fantasy",
    },
    {
        name: "The Final Empire",
        id: "2",
        genre: "Fantasy",
    },
    {
        name: "The Long Earth",
        id: "3",
        genre: "Sci-Fi",
    },
];
const BookType = new graphql_1.GraphQLObjectType({
    name: "Book",
    fields: () => ({
        id: { type: graphql_1.GraphQLString },
        name: { type: graphql_1.GraphQLString },
        genre: { type: graphql_1.GraphQLString },
    }),
});
const RootQuery = new graphql_1.GraphQLObjectType({
    name: "RootQueryType",
    fields: {
        book: {
            type: BookType,
            args: { id: { type: graphql_1.GraphQLString } },
            resolve(parent, args) {
                // code to get data from db / other source
                return lodash_1.default.find(book, { id: args.id });
            },
        },
    },
});
exports.default = new graphql_1.GraphQLSchema({
    query: RootQuery,
});
