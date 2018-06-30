"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const utils_1 = require("../utils");
const register = (_, { user: { course, year } }, ctx, info) => __awaiter(this, void 0, void 0, function* () {
    const { name, id } = yield utils_1.getUserData(ctx);
    return ctx.db.mutation.createUser({
        data: {
            facebookId: id,
            name,
            course,
            year
        }
    }, info);
});
const recountReviewScore = (ctx, reviewId) => __awaiter(this, void 0, void 0, function* () {
    const info = `
    {
      type
    }
  `;
    const votes = yield ctx.db.query.reviewVoteses({
        where: { review: { id: reviewId } }
    }, info);
    const score = votes.reduce((prev, curr) => {
        const currVal = curr.type === "Agree" ? 1 : -1;
        return prev + currVal;
    }, 0);
    yield ctx.db.mutation.updateReview({
        data: { score },
        where: { id: reviewId }
    });
});
const setVote = (_, { data: { type, reviewId } }, ctx, info) => __awaiter(this, void 0, void 0, function* () {
    const { id } = yield utils_1.getUserData(ctx);
    const maybeOldVote = yield ctx.db.query
        .reviewVoteses({
        where: { user: { facebookId: id }, review: { id: reviewId } }
    })
        .then(x => x[0]);
    let toRet = null;
    if (maybeOldVote) {
        toRet = yield ctx.db.mutation.updateReviewVotes({
            data: { type },
            where: { id: maybeOldVote.id }
        });
    }
    else {
        toRet = yield ctx.db.mutation.createReviewVotes({
            data: {
                type,
                user: { connect: { facebookId: id } },
                review: { connect: { id: reviewId } }
            }
        });
    }
    yield recountReviewScore(ctx, reviewId);
    return toRet;
});
const deleteAcc = (_, __, ctx, info) => __awaiter(this, void 0, void 0, function* () {
    const { id } = yield utils_1.getUserData(ctx);
    return ctx.db.mutation.deleteUser({ where: { facebookId: id } }, info);
});
const editReview = (_, { data: { useful, easy, description, anonymous, recommended, id, teacher, cod } }, ctx, info) => __awaiter(this, void 0, void 0, function* () {
    const infox = `
    {
      id
      useful
      easy
      recommended
    }
  `;
    const allReviews = (yield ctx.db.query.reviews({ where: { classReviewed: { cod } } }, infox)) || [];
    const reviews = allReviews.filter(x => x.id !== id);
    const length = reviews.length + 1;
    const usefulSum = reviews.reduce((prev, curr) => {
        return prev + parseInt(curr.useful[1]);
    }, 0) + parseInt(useful[1]);
    const easySum = reviews.reduce((prev, curr) => {
        return prev + parseInt(curr.easy[1]);
    }, 0) + parseInt(easy[1]);
    let recommendedLength = reviews.filter(x => x.recommended).length;
    if (recommended) {
        recommendedLength++;
    }
    const newUseful = usefulSum / length;
    const newEasy = easySum / length;
    yield ctx.db.mutation.updateUfvClass({
        data: { recommended: recommendedLength, useful: newUseful, easy: newEasy },
        where: { cod }
    });
    return ctx.db.mutation.updateReview({
        where: { id },
        data: { useful, easy, description, anonymous, recommended, teacher }
    }, info);
});
const createReview = (_, { data: { useful, easy, description, anonymous, recommended, cod, teacher } }, ctx, info) => __awaiter(this, void 0, void 0, function* () {
    const { id } = yield utils_1.getUserData(ctx);
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
    const allReviews = (yield ctx.db.query.reviews({ where: { classReviewed: { cod } } }, infox)) || [];
    const mine = allReviews.find(x => x.reviewer.facebookId === id);
    if (mine) {
        throw Error("Usuário já tem avaliação nessa matéria");
    }
    const length = allReviews.length + 1;
    const usefulSum = allReviews.reduce((prev, curr) => {
        return prev + parseInt(curr.useful[1]);
    }, 0) + parseInt(useful[1]);
    const easySum = allReviews.reduce((prev, curr) => {
        return prev + parseInt(curr.easy[1]);
    }, 0) + parseInt(easy[1]);
    let recommendedLength = allReviews.filter(x => x.recommended).length;
    if (recommended) {
        recommendedLength++;
    }
    const newUseful = usefulSum / length;
    const newEasy = easySum / length;
    yield ctx.db.mutation.updateUfvClass({
        data: { recommended: recommendedLength, useful: newUseful, easy: newEasy },
        where: { cod }
    });
    return ctx.db.mutation.createReview({
        data: {
            teacher,
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
    }, info);
});
exports.Mutation = {
    setVote,
    register,
    createReview,
    editReview,
    deleteAcc
};
