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
}

export interface IClassReview extends IClassReviewBase {
  id: string;
  classId: string;
}

export interface IClassReviewBase {
  cod: string;
  useful: "0" | "1" | "2" | "3" | "4" | "5";
  easy: "0" | "1" | "2" | "3" | "4" | "5";
  description: string;
  anonymous: boolean;
  recommended: boolean;
}

export enum RateEnum {
  iniciante,
  confiavel
}

export interface IUser {
  name: string;
  id: string;
  rate: RateEnum;
}
