import { GraphQLServer } from "graphql-yoga";
import { Prisma } from "./generated/prisma";
import resolvers from "./resolvers";
import { ContextParameters } from "graphql-yoga/dist/types";

const server = new GraphQLServer({
  typeDefs: "./src/schema.graphql",
  resolvers: resolvers as any, //TODO remove
  context: (req: ContextParameters) => ({
    ...req,
    db: new Prisma({
      // endpoint: "http://localhost:4466", // the endpoint of the Prisma DB service
      // secret: "mysecret123", // specified in database/prisma.yml
      debug: true, // log all GraphQL queries & mutations sent to the Prisma API PRISMA_ENDPOINT
      secret: process.env.PRISMA_SECRET, // only needed if specified in `database/prisma.yml` (value set in `.env`)
      endpoint: process.env.PRISMA_ENDPOINT // only needed if specified in `database/prisma.yml` (value set in `.env`)
    })
  })
});

server.start(() => console.log(`Server is running on 4000`));
