import * as Fuse from "fuse.js";
import { autoSubscribe, AutoSubscribeStore, StoreBase } from "resub";
import { FUSE_OPT } from "../utils/constants";
import { IUser, UserRateEnum } from "../utils/types";

const EAL = "Engenharia de Alimentos";
const y2018 = "2018/1";
const createdAt = new Date();
const users: IUser[] = [
  {
    name: "João da Silva",
    id: "0",
    rate: UserRateEnum.iniciante,
    course: EAL,
    year: y2018,
    created_at: createdAt
  },
  {
    name: "Maria da Silva",
    id: "1",
    rate: UserRateEnum.confiavel,
    created_at: createdAt,
    course: EAL,
    year: y2018
  },
  {
    name: "José da Silva",
    id: "2",
    rate: UserRateEnum.iniciante,
    created_at: createdAt,
    course: EAL,
    year: y2018
  },
  {
    name: "Carla da Silva",
    id: "3",
    created_at: createdAt,
    rate: UserRateEnum.iniciante,
    course: EAL,
    year: y2018
  },
  {
    name: "Antônia da Silva",
    created_at: createdAt,
    id: "4",
    rate: UserRateEnum.confiavel,
    course: EAL,
    year: y2018
  },
  {
    name: "Manoel da Silva",
    id: "5",
    created_at: createdAt,
    rate: UserRateEnum.iniciante,
    course: EAL,
    year: y2018
  }
];

interface IUserResult {
  item: IUser;
  score: number;
}

@AutoSubscribeStore
class UserManager extends StoreBase {
  private fuse = new Fuse(users, {
    ...FUSE_OPT,
    keys: ["name"]
  });

  @autoSubscribe
  public getUsers(search: string) {
    if (search === "") {
      return [];
    }
    return this.fuse.search(search) as IUserResult[];
  }

  @autoSubscribe
  public getUser(userId: string) {
    const toRet = users.find(x => x.id === userId);

    if (!toRet) {
      throw Error("Usuario nao encontrado com este id");
    }
    return toRet;
  }
}

export default new UserManager();
