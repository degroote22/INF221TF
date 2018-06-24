import * as Fuse from "fuse.js";
import { FUSE_OPT } from "../utils/constants";
import { IUser, UserRateEnum } from "../utils/types";

const users: IUser[] = [
  { name: "João da Silva", id: "0", rate: UserRateEnum.iniciante },
  { name: "Maria da Silva", id: "1", rate: UserRateEnum.confiavel },
  { name: "José da Silva", id: "2", rate: UserRateEnum.iniciante },
  { name: "Carla da Silva", id: "3", rate: UserRateEnum.iniciante },
  { name: "Antônia da Silva", id: "4", rate: UserRateEnum.confiavel },
  { name: "Manoel da Silva", id: "5", rate: UserRateEnum.iniciante }
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

  public getUser = (userId: string) => {
    const toRet = users.find(x => x.id === userId);

    if (!toRet) {
      throw Error("Usuario nao encontrado com este id");
    }
    return toRet;
  };
}

export default new UserManager();
