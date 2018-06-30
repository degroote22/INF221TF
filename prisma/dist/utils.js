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
const node_fetch_1 = __importDefault(require("node-fetch"));
exports.getUserData = (ctx) => __awaiter(this, void 0, void 0, function* () {
    const Authorization = ctx.request.get("Authorization");
    if (Authorization) {
        const token = Authorization.replace("Bearer ", "");
        const extra = yield node_fetch_1.default("https://graph.facebook.com/v3.0/me?access_token=" + token);
        const data = (yield extra.json());
        if (!data.id) {
            throw Error("Usuário não logado");
        }
        return data;
    }
    throw new AuthError();
});
class AuthError extends Error {
    constructor() {
        super("Not authorized");
    }
}
exports.AuthError = AuthError;
