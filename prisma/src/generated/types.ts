/* tslint:disable */
import { GraphQLResolveInfo } from "graphql";

type Resolver<Result, Args = any> = (
  parent: any,
  args: Args,
  context: any,
  info: GraphQLResolveInfo
) => Promise<Result> | Result;

export type DateTime = any;
/** An object with an ID */
export interface Node {
  id: string /** The id of the object. */;
}

export interface Query {
  searchAll: SearchResult[];
  listClasses: UfvClass[];
  user?: User | null;
  ufvClass?: UfvClass | null;
  reviews: Review[];
  me?: User | null;
  myvote?: ReviewVotes | null;
  myreviews: Review[];
  myvotes: ReviewVotes[];
}

export interface UfvClass extends Node {
  id: string;
  cod: string;
  name: string;
  optional: boolean;
  department: Department;
  useful: number;
  easy: number;
  recommended: number;
  reviews?: Review[] | null;
}

export interface Review extends Node {
  id: string;
  score: number;
  useful: ReviewUseful;
  easy: ReviewEasy;
  description: string;
  anonymous: boolean;
  recommended: boolean;
  classReviewed: UfvClass;
  reviewer: User;
  votes?: ReviewVotes[] | null;
  createdAt: DateTime;
  updatedAt: DateTime;
}

export interface User extends Node {
  id: string;
  facebookId: string;
  name: string;
  course: UfvCourses;
  year: UfvYears;
  rate: UserRate;
  reviews?: Review[] | null;
  votes?: ReviewVotes[] | null;
  createdAt: DateTime;
  updatedAt: DateTime;
}

export interface ReviewVotes extends Node {
  id: string;
  review: Review;
  user: User;
  type: ReviewVotesTypes;
}

export interface Mutation {
  register: User;
  deleteAcc?: User | null;
  createReview?: Review | null;
  setVote?: ReviewVotes | null;
}

export namespace QueryResolvers {
  export interface Resolvers {
    searchAll?: SearchAllResolver;
    listClasses?: ListClassesResolver;
    user?: UserResolver;
    ufvClass?: UfvClassResolver;
    reviews?: ReviewsResolver;
    me?: MeResolver;
    myvote?: MyvoteResolver;
    myreviews?: MyreviewsResolver;
    myvotes?: MyvotesResolver;
  }

  export type SearchAllResolver = Resolver<SearchResult[], SearchAllArgs>;
  export interface SearchAllArgs {
    where: SearchInput;
  }

  export type ListClassesResolver = Resolver<UfvClass[], ListClassesArgs>;
  export interface ListClassesArgs {
    where: UfvListClassesInput;
  }

  export type UserResolver = Resolver<User | null, UserArgs>;
  export interface UserArgs {
    where: UserInput;
  }

  export type UfvClassResolver = Resolver<UfvClass | null, UfvClassArgs>;
  export interface UfvClassArgs {
    where: UfvClassInput;
  }

  export type ReviewsResolver = Resolver<Review[], ReviewsArgs>;
  export interface ReviewsArgs {
    where: ReviewsWhereInput;
  }

  export type MeResolver = Resolver<User | null>;
  export type MyvoteResolver = Resolver<ReviewVotes | null, MyvoteArgs>;
  export interface MyvoteArgs {
    where: VoteWhereInput;
  }

  export type MyreviewsResolver = Resolver<Review[]>;
  export type MyvotesResolver = Resolver<ReviewVotes[]>;
}

export namespace UfvClassResolvers {
  export interface Resolvers {
    id?: IdResolver;
    cod?: CodResolver;
    name?: NameResolver;
    optional?: OptionalResolver;
    department?: DepartmentResolver;
    useful?: UsefulResolver;
    easy?: EasyResolver;
    recommended?: RecommendedResolver;
    reviews?: ReviewsResolver;
  }

  export type IdResolver = Resolver<string>;
  export type CodResolver = Resolver<string>;
  export type NameResolver = Resolver<string>;
  export type OptionalResolver = Resolver<boolean>;
  export type DepartmentResolver = Resolver<Department>;
  export type UsefulResolver = Resolver<number>;
  export type EasyResolver = Resolver<number>;
  export type RecommendedResolver = Resolver<number>;
  export type ReviewsResolver = Resolver<Review[] | null, ReviewsArgs>;
  export interface ReviewsArgs {
    where?: ReviewWhereInput | null;
    orderBy?: ReviewOrderByInput | null;
    skip?: number | null;
    after?: string | null;
    before?: string | null;
    first?: number | null;
    last?: number | null;
  }
}

