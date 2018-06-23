import { IClassType, IUser } from "../utils/types";
import ClassManager from "./ClassManager";
import UserManager from "./UserManager";

export enum IResultType {
  user,
  class
}
export interface IResultUser {
  type: IResultType.user;
  value: IUser;
  score: number;
}
export interface IResultClass {
  type: IResultType.class;
  value: IClassType;
  score: number;
}

export type IResult = IResultUser | IResultClass;
class SearchManager {
  public search = (search: string): IResult[] => {
    const users = UserManager.getUsers(search).map(value => ({
      type: IResultType.user,
      value: value.item,
      score: value.score
    }));
    const classes = ClassManager.getClasses(search).map(value => ({
      type: IResultType.class,
      value: value.item,
      score: value.score
    }));

    const results = [...classes, ...users] as IResult[];

    const sorted = results.sort((a, b) => {
      return a.score - b.score;
    });

    return sorted;
  };
}

export default new SearchManager();
