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

export type IReviewPosition = "first" | "second" | "third" | "other" | "mine";

export enum AvaliarAction {
  create = "create",
  edit = "edit"
}
