export enum SearchState {
  NONE,
  CLASS,
  USER
}

export interface IAuthResponse {
  accessToken: string;
  expiresIn: number;
  signedRequest: string;
  userID: string;
}
export interface IKindResponse {
  status: "connected" | "not_authorized" | "unknown";
  authResponse: IAuthResponse;
}

// daqui pra baixo deleta

export interface IClassType extends IClassBase {
  id: string;
}

export interface IClassBase {
  cod: string;
  name: string;
  useful: number;
  easy: number;
  recommended: number;
  optional: boolean;
}

export interface IClassReview extends IClassReviewBase {
  id: string;
  userId: string;
  score: number;
  created_at: Date;
}

export interface IClassReviewBase {
  classId: string;
  useful: "0" | "1" | "2" | "3" | "4" | "5";
  easy: "0" | "1" | "2" | "3" | "4" | "5";
  description: string;
  anonymous: boolean;
  recommended: boolean;
}

export interface IClassResult {
  item: IClassType;
  score: number;
}

export enum UserRateEnum {
  iniciante,
  confiavel
}

export interface IUser {
  id: string;
  name: string;
  rate: UserRateEnum;
  course: string;
  year: string;
  created_at: Date;
}
export enum Votes {
  agree = "agree",
  disagree = "disagree"
}