export namespace ReviewResolvers {
  export interface Resolvers {
    id?: IdResolver;
    score?: ScoreResolver;
    useful?: UsefulResolver;
    easy?: EasyResolver;
    description?: DescriptionResolver;
    anonymous?: AnonymousResolver;
    recommended?: RecommendedResolver;
    classReviewed?: ClassReviewedResolver;
    reviewer?: ReviewerResolver;
    votes?: VotesResolver;
    createdAt?: CreatedAtResolver;
    updatedAt?: UpdatedAtResolver;
  }

  export type IdResolver = Resolver<string>;
  export type ScoreResolver = Resolver<number>;
  export type UsefulResolver = Resolver<ReviewUseful>;
  export type EasyResolver = Resolver<ReviewEasy>;
  export type DescriptionResolver = Resolver<string>;
  export type AnonymousResolver = Resolver<boolean>;
  export type RecommendedResolver = Resolver<boolean>;
  export type ClassReviewedResolver = Resolver<UfvClass, ClassReviewedArgs>;
  export interface ClassReviewedArgs {
    where?: UfvClassWhereInput | null;
  }

  export type ReviewerResolver = Resolver<User, ReviewerArgs>;
  export interface ReviewerArgs {
    where?: UserWhereInput | null;
  }

  export type VotesResolver = Resolver<ReviewVotes[] | null, VotesArgs>;
  export interface VotesArgs {
    where?: ReviewVotesWhereInput | null;
    orderBy?: ReviewVotesOrderByInput | null;
    skip?: number | null;
    after?: string | null;
    before?: string | null;
    first?: number | null;
    last?: number | null;
  }

  export type CreatedAtResolver = Resolver<DateTime>;
  export type UpdatedAtResolver = Resolver<DateTime>;
}

export namespace UserResolvers {
  export interface Resolvers {
    id?: IdResolver;
    facebookId?: FacebookIdResolver;
    name?: NameResolver;
    course?: CourseResolver;
    year?: YearResolver;
    rate?: RateResolver;
    reviews?: ReviewsResolver;
    votes?: VotesResolver;
    createdAt?: CreatedAtResolver;
    updatedAt?: UpdatedAtResolver;
  }

  export type IdResolver = Resolver<string>;
  export type FacebookIdResolver = Resolver<string>;
  export type NameResolver = Resolver<string>;
  export type CourseResolver = Resolver<UfvCourses>;
  export type YearResolver = Resolver<UfvYears>;
  export type RateResolver = Resolver<UserRate>;
  export type ReviewsResolver = Resolver<Review[] | null, ReviewsArgs>;
  export interface ReviewsArgs {
    where?: ReviewWhereInput | null;
    orderBy?: ReviewOrderByInput | null;
    skip?: number | null;
    after?: string | null;
    before?: string | null;
    first?: number | null;
    last?: number | null;
  }

  export type VotesResolver = Resolver<ReviewVotes[] | null, VotesArgs>;
  export interface VotesArgs {
    where?: ReviewVotesWhereInput | null;
    orderBy?: ReviewVotesOrderByInput | null;
    skip?: number | null;
    after?: string | null;
    before?: string | null;
    first?: number | null;
    last?: number | null;
  }

  export type CreatedAtResolver = Resolver<DateTime>;
  export type UpdatedAtResolver = Resolver<DateTime>;
}

export namespace ReviewVotesResolvers {
  export interface Resolvers {
    id?: IdResolver;
    review?: ReviewResolver;
    user?: UserResolver;
    type?: TypeResolver;
  }

  export type IdResolver = Resolver<string>;
  export type ReviewResolver = Resolver<Review, ReviewArgs>;
  export interface ReviewArgs {
    where?: ReviewWhereInput | null;
  }

  export type UserResolver = Resolver<User, UserArgs>;
  export interface UserArgs {
    where?: UserWhereInput | null;
  }

  export type TypeResolver = Resolver<ReviewVotesTypes>;
}

export namespace MutationResolvers {
  export interface Resolvers {
    register?: RegisterResolver;
    deleteAcc?: DeleteAccResolver;
    createReview?: CreateReviewResolver;
    setVote?: SetVoteResolver;
  }

  export type RegisterResolver = Resolver<User, RegisterArgs>;
  export interface RegisterArgs {
    user: UserRegisterInput;
  }

  export type DeleteAccResolver = Resolver<User | null>;
  export type CreateReviewResolver = Resolver<Review | null, CreateReviewArgs>;
  export interface CreateReviewArgs {
    data: CreateReviewData;
  }

  export type SetVoteResolver = Resolver<ReviewVotes | null, SetVoteArgs>;
  export interface SetVoteArgs {
    data: SetVoteData;
  }
}

export interface SearchInput {
  value: string;
}

