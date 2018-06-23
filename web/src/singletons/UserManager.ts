import * as Fuse from "fuse.js";
import { FUSE_OPT } from "../utils/constants";
import { IUser, RateEnum } from "../utils/types";

const users: IUser[] = [
  { name: "João da Silva", id: "0", rate: RateEnum.iniciante },
  { name: "Maria da Silva", id: "1", rate: RateEnum.confiavel },
  { name: "José da Silva", id: "2", rate: RateEnum.iniciante },
  { name: "Carla da Silva", id: "3", rate: RateEnum.iniciante },
  { name: "Antônia da Silva", id: "4", rate: RateEnum.confiavel },
  { name: "Manoel da Silva", id: "5", rate: RateEnum.iniciante }
];

interface IUserResult {
  item: IUser;
  score: number;
}

class UserManager {
  private fuse = new Fuse(users, {
    ...FUSE_OPT,
    keys: ["name"]
  });
  public getUsers = (search: string) => {
    if (search === "") {
      return [];
    }
    return this.fuse.search(search) as IUserResult[];
  };
}

export default new UserManager();
