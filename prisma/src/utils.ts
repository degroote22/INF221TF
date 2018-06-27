import { Prisma } from "./generated/prisma";
import { ContextParameters } from "graphql-yoga/dist/types";
import fetch from "node-fetch";

export interface Context extends ContextParameters {
  db: Prisma;
}

export const getUserData = async (ctx: Context) => {
  const Authorization = ctx.request.get("Authorization");
  if (Authorization) {
    const token = Authorization.replace("Bearer ", "");
    const extra = await fetch(
      "https://graph.facebook.com/v3.0/me?access_token=" + token
    );
    return extra.json() as Promise<{ id: string; name: string }>;
  }

  throw new AuthError();
};
export class AuthError extends Error {
  constructor() {
    super("Not authorized");
  }
}