export interface ReviewWhereInput {
  AND?: ReviewWhereInput[] | null /** Logical AND on all given filters. */;
  OR?: ReviewWhereInput[] | null /** Logical OR on all given filters. */;
  NOT?:
    | ReviewWhereInput[]
    | null /** Logical NOT on all given filters combined by AND. */;
  id?: string | null;
  id_not?: string | null /** All values that are not equal to given value. */;
  id_in?: string[] | null /** All values that are contained in given list. */;
  id_not_in?:
    | string[]
    | null /** All values that are not contained in given list. */;
  id_lt?: string | null /** All values less than the given value. */;
  id_lte?: string | null /** All values less than or equal the given value. */;
  id_gt?: string | null /** All values greater than the given value. */;
  id_gte?:
    | string
    | null /** All values greater than or equal the given value. */;
  id_contains?: string | null /** All values containing the given string. */;
  id_not_contains?:
    | string
    | null /** All values not containing the given string. */;
  id_starts_with?:
    | string
    | null /** All values starting with the given string. */;
  id_not_starts_with?:
    | string
    | null /** All values not starting with the given string. */;
  id_ends_with?: string | null /** All values ending with the given string. */;
  id_not_ends_with?:
    | string
    | null /** All values not ending with the given string. */;
  score?: number | null;
  score_not?:
    | number
    | null /** All values that are not equal to given value. */;
  score_in?:
    | number[]
    | null /** All values that are contained in given list. */;
  score_not_in?:
    | number[]
    | null /** All values that are not contained in given list. */;
  score_lt?: number | null /** All values less than the given value. */;
  score_lte?:
    | number
    | null /** All values less than or equal the given value. */;
  score_gt?: number | null /** All values greater than the given value. */;
  score_gte?:
    | number
    | null /** All values greater than or equal the given value. */;
  useful?: ReviewUseful | null;
  useful_not?: ReviewUseful | null /** All values that are not equal to given value. */;
  useful_in?:
    | ReviewUseful[]
    | null /** All values that are contained in given list. */;
  useful_not_in?:
    | ReviewUseful[]
    | null /** All values that are not contained in given list. */;
  easy?: ReviewEasy | null;
  easy_not?: ReviewEasy | null /** All values that are not equal to given value. */;
  easy_in?:
    | ReviewEasy[]
    | null /** All values that are contained in given list. */;
  easy_not_in?:
    | ReviewEasy[]
    | null /** All values that are not contained in given list. */;
  description?: string | null;
  description_not?:
    | string
    | null /** All values that are not equal to given value. */;
  description_in?:
    | string[]
    | null /** All values that are contained in given list. */;
  description_not_in?:
    | string[]
    | null /** All values that are not contained in given list. */;
  description_lt?: string | null /** All values less than the given value. */;
  description_lte?:
    | string
    | null /** All values less than or equal the given value. */;
  description_gt?:
    | string
    | null /** All values greater than the given value. */;
  description_gte?:
    | string
    | null /** All values greater than or equal the given value. */;
  description_contains?:
    | string
    | null /** All values containing the given string. */;
  description_not_contains?:
    | string
    | null /** All values not containing the given string. */;
  description_starts_with?:
    | string
    | null /** All values starting with the given string. */;
  description_not_starts_with?:
    | string
    | null /** All values not starting with the given string. */;
  description_ends_with?:
    | string
    | null /** All values ending with the given string. */;
  description_not_ends_with?:
    | string
    | null /** All values not ending with the given string. */;
  anonymous?: boolean | null;
  anonymous_not?:
    | boolean
    | null /** All values that are not equal to given value. */;
  recommended?: boolean | null;
  recommended_not?:
    | boolean
    | null /** All values that are not equal to given value. */;
  createdAt?: DateTime | null;
  createdAt_not?: DateTime | null /** All values that are not equal to given value. */;
  createdAt_in?:
    | DateTime[]
    | null /** All values that are contained in given list. */;
  createdAt_not_in?:
    | DateTime[]
    | null /** All values that are not contained in given list. */;
  createdAt_lt?: DateTime | null /** All values less than the given value. */;
  createdAt_lte?: DateTime | null /** All values less than or equal the given value. */;
  createdAt_gt?: DateTime | null /** All values greater than the given value. */;
  createdAt_gte?: DateTime | null /** All values greater than or equal the given value. */;
  updatedAt?: DateTime | null;
  updatedAt_not?: DateTime | null /** All values that are not equal to given value. */;
  updatedAt_in?:
    | DateTime[]
    | null /** All values that are contained in given list. */;
  updatedAt_not_in?:
    | DateTime[]
    | null /** All values that are not contained in given list. */;
  updatedAt_lt?: DateTime | null /** All values less than the given value. */;
  updatedAt_lte?: DateTime | null /** All values less than or equal the given value. */;
  updatedAt_gt?: DateTime | null /** All values greater than the given value. */;
  updatedAt_gte?: DateTime | null /** All values greater than or equal the given value. */;
  classReviewed?: UfvClassWhereInput | null;
  reviewer?: UserWhereInput | null;
  votes_every?: ReviewVotesWhereInput | null;
  votes_some?: ReviewVotesWhereInput | null;
  votes_none?: ReviewVotesWhereInput | null;
}

