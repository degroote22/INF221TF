import { SearchState } from "../utils/types";

const users = [
  { name: "João da Silva", id: "0" },
  { name: "Maria da Silva", id: "1" },
  { name: "José da Silva", id: "2" },
  { name: "Carla da Silva", id: "3" },
  { name: "Antônia da Silva", id: "4" },
  { name: "Manoel da Silva", id: "5" }
];

class UserManager {
  public getUsers = (search: string, state: SearchState) => {
    if (state === SearchState.USER) {
      return users;
    }
    return [];
  };
}

export default new UserManager();
