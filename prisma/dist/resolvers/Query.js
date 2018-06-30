"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const utils_1 = require("../utils");
const fuse_js_1 = __importDefault(require("fuse.js"));
exports.FUSE_OPT = {
    shouldSort: true,
    includeScore: true,
    threshold: 0.6,
    location: 0,
    distance: 100,
    maxPatternLength: 32,
    minMatchCharLength: 1
};
const myvote = (_, { where: { reviewId } }, ctx, info) => __awaiter(this, void 0, void 0, function* () {
    try {
        const { id } = yield utils_1.getUserData(ctx);
        const response = yield ctx.db.query.reviewVoteses({
            where: {
                review: {
                    id: reviewId
                },
                user: {
                    facebookId: id
                }
            }
        }, info);
        return response[0];
    }
    catch (_a) {
        return null;
    }
});
const myvotes = (_, __, ctx, info) => __awaiter(this, void 0, void 0, function* () {
    try {
        const { id } = yield utils_1.getUserData(ctx);
        return ctx.db.query.reviewVoteses({
            where: {
                user: {
                    facebookId: id
                }
            }
        }, info);
    }
    catch (_b) {
        return [];
    }
});
const reviews = (_, { where: { userId, first } }, ctx, info) => __awaiter(this, void 0, void 0, function* () {
    return ctx.db.query.reviews({ first, where: { reviewer: { id: userId } } }, info);
});
const myreviews = (_, __, ctx, info) => __awaiter(this, void 0, void 0, function* () {
    const { id } = yield utils_1.getUserData(ctx);
    return ctx.db.query.reviews({ where: { reviewer: { facebookId: id } } }, info);
});
const ufvClass = (_, { where: { id, cod } }, ctx, info) => __awaiter(this, void 0, void 0, function* () {
    return ctx.db.query.ufvClass({ where: { id: id || undefined, cod: cod || undefined } }, info);
});
const user = (_, { where: { id } }, ctx, info) => __awaiter(this, void 0, void 0, function* () {
    return ctx.db.query.user({ where: { id: id } }, info);
});
const review = (_, { where: { id } }, ctx, info) => __awaiter(this, void 0, void 0, function* () {
    return ctx.db.query.review({ where: { id: id } }, info);
});
const me = (_, __, ctx, info) => __awaiter(this, void 0, void 0, function* () {
    try {
        const { id } = yield utils_1.getUserData(ctx);
        return ctx.db.query.user({ where: { facebookId: id } }, info);
    }
    catch (_c) {
        return null;
    }
});
const searchAll = (_, args, ctx, info) => __awaiter(this, void 0, void 0, function* () {
    const { where: { value } } = args;
    const usersResponse = yield ctx.db.query.users({ where: { name_contains: value }, first: 5 }, info);
    const usersFuse = new fuse_js_1.default(usersResponse.map(x => (Object.assign({}, x, { __typename: "User" }))), Object.assign({}, exports.FUSE_OPT, { keys: ["name"] }));
    const ufvClassesResponse = yield ctx.db.query.ufvClasses({
        where: {
            OR: [{ name_contains: value }, { cod_contains: value }]
        },
        first: 5
    }, info);
    const ufvClassesFuse = new fuse_js_1.default(ufvClassesResponse.map(x => (Object.assign({}, x, { __typename: "UfvClass" }))), Object.assign({}, exports.FUSE_OPT, { keys: ["name", "cod"] }));
    const users = usersFuse.search(value);
    const classes = ufvClassesFuse.search(value);
    const results = [...classes, ...users];
    const sorted = results.sort((a, b) => {
        return a.score - b.score;
    });
    const res = sorted.map(x => x.item);
    return res;
});
exports.Query = {
    review,
    myvote,
    myreviews,
    myvotes,
    reviews,
    ufvClass,
    searchAll,
    me,
    user,
    listClasses(parent, args, ctx, info) {
        const { sort, optional, department } = args.where;
        const where = {
            optional: optional === null ? undefined : optional,
            department: department === null ? undefined : department
        };
        const first = 15;
        if (sort === "Easy") {
            return ctx.db.query.ufvClasses({
                orderBy: "easy_DESC",
                where,
                first
            }, info);
        }
        if (sort === "Useful") {
            return ctx.db.query.ufvClasses({
                orderBy: "useful_DESC",
                where,
                first
            }, info);
        }
        if (sort === "Recommended") {
            return ctx.db.query.ufvClasses({
                orderBy: "recommended_DESC",
                where,
                first
            }, info);
        }
        throw Error("Não implementado");
    }
};
