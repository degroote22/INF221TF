"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const graphql_yoga_1 = require("graphql-yoga");
const prisma_1 = require("./generated/prisma");
const resolvers_1 = __importDefault(require("./resolvers"));
const server = new graphql_yoga_1.GraphQLServer({
    typeDefs: "./src/schema.graphql",
    resolvers: resolvers_1.default,
    context: (req) => (Object.assign({}, req, { db: new prisma_1.Prisma({
            debug: false,
            secret: process.env.PRISMA_SECRET,
            endpoint: process.env.PRISMA_ENDPOINT // only needed if specified in `database/prisma.yml` (value set in `.env`)
        }) }))
});
server.start(() => console.log(`Server is running on 4000`));
