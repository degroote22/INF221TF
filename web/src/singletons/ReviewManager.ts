import { IClassReview, Votes } from "../utils/types";
import AuthManager from "./AuthManager";
import HistoryManager from "./HistoryManager";

// export interface IClassReview extends IClassReviewBase {
//     id: string;
//     userId: string;
//     score: number;
//   }

//   export interface IClassReviewBase {
//     classId: string;
//     useful: "0" | "1" | "2" | "3" | "4" | "5";
//     easy: "0" | "1" | "2" | "3" | "4" | "5";
//     description: string;
//     anonymous: boolean;
//     recommended: boolean;
//   }

const reviews: IClassReview[] = [
  {
    id: "1",
    userId: "1",
    score: 3,
    classId: "2",
    useful: "1",
    easy: "4",
    description:
      "The slice() method returns a shallow copy of a portion of an array into a new array object selected from begin to end (end not included). The original array will not be modified.",
    anonymous: false,
    recommended: true
  },
  {
    id: "2",
    userId: "2",
    score: 4,
    classId: "2",
    useful: "1",
    easy: "4",
    description:
      "The slice() method returns a shallow copy of a portion of an array into a new array object selected from begin to end (end not included). The original array will not be modified.",
    anonymous: false,
    recommended: true
  },
  {
    id: "3",
    userId: "3",
    score: 5,
    classId: "2",
    useful: "1",
    easy: "4",
    description: "",
    anonymous: true,
    recommended: true
  },
  {
    id: "4",
    userId: "1",
    score: 6,
    classId: "2",
    useful: "1",
    easy: "4",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    anonymous: true,
    recommended: false
  }
].map(x => ({ ...(x as IClassReview), created_at: new Date() }));

const myVotes = {
  3: Votes.agree,
  2: Votes.disagree
};

class ReviewManager {
  public getReviews = (classId: string): IClassReview[] => {
    return reviews.filter(x => x.classId === classId).sort((a, b) => {
      return b.score - a.score;
    });
  };

  public getUserReviews = (userId: string) => {
    return reviews.filter(x => x.userId === userId).sort((a, b) => {
      return b.created_at.getTime() - a.created_at.getTime();
    });
  };

  public getMyVotes = () => {
    const me = AuthManager.getId();
    if (me) {
      return Object.keys(myVotes).map(id => this.getReview(id));
    }
    return [];
  };

  public getReview = (reviewId: string) => {
    const toRet = reviews.find(x => x.id === reviewId);

    if (!toRet) {
      throw Error("review nao encontrado");
    }
    return toRet;
  };

  public getMyVote = (review: IClassReview): Votes | null => {
    const me = AuthManager.getId();
    if (me) {
      return myVotes[review.id] || null;
    }
    return null;
  };

  public downvote = (reviewId: string) => {
    const logged = AuthManager.getLogged();
    if (!logged) {
      HistoryManager.goToLogin();
    }
    return null;
  };

  public upvote = (reviewId: string) => {
    const logged = AuthManager.getLogged();
    if (!logged) {
      HistoryManager.goToLogin();
    }
    return null;
  };
}

export default new ReviewManager();
