import { GraphQLObjectType, GraphQLSchema, GraphQLString } from "graphql";
import _ from "lodash";

interface Book {
  name: string;
  genre: string;
  id: string;
}

const book: Book[] = [
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
const BookType = new GraphQLObjectType({
  name: "Book",
  fields: () => ({
    id: { type: GraphQLString },
    name: { type: GraphQLString },
    genre: { type: GraphQLString },
  }),
});

const RootQuery = new GraphQLObjectType({
  name: "RootQueryType",
  fields: {
    book: {
      type: BookType,
      args: { id: { type: GraphQLString } },
      resolve(parent, args) {
        // code to get data from db / other source
        return _.find(book, { id: args.id });
      },
    },
  },
});

export default new GraphQLSchema({
  query: RootQuery,
});
