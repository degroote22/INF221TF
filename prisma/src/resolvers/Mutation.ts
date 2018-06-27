import { MutationResolvers, ReviewVotes } from "../generated/types";
import { Context, getUserData } from "../utils";

const register: MutationResolvers.RegisterResolver = async (
  _,
  { user: { course, year } },
  ctx: Context,
  info
) => {
  const { name, id } = await getUserData(ctx);
  return ctx.db.mutation.createUser(
    {
      data: {
        facebookId: id,
        name,
        course,
        year
      }
    },
    info
  );
};

const recountReviewScore = async (ctx: Context, reviewId: string) => {
  const info = `
    {
      type
    }
  `;
  const votes = await ctx.db.query.reviewVoteses(
    {
      where: { review: { id: reviewId } }
    },
    info
  );

  const score = votes.reduce((prev, curr) => {
    const currVal = curr.type === "Agree" ? 1 : -1;
    return prev + currVal;
  }, 0);

  await ctx.db.mutation.updateReview({
    data: { score },
    where: { id: reviewId }
  });
};

const setVote: MutationResolvers.SetVoteResolver = async (
  _,
  { data: { type, reviewId } },
  ctx: Context,
  info
) => {
  const { id } = await getUserData(ctx);

  const maybeOldVote = await ctx.db.query
    .reviewVoteses({
      where: { user: { facebookId: id }, review: { id: reviewId } }
    })
    .then(x => x[0]);
  let toRet: ReviewVotes | null = null;
  if (maybeOldVote) {
    toRet = await ctx.db.mutation.updateReviewVotes({
      data: { type },
      where: { id: maybeOldVote.id }
    });
  } else {
    toRet = await ctx.db.mutation.createReviewVotes({
      data: {
        type,
        user: { connect: { facebookId: id } },
        review: { connect: { id: reviewId } }
      }
    });
  }
  await recountReviewScore(ctx, reviewId);

  return toRet;
};
const deleteAcc: MutationResolvers.DeleteAccResolver = async (
  _,
  __,
  ctx: Context,
  info
) => {
  const { id } = await getUserData(ctx);
  return ctx.db.mutation.deleteUser({ where: { facebookId: id } }, info);
};

const createReview: MutationResolvers.CreateReviewResolver = async (
  _,
  { data: { useful, easy, description, anonymous, recommended, cod } },
  ctx: Context,
  info
) => {
  const { id } = await getUserData(ctx);

  const infox = `
    {
      reviewer {
        facebookId
      }
      useful
      easy
      recommended
    }
  `;

  const allReviews =
    (await ctx.db.query.reviews(
      { where: { classReviewed: { cod } } },
      infox
    )) || [];

  const mine = allReviews.find(x => x.reviewer.facebookId === id);
  if (mine) {
    throw Error("Usuário já tem avaliação nessa matéria");
  }

  const length = allReviews.length + 1;
  const usefulSum =
    allReviews.reduce((prev, curr) => {
      return prev + parseInt(curr.useful[1]);
    }, 0) + parseInt(useful[1]);

  const easySum =
    allReviews.reduce((prev, curr) => {
      return prev + parseInt(curr.easy[1]);
    }, 0) + parseInt(easy[1]);

  let recommendedLength = allReviews.filter(x => x.recommended).length;
  if (recommended) {
    recommendedLength++;
  }
  const newUseful = usefulSum / length;
  const newEasy = easySum / length;

  await ctx.db.mutation.updateUfvClass({
    data: { recommended: recommendedLength, useful: newUseful, easy: newEasy },
    where: { cod }
  });

  return ctx.db.mutation.createReview(
    {
      data: {
        useful,
        easy,
        description,
        anonymous,
        recommended,
        classReviewed: {
          connect: {
            cod
          }
        },
        reviewer: {
          connect: {
            facebookId: id
          }
        }
      }
    },
    info
  );
};

export const Mutation = {
  setVote,
  register,
  createReview,
  deleteAcc
};
