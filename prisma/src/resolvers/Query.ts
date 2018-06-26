import { Context } from "../utils";
import {
  Query as QueryType,
  AllClassesQueryArgs,
  ListClassesQueryArgs
} from "../generated/types";
export const Query = {
  // feed(parent: never, args: {}, ctx: Context, info: never) {
  //   return ctx.db.query.posts(
  //     { where: { isPublished: true } },
  //     info
  //   );
  // },
  allClasses(
    parent: never,
    args: AllClassesQueryArgs,
    ctx: Context,
    info: never
  ): Promise<QueryType["allClasses"]> {
    return ctx.db.query.ufvClasses(
      {
        where: {
          OR: [
            { name_contains: args.where.searchFor },
            { cod_contains: args.where.searchFor }
          ]
        }
      },
      info
    );
  },
  listClasses(
    parent: never,
    args: ListClassesQueryArgs,
    ctx: Context,
    info: never
  ): Promise<QueryType["listClasses"]> {
    const { sort, optional, department } = args.where;
    const where = {
      optional: optional === null ? undefined : optional,
      department: department === null ? undefined : department
    };
    if (sort === "Easy") {
      return ctx.db.query.ufvClasses(
        {
          orderBy: "easy_DESC",
          where
        },
        info
      );
    }

    if (sort === "Useful") {
      return ctx.db.query.ufvClasses(
        {
          orderBy: "useful_DESC",
          where
        },
        info
      );
    }

    if (sort === "Recommended") {
      return ctx.db.query.ufvClasses(
        {
          orderBy: "recommended_DESC",
          where
        },
        info
      );
    }

    throw Error("Não implementado");
  }
  //   me(
  //     parent: never,
  //     args: never,
  //     ctx: Context,
  //     info: never
  //   ): Promise<QueryType["me"]> {
  //     const id = getUserId(ctx);
  //     return ctx.db.query.user({ where: { id } }, info);
  //   }
};
