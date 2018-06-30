"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Query_1 = require("./Query");
const Mutation_1 = require("./Mutation");
// import { Subscription } from "./Subscription";
// import { auth } from "./Mutation/auth";
// import { product } from "./Mutation/product";
// import { AuthPayload } from "./AuthPayload";
exports.default = {
    Query: Query_1.Query,
    Mutation: Mutation_1.Mutation
    //   Mutation: {
    //     ...auth,
    //     ...product
    //   },
    //   AuthPayload,
    //   Subscription
};