export interface UfvClassWhereInput {
  AND?: UfvClassWhereInput[] | null /** Logical AND on all given filters. */;
  OR?: UfvClassWhereInput[] | null /** Logical OR on all given filters. */;
  NOT?:
    | UfvClassWhereInput[]
    | null /** Logical NOT on all given filters combined by AND. */;
  id?: string | null;
  id_not?: string | null /** All values that are not equal to given value. */;
  id_in?: string[] | null /** All values that are contained in given list. */;
  id_not_in?:
    | string[]
    | null /** All values that are not contained in given list. */;
  id_lt?: string | null /** All values less than the given value. */;
  id_lte?: string | null /** All values less than or equal the given value. */;
  id_gt?: string | null /** All values greater than the given value. */;
  id_gte?:
    | string
    | null /** All values greater than or equal the given value. */;
  id_contains?: string | null /** All values containing the given string. */;
  id_not_contains?:
    | string
    | null /** All values not containing the given string. */;
  id_starts_with?:
    | string
    | null /** All values starting with the given string. */;
  id_not_starts_with?:
    | string
    | null /** All values not starting with the given string. */;
  id_ends_with?: string | null /** All values ending with the given string. */;
  id_not_ends_with?:
    | string
    | null /** All values not ending with the given string. */;
  cod?: string | null;
  cod_not?: string | null /** All values that are not equal to given value. */;
  cod_in?: string[] | null /** All values that are contained in given list. */;
  cod_not_in?:
    | string[]
    | null /** All values that are not contained in given list. */;
  cod_lt?: string | null /** All values less than the given value. */;
  cod_lte?: string | null /** All values less than or equal the given value. */;
  cod_gt?: string | null /** All values greater than the given value. */;
  cod_gte?:
    | string
    | null /** All values greater than or equal the given value. */;
  cod_contains?: string | null /** All values containing the given string. */;
  cod_not_contains?:
    | string
    | null /** All values not containing the given string. */;
  cod_starts_with?:
    | string
    | null /** All values starting with the given string. */;
  cod_not_starts_with?:
    | string
    | null /** All values not starting with the given string. */;
  cod_ends_with?: string | null /** All values ending with the given string. */;
  cod_not_ends_with?:
    | string
    | null /** All values not ending with the given string. */;
  name?: string | null;
  name_not?: string | null /** All values that are not equal to given value. */;
  name_in?: string[] | null /** All values that are contained in given list. */;
  name_not_in?:
    | string[]
    | null /** All values that are not contained in given list. */;
  name_lt?: string | null /** All values less than the given value. */;
  name_lte?:
    | string
    | null /** All values less than or equal the given value. */;
  name_gt?: string | null /** All values greater than the given value. */;
  name_gte?:
    | string
    | null /** All values greater than or equal the given value. */;
  name_contains?: string | null /** All values containing the given string. */;
  name_not_contains?:
    | string
    | null /** All values not containing the given string. */;
  name_starts_with?:
    | string
    | null /** All values starting with the given string. */;
  name_not_starts_with?:
    | string
    | null /** All values not starting with the given string. */;
  name_ends_with?:
    | string
    | null /** All values ending with the given string. */;
  name_not_ends_with?:
    | string
    | null /** All values not ending with the given string. */;
  optional?: boolean | null;
  optional_not?:
    | boolean
    | null /** All values that are not equal to given value. */;
  department?: Department | null;
  department_not?: Department | null /** All values that are not equal to given value. */;
  department_in?:
    | Department[]
    | null /** All values that are contained in given list. */;
  department_not_in?:
    | Department[]
    | null /** All values that are not contained in given list. */;
  useful?: number | null;
  useful_not?:
    | number
    | null /** All values that are not equal to given value. */;
  useful_in?:
    | number[]
    | null /** All values that are contained in given list. */;
  useful_not_in?:
    | number[]
    | null /** All values that are not contained in given list. */;
  useful_lt?: number | null /** All values less than the given value. */;
  useful_lte?:
    | number
    | null /** All values less than or equal the given value. */;
  useful_gt?: number | null /** All values greater than the given value. */;
  useful_gte?:
    | number
    | null /** All values greater than or equal the given value. */;
  easy?: number | null;
  easy_not?: number | null /** All values that are not equal to given value. */;
  easy_in?: number[] | null /** All values that are contained in given list. */;
  easy_not_in?:
    | number[]
    | null /** All values that are not contained in given list. */;
  easy_lt?: number | null /** All values less than the given value. */;
  easy_lte?:
    | number
    | null /** All values less than or equal the given value. */;
  easy_gt?: number | null /** All values greater than the given value. */;
  easy_gte?:
    | number
    | null /** All values greater than or equal the given value. */;
  recommended?: number | null;
  recommended_not?:
    | number
    | null /** All values that are not equal to given value. */;
  recommended_in?:
    | number[]
    | null /** All values that are contained in given list. */;
  recommended_not_in?:
    | number[]
    | null /** All values that are not contained in given list. */;
  recommended_lt?: number | null /** All values less than the given value. */;
  recommended_lte?:
    | number
    | null /** All values less than or equal the given value. */;
  recommended_gt?:
    | number
    | null /** All values greater than the given value. */;
  recommended_gte?:
    | number
    | null /** All values greater than or equal the given value. */;
  reviews_every?: ReviewWhereInput | null;
  reviews_some?: ReviewWhereInput | null;
  reviews_none?: ReviewWhereInput | null;
}

