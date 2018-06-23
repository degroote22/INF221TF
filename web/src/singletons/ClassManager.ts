import * as Fuse from "fuse.js";
import { FUSE_OPT } from "../utils/constants";
import { IClassType, RankTypes } from "../utils/types";

// const classes: IClassType[] = [
//   {
//     cod: "INF22",
//     easy: 0,
//     id: "0",
//     name: "Engenharia de Software ",
//     useful: 5,
//     recommended: 22
//   }
// ];

// function makeClasses() {
//   const classesToRet: IClassType[] = [];
//   const c = classes[0];
//   for (let i = 1 as number; i < 15; i++) {
//     classesToRet.push({
//       ...c,
//       id: String(i),
//       cod: c.cod + i,
//       name: c.name + i,
//       recommended: c.recommended + i,
//       useful: Math.random() * 5,
//       easy: Math.random() * 5
//     });
//   }
//   return classesToRet;
// }

const classes = [
  {
    cod: "INF221",
    easy: 3.0701257008024028,
    id: "1",
    name: "Engenharia de Software 1",
    useful: 3.1839775685310134,
    recommended: 23
  },
  {
    cod: "INF222",
    easy: 1.2301268469561955,
    id: "2",
    name: "Engenharia de Software 2",
    useful: 4.8697358391925905,
    recommended: 24
  },
  {
    cod: "INF223",
    easy: 1.8633255954015282,
    id: "3",
    name: "Engenharia de Software 3",
    useful: 0.11669621436917743,
    recommended: 25
  },
  {
    cod: "INF224",
    easy: 1.570701771580234,
    id: "4",
    name: "Engenharia de Software 4",
    useful: 0.17221380474661485,
    recommended: 26
  },
  {
    cod: "INF225",
    easy: 0.6753218964181817,
    id: "5",
    name: "Engenharia de Software 5",
    useful: 4.226726628965837,
    recommended: 27
  },
  {
    cod: "INF226",
    easy: 2.8674963330136762,
    id: "6",
    name: "Engenharia de Software 6",
    useful: 1.2271052219321044,
    recommended: 28
  },
  {
    cod: "INF227",
    easy: 1.0691919522012139,
    id: "7",
    name: "Engenharia de Software 7",
    useful: 1.0466956959232632,
    recommended: 29
  },
  {
    cod: "INF228",
    easy: 3.5339091088229244,
    id: "8",
    name: "Engenharia de Software 8",
    useful: 1.5939332210478085,
    recommended: 30
  },
  {
    cod: "INF229",
    easy: 0.3811768132061588,
    id: "9",
    name: "Engenharia de Software 9",
    useful: 2.3339342061039012,
    recommended: 31
  },
  {
    cod: "INF2210",
    easy: 0.047101732763823456,
    id: "10",
    name: "Engenharia de Software 10",
    useful: 3.0667621028896432,
    recommended: 32
  },
  {
    cod: "INF2211",
    easy: 4.498700852562968,
    id: "11",
    name: "Engenharia de Software 11",
    useful: 2.4574183695356533,
    recommended: 33
  },
  {
    cod: "INF2212",
    easy: 1.3179359342839148,
    id: "12",
    name: "Engenharia de Software 12",
    useful: 1.281472351974433,
    recommended: 34
  },
  {
    cod: "INF2213",
    easy: 1.7504931173406657,
    id: "13",
    name: "Engenharia de Software 13",
    useful: 3.632551894815008,
    recommended: 35
  },
  {
    cod: "INF2214",
    easy: 4.011516685023246,
    id: "14",
    name: "Engenharia de Software 14",
    useful: 0.43770758263687815,
    recommended: 36
  }
] as IClassType[];

interface IClassResult {
  item: IClassType;
  score: number;
}
const getSortFn = (rank: RankTypes) => {
  if (rank === RankTypes.easy) {
    return (a: IClassType, b: IClassType) => {
      return b.easy - a.easy;
    };
  }
  if (rank === RankTypes.recommended) {
    return (a: IClassType, b: IClassType) => {
      return b.recommended - a.recommended;
    };
  }
  if (rank === RankTypes.useful) {
    return (a: IClassType, b: IClassType) => {
      return b.useful - a.useful;
    };
  }

  throw Error("Não implementado");
};
class ClassManager {
  private classes: IClassType[] = classes;
  private fuse = new Fuse(this.classes, {
    ...FUSE_OPT,
    keys: ["name", "cod"]
  });

  public getClassesRanked = (rank: RankTypes) => {
    const sortfn = getSortFn(rank);
    return this.classes.sort(sortfn);
  };

  public getClasses = (search: string) => {
    if (search === "") {
      return [];
    }
    return this.fuse.search(search) as IClassResult[];
  };

  public getClass = (id: string) => {
    const toRet = classes.find(x => x.id === id);

    if (!toRet) {
      throw Error("get class com id inválido");
    }
    return toRet;
  };
}

export default new ClassManager();
