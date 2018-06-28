import { Context, getUserData } from "../utils";
import {
  Query as QueryType,
  ListClassesQueryArgs,
  QueryResolvers,
  User
} from "../generated/types";
import Fuse from "fuse.js";
import { UfvClass } from "../generated/prisma";

export const FUSE_OPT = {
  shouldSort: true,
  includeScore: true,
  threshold: 0.6,
  location: 0,
  distance: 100,
  maxPatternLength: 32,
  minMatchCharLength: 1
};

const myvote: QueryResolvers.MyvoteResolver = async (
  _,
  { where: { reviewId } },
  ctx: Context,
  info
) => {
  try {
    const { id } = await getUserData(ctx);
    return ctx.db.query
      .reviewVoteses(
        {
          where: {
            review: {
              id: reviewId
            },
            user: {
              facebookId: id
            }
          }
        },
        info
      )
      .then(x => x[0]);
  } catch {
    return null;
  }
};

const myvotes: QueryResolvers.MyvotesResolver = async (
  _,
  __,
  ctx: Context,
  info
) => {
  try {
    const { id } = await getUserData(ctx);
    return ctx.db.query.reviewVoteses(
      {
        where: {
          user: {
            facebookId: id
          }
        }
      },
      info
    );
  } catch {
    return [];
  }
};

const reviews: QueryResolvers.ReviewsResolver = async (
  _,
  { where: { userId, first } },
  ctx: Context,
  info
) => {
  return ctx.db.query.reviews(
    { first, where: { reviewer: { id: userId } } },
    info
  );
};

const myreviews: QueryResolvers.MyreviewsResolver = async (
  _,
  __,
  ctx: Context,
  info
) => {
  const { id } = await getUserData(ctx);

  return ctx.db.query.reviews(
    { where: { reviewer: { facebookId: id } } },
    info
  );
};

const ufvClass: QueryResolvers.UfvClassResolver = async (
  _,
  { where: { id } },
  ctx: Context,
  info
) => {
  return ctx.db.query.ufvClass({ where: { id } }, info);
};
const user: QueryResolvers.UserResolver = async (
  _,
  { where: { id } },
  ctx: Context,
  info
) => {
  return ctx.db.query.user({ where: { id: id } }, info);
};
const review: QueryResolvers.ReviewResolver = async (
  _,
  { where: { id } },
  ctx: Context,
  info
) => {
  return ctx.db.query.review({ where: { id: id } }, info);
};

const me: QueryResolvers.MeResolver = async (_, __, ctx: Context, info) => {
  try {
    const { id } = await getUserData(ctx);
    return ctx.db.query.user({ where: { facebookId: id } }, info);
  } catch {
    return null;
  }
};

const searchAll: QueryResolvers.SearchAllResolver = async (
  _,
  args,
  ctx: Context,
  info
) => {
  const {
    where: { value }
  } = args;
  const usersResponse = await ctx.db.query.users(
    { where: { name_contains: value }, first: 5 },
    info
  );
  const usersFuse = new Fuse(
    usersResponse.map(x => ({ ...x, __typename: "User" })),
    {
      ...FUSE_OPT,
      keys: ["name"]
    }
  );

  const ufvClassesResponse = await ctx.db.query.ufvClasses(
    {
      where: {
        OR: [{ name_contains: value }, { cod_contains: value }]
      },
      first: 5
    },
    info
  );

  const ufvClassesFuse = new Fuse(
    ufvClassesResponse.map(x => ({ ...x, __typename: "UfvClass" })),
    {
      ...FUSE_OPT,
      keys: ["name", "cod"]
    }
  );

  const users = usersFuse.search(value) as { item: User; score: number }[];
  const classes = ufvClassesFuse.search(value) as {
    item: UfvClass;
    score: number;
  }[];

  const results = [...classes, ...users];

  const sorted = results.sort((a, b) => {
    return a.score - b.score;
  });

  const res = sorted.map(x => x.item);

  return res;
};

export const Query = {
  review,
  myvote,
  myreviews,
  myvotes,
  reviews,
  ufvClass,
  searchAll,
  me,
  user,
  listClasses(
    parent: never,
    args: ListClassesQueryArgs,
    ctx: Context,
    info: never
  ): Promise<QueryType["listClasses"]> {
    const { sort, optional, department } = args.where;
    console.log(optional);
    const where = {
      optional: optional === null ? undefined : optional,
      department: department === null ? undefined : department
    };
    const first = 15;
    if (sort === "Easy") {
      return ctx.db.query.ufvClasses(
        {
          orderBy: "easy_DESC",
          where,
          first
        },
        info
      );
    }

    if (sort === "Useful") {
      return ctx.db.query.ufvClasses(
        {
          orderBy: "useful_DESC",
          where,
          first
        },
        info
      );
    }

    if (sort === "Recommended") {
      return ctx.db.query.ufvClasses(
        {
          orderBy: "recommended_DESC",
          where,
          first
        },
        info
      );
    }

    throw Error("Não implementado");
  }
};
