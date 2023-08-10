import express, { Application } from "express";
import { graphqlHTTP } from "express-graphql";
import schema from "./schema/book";

const app: Application = express();
const PORT: number = 3000;

app.use(
  "/graphql",
  graphqlHTTP({
    schema,
    graphiql: true,
  })
);

app.listen(PORT, () => {
  console.log("server is connect " + PORT);
});