export interface UserWhereInput {
  AND?: UserWhereInput[] | null /** Logical AND on all given filters. */;
  OR?: UserWhereInput[] | null /** Logical OR on all given filters. */;
  NOT?:
    | UserWhereInput[]
    | null /** Logical NOT on all given filters combined by AND. */;
  id?: string | null;
  id_not?: string | null /** All values that are not equal to given value. */;
  id_in?: string[] | null /** All values that are contained in given list. */;
  id_not_in?:
    | string[]
    | null /** All values that are not contained in given list. */;
  id_lt?: string | null /** All values less than the given value. */;
  id_lte?: string | null /** All values less than or equal the given value. */;
  id_gt?: string | null /** All values greater than the given value. */;
  id_gte?:
    | string
    | null /** All values greater than or equal the given value. */;
  id_contains?: string | null /** All values containing the given string. */;
  id_not_contains?:
    | string
    | null /** All values not containing the given string. */;
  id_starts_with?:
    | string
    | null /** All values starting with the given string. */;
  id_not_starts_with?:
    | string
    | null /** All values not starting with the given string. */;
  id_ends_with?: string | null /** All values ending with the given string. */;
  id_not_ends_with?:
    | string
    | null /** All values not ending with the given string. */;
  facebookId?: string | null;
  facebookId_not?:
    | string
    | null /** All values that are not equal to given value. */;
  facebookId_in?:
    | string[]
    | null /** All values that are contained in given list. */;
  facebookId_not_in?:
    | string[]
    | null /** All values that are not contained in given list. */;
  facebookId_lt?: string | null /** All values less than the given value. */;
  facebookId_lte?:
    | string
    | null /** All values less than or equal the given value. */;
  facebookId_gt?: string | null /** All values greater than the given value. */;
  facebookId_gte?:
    | string
    | null /** All values greater than or equal the given value. */;
  facebookId_contains?:
    | string
    | null /** All values containing the given string. */;
  facebookId_not_contains?:
    | string
    | null /** All values not containing the given string. */;
  facebookId_starts_with?:
    | string
    | null /** All values starting with the given string. */;
  facebookId_not_starts_with?:
    | string
    | null /** All values not starting with the given string. */;
  facebookId_ends_with?:
    | string
    | null /** All values ending with the given string. */;
  facebookId_not_ends_with?:
    | string
    | null /** All values not ending with the given string. */;
  name?: string | null;
  name_not?: string | null /** All values that are not equal to given value. */;
  name_in?: string[] | null /** All values that are contained in given list. */;
  name_not_in?:
    | string[]
    | null /** All values that are not contained in given list. */;
  name_lt?: string | null /** All values less than the given value. */;
  name_lte?:
    | string
    | null /** All values less than or equal the given value. */;
  name_gt?: string | null /** All values greater than the given value. */;
  name_gte?:
    | string
    | null /** All values greater than or equal the given value. */;
  name_contains?: string | null /** All values containing the given string. */;
  name_not_contains?:
    | string
    | null /** All values not containing the given string. */;
  name_starts_with?:
    | string
    | null /** All values starting with the given string. */;
  name_not_starts_with?:
    | string
    | null /** All values not starting with the given string. */;
  name_ends_with?:
    | string
    | null /** All values ending with the given string. */;
  name_not_ends_with?:
    | string
    | null /** All values not ending with the given string. */;
  course?: UfvCourses | null;
  course_not?: UfvCourses | null /** All values that are not equal to given value. */;
  course_in?:
    | UfvCourses[]
    | null /** All values that are contained in given list. */;
  course_not_in?:
    | UfvCourses[]
    | null /** All values that are not contained in given list. */;
  year?: UfvYears | null;
  year_not?: UfvYears | null /** All values that are not equal to given value. */;
  year_in?:
    | UfvYears[]
    | null /** All values that are contained in given list. */;
  year_not_in?:
    | UfvYears[]
    | null /** All values that are not contained in given list. */;
  rate?: UserRate | null;
  rate_not?: UserRate | null /** All values that are not equal to given value. */;
  rate_in?:
    | UserRate[]
    | null /** All values that are contained in given list. */;
  rate_not_in?:
    | UserRate[]
    | null /** All values that are not contained in given list. */;
  createdAt?: DateTime | null;
  createdAt_not?: DateTime | null /** All values that are not equal to given value. */;
  createdAt_in?:
    | DateTime[]
    | null /** All values that are contained in given list. */;
  createdAt_not_in?:
    | DateTime[]
    | null /** All values that are not contained in given list. */;
  createdAt_lt?: DateTime | null /** All values less than the given value. */;
  createdAt_lte?: DateTime | null /** All values less than or equal the given value. */;
  createdAt_gt?: DateTime | null /** All values greater than the given value. */;
  createdAt_gte?: DateTime | null /** All values greater than or equal the given value. */;
  updatedAt?: DateTime | null;
  updatedAt_not?: DateTime | null /** All values that are not equal to given value. */;
  updatedAt_in?:
    | DateTime[]
    | null /** All values that are contained in given list. */;
  updatedAt_not_in?:
    | DateTime[]
    | null /** All values that are not contained in given list. */;
  updatedAt_lt?: DateTime | null /** All values less than the given value. */;
  updatedAt_lte?: DateTime | null /** All values less than or equal the given value. */;
  updatedAt_gt?: DateTime | null /** All values greater than the given value. */;
  updatedAt_gte?: DateTime | null /** All values greater than or equal the given value. */;
  reviews_every?: ReviewWhereInput | null;
  reviews_some?: ReviewWhereInput | null;
  reviews_none?: ReviewWhereInput | null;
  votes_every?: ReviewVotesWhereInput | null;
  votes_some?: ReviewVotesWhereInput | null;
  votes_none?: ReviewVotesWhereInput | null;
}

