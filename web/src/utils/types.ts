export enum SearchState {
  NONE,
  CLASS,
  USER
}

export enum RankTypes {
  useful,
  easy,
  recommended
}

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

export interface IClassReview extends IClassReviewBase {
  id: string;
  score: number;
}

export enum UserRateEnum {
  iniciante,
  confiavel
}

export interface IUser {
  name: string;
  id: string;
  rate: UserRateEnum;
}
export enum Votes {
  agree = "agree",
  disagree = "disagree"
}

// export interface IReview {
//   classId: string,
//   userId: string,

// }
