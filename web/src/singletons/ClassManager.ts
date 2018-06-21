import { SearchState } from "../utils/types";

const classes = [
  { name: "INF221", id: "0" },
  { name: "INF222", id: "1" },
  { name: "INF223", id: "2" },
  { name: "INF224", id: "3" },
  { name: "INF225", id: "4" },
  { name: "INF226", id: "5" },
  { name: "ECO270", id: "6" }
];

class ClassManager {
  public getClasses = (search: string, state: SearchState) => {
    if (state === SearchState.CLASS) {
      return classes;
    }
    return [];
  };
}

export default new ClassManager();