export interface ReviewVotesWhereInput {
  AND?: ReviewVotesWhereInput[] | null /** Logical AND on all given filters. */;
  OR?: ReviewVotesWhereInput[] | null /** Logical OR on all given filters. */;
  NOT?:
    | ReviewVotesWhereInput[]
    | null /** Logical NOT on all given filters combined by AND. */;
  id?: string | null;
  id_not?: string | null /** All values that are not equal to given value. */;
  id_in?: string[] | null /** All values that are contained in given list. */;
  id_not_in?:
    | string[]
    | null /** All values that are not contained in given list. */;
  id_lt?: string | null /** All values less than the given value. */;
  id_lte?: string | null /** All values less than or equal the given value. */;
  id_gt?: string | null /** All values greater than the given value. */;
  id_gte?:
    | string
    | null /** All values greater than or equal the given value. */;
  id_contains?: string | null /** All values containing the given string. */;
  id_not_contains?:
    | string
    | null /** All values not containing the given string. */;
  id_starts_with?:
    | string
    | null /** All values starting with the given string. */;
  id_not_starts_with?:
    | string
    | null /** All values not starting with the given string. */;
  id_ends_with?: string | null /** All values ending with the given string. */;
  id_not_ends_with?:
    | string
    | null /** All values not ending with the given string. */;
  type?: ReviewVotesTypes | null;
  type_not?: ReviewVotesTypes | null /** All values that are not equal to given value. */;
  type_in?:
    | ReviewVotesTypes[]
    | null /** All values that are contained in given list. */;
  type_not_in?:
    | ReviewVotesTypes[]
    | null /** All values that are not contained in given list. */;
  review?: ReviewWhereInput | null;
  user?: UserWhereInput | null;
}

export interface UfvListClassesInput {
  sort: ClassesRanks;
  department?: Department | null;
  optional?: boolean | null;
}

export interface UserInput {
  id: string;
}

export interface UfvClassInput {
  id: string;
}

export interface ReviewsWhereInput {
  userId: string;
  first: number;
}

export interface VoteWhereInput {
  reviewId: string;
}

export interface UserRegisterInput {
  course: UfvCourses;
  year: UfvYears;
}

export interface CreateReviewData {
  cod: string;
  useful: ReviewUseful;
  easy: ReviewEasy;
  description: string;
  anonymous: boolean;
  recommended: boolean;
}

