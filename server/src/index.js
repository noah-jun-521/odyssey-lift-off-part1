import { ApolloServer } from "apollo-server";
import { mocks } from "./mocks.js";
import { typeDefs } from "./schema.js";

const server = new ApolloServer({
  typeDefs,
  mocks,
});

server.listen().then(() => {
  console.log(`
    🚀  Server is running!
    🔉  Listening on port 4000
    📭  Query at http://localhost:4000
  `);
});