export interface SetVoteData {
  reviewId: string;
  type: ReviewVotesTypes;
}
export interface SearchAllQueryArgs {
  where: SearchInput;
}
export interface ListClassesQueryArgs {
  where: UfvListClassesInput;
}
export interface UserQueryArgs {
  where: UserInput;
}
export interface UfvClassQueryArgs {
  where: UfvClassInput;
}
export interface ReviewsQueryArgs {
  where: ReviewsWhereInput;
}
export interface MyvoteQueryArgs {
  where: VoteWhereInput;
}
export interface ReviewsUfvClassArgs {
  where?: ReviewWhereInput | null;
  orderBy?: ReviewOrderByInput | null;
  skip?: number | null;
  after?: string | null;
  before?: string | null;
  first?: number | null;
  last?: number | null;
}
export interface ClassReviewedReviewArgs {
  where?: UfvClassWhereInput | null;
}
export interface ReviewerReviewArgs {
  where?: UserWhereInput | null;
}
export interface VotesReviewArgs {
  where?: ReviewVotesWhereInput | null;
  orderBy?: ReviewVotesOrderByInput | null;
  skip?: number | null;
  after?: string | null;
  before?: string | null;
  first?: number | null;
  last?: number | null;
}
export interface ReviewsUserArgs {
  where?: ReviewWhereInput | null;
  orderBy?: ReviewOrderByInput | null;
  skip?: number | null;
  after?: string | null;
  before?: string | null;
  first?: number | null;
  last?: number | null;
}
export interface VotesUserArgs {
  where?: ReviewVotesWhereInput | null;
  orderBy?: ReviewVotesOrderByInput | null;
  skip?: number | null;
  after?: string | null;
  before?: string | null;
  first?: number | null;
  last?: number | null;
}
export interface ReviewReviewVotesArgs {
  where?: ReviewWhereInput | null;
}
export interface UserReviewVotesArgs {
  where?: UserWhereInput | null;
}
export interface RegisterMutationArgs {
  user: UserRegisterInput;
}
export interface CreateReviewMutationArgs {
  data: CreateReviewData;
}
export interface SetVoteMutationArgs {
  data: SetVoteData;
}

export type Department =
  | "Depto__de_Economia_Rural"
  | "Depto__de_Engenharia_Agricola"
  | "Depto__de_Engenharia_Florestal"
  | "Depto__de_Fitopatologia"
  | "Depto__de_Fitotecnia"
  | "Depto__de_Solos"
  | "Depto__de_Zootecnia"
  | "Depto__de_Biologia_Animal"
  | "Depto__de_Biologia_Geral"
  | "Depto__de_Biologia_Vegetal"
  | "Depto__de_Bioquimica_e_Biologia_Molecular"
  | "Depto__de_Educacao_Fisica"
  | "Depto__de_Entomologia"
  | "Depto__de_Microbiologia"
  | "Depto__de_Medicina_e_Enfermagem"
  | "Depto__de_Nutricaoo_e_Saude"
  | "Depto__de_Veterinaria"
  | "Depto__de_Arquitetura_e_Urbanismo"
  | "Depto__de_Engenharia_Civil"
  | "Depto__de_Engenharia_Eletrica"
  | "Depto__de_Engenharia_de_Producao_e_Mecanica"
  | "Depto__de_Estatistica"
  | "Depto__de_Fisica"
  | "Depto__de_Informatica"
  | "Depto__de_Matematica"
  | "Depto__de_Quimica"
  | "Depto__de_Tecnologia_de_Alimentos"
  | "Depto__de_Administracao_e_Contabilidade"
  | "Depto__de_Artes_e_Humanidades"
  | "Depto__de_Ciencias_Sociais"
  | "Depto__de_Comunicacao_Social"
  | "Depto__de_Direito"
  | "Depto__de_Economia"
  | "Depto__de_Economia_Domestica"
  | "Depto__de_Educacao"
  | "Depto__de_Geografia"
  | "Depto__de_Historia"
  | "Depto__de_Letras";

export type ReviewUseful = "U0" | "U1" | "U2" | "U3" | "U4" | "U5";

export type ReviewEasy = "E0" | "E1" | "E2" | "E3" | "E4" | "E5";

export type UfvCourses =
  | "Agronegocio"
  | "Agronomia"
  | "Cooperativismo"
  | "Engenharia_Agricola_e_Ambiental"
  | "Engenharia_Florestal"
  | "Zootecnia"
  | "Bioquimica"
  | "Ciencias_Biologicas__Bacharelado_Licenciatura_"
  | "Educacao_Fisica__Bacharelado_Licenciatura_"
  | "Enfermagem"
  | "Licenciatura_em_Ciencias_Biologicas__Noturno_"
  | "Medicina"
  | "Medicina_Veterinaria"
  | "Nutricao"
  | "Arquitetura_e_Urbanismo"
  | "Ciencia_da_Computacaoo"
  | "Ciencia_e_Tecnologia_de_Laticinios"
  | "Engenharia_Ambiental"
  | "Engenharia_Civil"
  | "Engenharia_de_Agrimensura_e_Cartografica"
  | "Engenharia_de_Alimentos"
  | "Engenharia_de_Producao"
  | "Engenharia_Eletrica"
  | "Engenharia_Mecanica"
  | "Engenharia_Quimica"
  | "Fisica__Bacharelado_Licenciatura_"
  | "Licenciatura_em_Fisica"
  | "Licenciatura_em_Matematica"
  | "Licenciatura_em_Quimica"
  | "Matematica__Bacharelado_Licenciatura_"
  | "Quimica__Bacharelado_Licenciatura_"
  | "Administracao"
  | "Ciencias_Contabeis"
  | "Ciencias_Economicas"
  | "Ciencias_Sociais__Bacharelado_Licenciatura_"
  | "Comunicacao_Social___Jornalismo"
  | "Danca__Bacharelado_Licenciatura_"
  | "Direito"
  | "Economia_Domestica"
  | "Educacao_do_Campo"
  | "Educacao_Infantil"
  | "Geografia__Bacharelado_Licenciatura_"
  | "Historia__Bacharelado_Licenciatura_"
  | "Letras"
  | "Pedagogia"
  | "Secretariado_Executivo_Trilingue___Portugues__Frances_e_Ingles"
  | "Servico_Social";

export type UfvYears =
  | "Y19201"
  | "Y19211"
  | "Y19221"
  | "Y19231"
  | "Y19241"
  | "Y19251"
  | "Y19261"
  | "Y19271"
  | "Y19281"
  | "Y19291"
  | "Y19301"
  | "Y19311"
  | "Y19321"
  | "Y19331"
  | "Y19341"
  | "Y19351"
  | "Y19361"
  | "Y19371"
  | "Y19381"
  | "Y19391"
  | "Y19401"
  | "Y19411"
  | "Y19421"
  | "Y19431"
  | "Y19441"
  | "Y19451"
  | "Y19461"
  | "Y19471"
  | "Y19481"
  | "Y19491"
  | "Y19501"
  | "Y19511"
  | "Y19521"
  | "Y19531"
  | "Y19541"
  | "Y19551"
  | "Y19561"
  | "Y19571"
  | "Y19581"
  | "Y19591"
  | "Y19601"
  | "Y19611"
  | "Y19621"
  | "Y19631"
  | "Y19641"
  | "Y19651"
  | "Y19661"
  | "Y19671"
  | "Y19681"
  | "Y19691"
  | "Y19701"
  | "Y19711"
  | "Y19721"
  | "Y19731"
  | "Y19741"
  | "Y19751"
  | "Y19761"
  | "Y19771"
  | "Y19781"
  | "Y19791"
  | "Y19801"
  | "Y19811"
  | "Y19821"
  | "Y19831"
  | "Y19841"
  | "Y19851"
  | "Y19861"
  | "Y19871"
  | "Y19881"
  | "Y19891"
  | "Y19901"
  | "Y19911"
  | "Y19921"
  | "Y19931"
  | "Y19941"
  | "Y19951"
  | "Y19961"
  | "Y19971"
  | "Y19981"
  | "Y19991"
  | "Y20001"
  | "Y20011"
  | "Y20021"
  | "Y20031"
  | "Y20041"
  | "Y20051"
  | "Y20061"
  | "Y20071"
  | "Y20081"
  | "Y20091"
  | "Y20101"
  | "Y20111"
  | "Y20121"
  | "Y20131"
  | "Y20141"
  | "Y20151"
  | "Y20161"
  | "Y20171"
  | "Y20181";

export type UserRate = "Iniciante" | "Confiavel";

export type ReviewVotesTypes = "Agree" | "Disagree";

export type ReviewOrderByInput =
  | "id_ASC"
  | "id_DESC"
  | "score_ASC"
  | "score_DESC"
  | "useful_ASC"
  | "useful_DESC"
  | "easy_ASC"
  | "easy_DESC"
  | "description_ASC"
  | "description_DESC"
  | "anonymous_ASC"
  | "anonymous_DESC"
  | "recommended_ASC"
  | "recommended_DESC"
  | "createdAt_ASC"
  | "createdAt_DESC"
  | "updatedAt_ASC"
  | "updatedAt_DESC";

export type ReviewVotesOrderByInput =
  | "id_ASC"
  | "id_DESC"
  | "type_ASC"
  | "type_DESC"
  | "updatedAt_ASC"
  | "updatedAt_DESC"
  | "createdAt_ASC"
  | "createdAt_DESC";

export type ClassesRanks = "Useful" | "Easy" | "Recommended";

export type SearchResult = UfvClass | User;
