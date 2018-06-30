/* tslint:disable */
import {
  graphql,
  DataProps,
  DataValue,
  MutateProps,
  ChildMutateProps,
  ChildDataProps,
  OperationVariables,
  ChildProps,
  MutationOpts,
  MutationFunc,
  OperationOption,
  QueryOpts
} from "react-apollo";
import { DocumentNode } from "graphql";
export interface QueryOptionProps<
  TProps = any,
  TData = any,
  TGraphQLVariables = OperationVariables
> extends DataProps<TData, TGraphQLVariables> {
  ownProps: TProps;
}
export interface MutationOptionProps<
  TProps = any,
  TData = any,
  TGraphQLVariables = OperationVariables
> extends MutateProps<TData, TGraphQLVariables> {
  ownProps: TProps;
}
export interface MutationOperationOption<
  TProps,
  TData,
  TGraphQLVariables = OperationVariables,
  TChildProps = ChildProps<TProps, TData, TGraphQLVariables>
> {
  options?:
    | MutationOpts<TData, TGraphQLVariables>
    | ((props: TProps) => MutationOpts<TData, TGraphQLVariables>);
  props?: (
    props: MutationOptionProps<TProps, TData, TGraphQLVariables>,
    lastProps?: TChildProps | void
  ) => TChildProps;
  skip?: boolean | ((props: any) => boolean);
  name?: string;
  withRef?: boolean;
  shouldResubscribe?: (props: TProps, nextProps: TProps) => boolean;
  alias?: string;
}
export interface QueryOperationOption<
  TProps,
  TData,
  TGraphQLVariables = OperationVariables,
  TChildProps = ChildProps<TProps, TData, TGraphQLVariables>
> {
  options?:
    | QueryOpts<TGraphQLVariables>
    | ((props: TProps) => QueryOpts<TGraphQLVariables>);
  props?: (
    props: QueryOptionProps<TProps, TData, TGraphQLVariables>,
    lastProps?: TChildProps | void
  ) => TChildProps;
  skip?: boolean | ((props: any) => boolean);
  name?: string;
  withRef?: boolean;
  shouldResubscribe?: (props: TProps, nextProps: TProps) => boolean;
  alias?: string;
}
import { GraphQLResolveInfo } from "graphql";

type Resolver<Result, Args = any> = (
  parent: any,
  args: Args,
  context: any,
  info: GraphQLResolveInfo
) => Promise<Result> | Result;

export type withLogoffMutationFunc = MutationFunc<
  Logoff.Mutation,
  Logoff.Variables
>;
export type withLogoffChildProps<TProps = {}> = ChildMutateProps<
  TProps,
  Logoff.Mutation,
  Logoff.Variables
>;
export function withLogoff<
  TProps extends Logoff.Variables | {} = {},
  TChildProps = MutateProps<Logoff.Mutation, Logoff.Variables>
>(
  document: DocumentNode,
  operationOptions?: MutationOperationOption<
    TProps,
    Logoff.Mutation,
    Logoff.Variables,
    TChildProps
  >
): ((
  WrappedComponent: React.ComponentType<TChildProps & TProps>
) => React.ComponentClass<TProps>) {
  return graphql<TProps, Logoff.Mutation, Logoff.Variables, TChildProps>(
    document,
    operationOptions as OperationOption<
      TProps,
      Logoff.Mutation,
      Logoff.Variables,
      TChildProps
    >
  );
}

export type withLoginMutationFunc = MutationFunc<
  Login.Mutation,
  Login.Variables
>;
export type withLoginChildProps<TProps = {}> = ChildMutateProps<
  TProps,
  Login.Mutation,
  Login.Variables
>;
export function withLogin<
  TProps extends Login.Variables | {} = {},
  TChildProps = MutateProps<Login.Mutation, Login.Variables>
>(
  document: DocumentNode,
  operationOptions?: MutationOperationOption<
    TProps,
    Login.Mutation,
    Login.Variables,
    TChildProps
  >
): ((
  WrappedComponent: React.ComponentType<TChildProps & TProps>
) => React.ComponentClass<TProps>) {
  return graphql<TProps, Login.Mutation, Login.Variables, TChildProps>(
    document,
    operationOptions as OperationOption<
      TProps,
      Login.Mutation,
      Login.Variables,
      TChildProps
    >
  );
}

export type withRegisterMutationFunc = MutationFunc<
  Register.Mutation,
  Register.Variables
>;
export type withRegisterChildProps<TProps = {}> = ChildMutateProps<
  TProps,
  Register.Mutation,
  Register.Variables
>;
export function withRegister<
  TProps extends Register.Variables | {} = {},
  TChildProps = MutateProps<Register.Mutation, Register.Variables>
>(
  document: DocumentNode,
  operationOptions?: MutationOperationOption<
    TProps,
    Register.Mutation,
    Register.Variables,
    TChildProps
  >
): ((
  WrappedComponent: React.ComponentType<TChildProps & TProps>
) => React.ComponentClass<TProps>) {
  return graphql<TProps, Register.Mutation, Register.Variables, TChildProps>(
    document,
    operationOptions as OperationOption<
      TProps,
      Register.Mutation,
      Register.Variables,
      TChildProps
    >
  );
}

export type withDeleteAccountMutationFunc = MutationFunc<
  DeleteAccount.Mutation,
  DeleteAccount.Variables
>;
export type withDeleteAccountChildProps<TProps = {}> = ChildMutateProps<
  TProps,
  DeleteAccount.Mutation,
  DeleteAccount.Variables
>;
export function withDeleteAccount<
  TProps extends DeleteAccount.Variables | {} = {},
  TChildProps = MutateProps<DeleteAccount.Mutation, DeleteAccount.Variables>
>(
  document: DocumentNode,
  operationOptions?: MutationOperationOption<
    TProps,
    DeleteAccount.Mutation,
    DeleteAccount.Variables,
    TChildProps
  >
): ((
  WrappedComponent: React.ComponentType<TChildProps & TProps>
) => React.ComponentClass<TProps>) {
  return graphql<
    TProps,
    DeleteAccount.Mutation,
    DeleteAccount.Variables,
    TChildProps
  >(document, operationOptions as OperationOption<
    TProps,
    DeleteAccount.Mutation,
    DeleteAccount.Variables,
    TChildProps
  >);
}

export type withUpdateReviewMutationFunc = MutationFunc<
  UpdateReview.Mutation,
  UpdateReview.Variables
>;
export type withUpdateReviewChildProps<TProps = {}> = ChildMutateProps<
  TProps,
  UpdateReview.Mutation,
  UpdateReview.Variables
>;
export function withUpdateReview<
  TProps extends UpdateReview.Variables | {} = {},
  TChildProps = MutateProps<UpdateReview.Mutation, UpdateReview.Variables>
>(
  document: DocumentNode,
  operationOptions?: MutationOperationOption<
    TProps,
    UpdateReview.Mutation,
    UpdateReview.Variables,
    TChildProps
  >
): ((
  WrappedComponent: React.ComponentType<TChildProps & TProps>
) => React.ComponentClass<TProps>) {
  return graphql<
    TProps,
    UpdateReview.Mutation,
    UpdateReview.Variables,
    TChildProps
  >(document, operationOptions as OperationOption<
    TProps,
    UpdateReview.Mutation,
    UpdateReview.Variables,
    TChildProps
  >);
}

export type withWriteReviewMutationFunc = MutationFunc<
  WriteReview.Mutation,
  WriteReview.Variables
>;
export type withWriteReviewChildProps<TProps = {}> = ChildMutateProps<
  TProps,
  WriteReview.Mutation,
  WriteReview.Variables
>;
export function withWriteReview<
  TProps extends WriteReview.Variables | {} = {},
  TChildProps = MutateProps<WriteReview.Mutation, WriteReview.Variables>
>(
  document: DocumentNode,
  operationOptions?: MutationOperationOption<
    TProps,
    WriteReview.Mutation,
    WriteReview.Variables,
    TChildProps
  >
): ((
  WrappedComponent: React.ComponentType<TChildProps & TProps>
) => React.ComponentClass<TProps>) {
  return graphql<
    TProps,
    WriteReview.Mutation,
    WriteReview.Variables,
    TChildProps
  >(document, operationOptions as OperationOption<
    TProps,
    WriteReview.Mutation,
    WriteReview.Variables,
    TChildProps
  >);
}

export type withSetVoteOnReviewMutationFunc = MutationFunc<
  SetVoteOnReview.Mutation,
  SetVoteOnReview.Variables
>;
export type withSetVoteOnReviewChildProps<TProps = {}> = ChildMutateProps<
  TProps,
  SetVoteOnReview.Mutation,
  SetVoteOnReview.Variables
>;
export function withSetVoteOnReview<
  TProps extends SetVoteOnReview.Variables | {} = {},
  TChildProps = MutateProps<SetVoteOnReview.Mutation, SetVoteOnReview.Variables>
>(
  document: DocumentNode,
  operationOptions?: MutationOperationOption<
    TProps,
    SetVoteOnReview.Mutation,
    SetVoteOnReview.Variables,
    TChildProps
  >
): ((
  WrappedComponent: React.ComponentType<TChildProps & TProps>
) => React.ComponentClass<TProps>) {
  return graphql<
    TProps,
    SetVoteOnReview.Mutation,
    SetVoteOnReview.Variables,
    TChildProps
  >(document, operationOptions as OperationOption<
    TProps,
    SetVoteOnReview.Mutation,
    SetVoteOnReview.Variables,
    TChildProps
  >);
}

export type withLocalLoggedDataValue = DataValue<
  LocalLogged.Query,
  LocalLogged.Variables
>;
export type withLocalLoggedChildProps<TProps = {}> = ChildDataProps<
  TProps,
  LocalLogged.Query,
  LocalLogged.Variables
>;

export function withLocalLogged<
  TProps extends LocalLogged.Variables | {} = {},
  TChildProps = DataProps<LocalLogged.Query, LocalLogged.Variables>
>(
  document: DocumentNode,
  operationOptions?: QueryOperationOption<
    TProps,
    LocalLogged.Query,
    LocalLogged.Variables,
    TChildProps
  >
): ((
  WrappedComponent: React.ComponentType<TChildProps & TProps>
) => React.ComponentClass<TProps>) {
  return graphql<TProps, LocalLogged.Query, LocalLogged.Variables, TChildProps>(
    document,
    operationOptions as OperationOption<
      TProps,
      LocalLogged.Query,
      LocalLogged.Variables,
      TChildProps
    >
  );
}

export type withIsRegisteredDataValue = DataValue<
  IsRegistered.Query,
  IsRegistered.Variables
>;
export type withIsRegisteredChildProps<TProps = {}> = ChildDataProps<
  TProps,
  IsRegistered.Query,
  IsRegistered.Variables
>;

export function withIsRegistered<
  TProps extends IsRegistered.Variables | {} = {},
  TChildProps = DataProps<IsRegistered.Query, IsRegistered.Variables>
>(
  document: DocumentNode,
  operationOptions?: QueryOperationOption<
    TProps,
    IsRegistered.Query,
    IsRegistered.Variables,
    TChildProps
  >
): ((
  WrappedComponent: React.ComponentType<TChildProps & TProps>
) => React.ComponentClass<TProps>) {
  return graphql<
    TProps,
    IsRegistered.Query,
    IsRegistered.Variables,
    TChildProps
  >(document, operationOptions as OperationOption<
    TProps,
    IsRegistered.Query,
    IsRegistered.Variables,
    TChildProps
  >);
}

export type withListByKindDataValue = DataValue<
  ListByKind.Query,
  ListByKind.Variables
>;
export type withListByKindChildProps<TProps = {}> = ChildDataProps<
  TProps,
  ListByKind.Query,
  ListByKind.Variables
>;

export function withListByKind<
  TProps extends ListByKind.Variables | {} = {},
  TChildProps = DataProps<ListByKind.Query, ListByKind.Variables>
>(
  document: DocumentNode,
  operationOptions?: QueryOperationOption<
    TProps,
    ListByKind.Query,
    ListByKind.Variables,
    TChildProps
  >
): ((
  WrappedComponent: React.ComponentType<TChildProps & TProps>
) => React.ComponentClass<TProps>) {
  return graphql<TProps, ListByKind.Query, ListByKind.Variables, TChildProps>(
    document,
    operationOptions as OperationOption<
      TProps,
      ListByKind.Query,
      ListByKind.Variables,
      TChildProps
    >
  );
}

export type withSearchHomeDataValue = DataValue<
  SearchHome.Query,
  SearchHome.Variables
>;
export type withSearchHomeChildProps<TProps = {}> = ChildDataProps<
  TProps,
  SearchHome.Query,
  SearchHome.Variables
>;

export function withSearchHome<
  TProps extends SearchHome.Variables | {} = {},
  TChildProps = DataProps<SearchHome.Query, SearchHome.Variables>
>(
  document: DocumentNode,
  operationOptions?: QueryOperationOption<
    TProps,
    SearchHome.Query,
    SearchHome.Variables,
    TChildProps
  >
): ((
  WrappedComponent: React.ComponentType<TChildProps & TProps>
) => React.ComponentClass<TProps>) {
  return graphql<TProps, SearchHome.Query, SearchHome.Variables, TChildProps>(
    document,
    operationOptions as OperationOption<
      TProps,
      SearchHome.Query,
      SearchHome.Variables,
      TChildProps
    >
  );
}

export type withUserProfileDataValue = DataValue<
  UserProfile.Query,
  UserProfile.Variables
>;
export type withUserProfileChildProps<TProps = {}> = ChildDataProps<
  TProps,
  UserProfile.Query,
  UserProfile.Variables
>;

export function withUserProfile<
  TProps extends UserProfile.Variables | {} = {},
  TChildProps = DataProps<UserProfile.Query, UserProfile.Variables>
>(
  document: DocumentNode,
  operationOptions?: QueryOperationOption<
    TProps,
    UserProfile.Query,
    UserProfile.Variables,
    TChildProps
  >
): ((
  WrappedComponent: React.ComponentType<TChildProps & TProps>
) => React.ComponentClass<TProps>) {
  return graphql<TProps, UserProfile.Query, UserProfile.Variables, TChildProps>(
    document,
    operationOptions as OperationOption<
      TProps,
      UserProfile.Query,
      UserProfile.Variables,
      TChildProps
    >
  );
}

export type withMeIdDataValue = DataValue<MeId.Query, MeId.Variables>;
export type withMeIdChildProps<TProps = {}> = ChildDataProps<
  TProps,
  MeId.Query,
  MeId.Variables
>;

export function withMeId<
  TProps extends MeId.Variables | {} = {},
  TChildProps = DataProps<MeId.Query, MeId.Variables>
>(
  document: DocumentNode,
  operationOptions?: QueryOperationOption<
    TProps,
    MeId.Query,
    MeId.Variables,
    TChildProps
  >
): ((
  WrappedComponent: React.ComponentType<TChildProps & TProps>
) => React.ComponentClass<TProps>) {
  return graphql<TProps, MeId.Query, MeId.Variables, TChildProps>(
    document,
    operationOptions as OperationOption<
      TProps,
      MeId.Query,
      MeId.Variables,
      TChildProps
    >
  );
}

export type withUfvClassDetailDataValue = DataValue<
  UfvClassDetail.Query,
  UfvClassDetail.Variables
>;
export type withUfvClassDetailChildProps<TProps = {}> = ChildDataProps<
  TProps,
  UfvClassDetail.Query,
  UfvClassDetail.Variables
>;

export function withUfvClassDetail<
  TProps extends UfvClassDetail.Variables | {} = {},
  TChildProps = DataProps<UfvClassDetail.Query, UfvClassDetail.Variables>
>(
  document: DocumentNode,
  operationOptions?: QueryOperationOption<
    TProps,
    UfvClassDetail.Query,
    UfvClassDetail.Variables,
    TChildProps
  >
): ((
  WrappedComponent: React.ComponentType<TChildProps & TProps>
) => React.ComponentClass<TProps>) {
  return graphql<
    TProps,
    UfvClassDetail.Query,
    UfvClassDetail.Variables,
    TChildProps
  >(document, operationOptions as OperationOption<
    TProps,
    UfvClassDetail.Query,
    UfvClassDetail.Variables,
    TChildProps
  >);
}

export type withUfvClassNameDataValue = DataValue<
  UfvClassName.Query,
  UfvClassName.Variables
>;
export type withUfvClassNameChildProps<TProps = {}> = ChildDataProps<
  TProps,
  UfvClassName.Query,
  UfvClassName.Variables
>;

export function withUfvClassName<
  TProps extends UfvClassName.Variables | {} = {},
  TChildProps = DataProps<UfvClassName.Query, UfvClassName.Variables>
>(
  document: DocumentNode,
  operationOptions?: QueryOperationOption<
    TProps,
    UfvClassName.Query,
    UfvClassName.Variables,
    TChildProps
  >
): ((
  WrappedComponent: React.ComponentType<TChildProps & TProps>
) => React.ComponentClass<TProps>) {
  return graphql<
    TProps,
    UfvClassName.Query,
    UfvClassName.Variables,
    TChildProps
  >(document, operationOptions as OperationOption<
    TProps,
    UfvClassName.Query,
    UfvClassName.Variables,
    TChildProps
  >);
}

export type withMyVoteInReviewDataValue = DataValue<
  MyVoteInReview.Query,
  MyVoteInReview.Variables
>;
export type withMyVoteInReviewChildProps<TProps = {}> = ChildDataProps<
  TProps,
  MyVoteInReview.Query,
  MyVoteInReview.Variables
>;

export function withMyVoteInReview<
  TProps extends MyVoteInReview.Variables | {} = {},
  TChildProps = DataProps<MyVoteInReview.Query, MyVoteInReview.Variables>
>(
  document: DocumentNode,
  operationOptions?: QueryOperationOption<
    TProps,
    MyVoteInReview.Query,
    MyVoteInReview.Variables,
    TChildProps
  >
): ((
  WrappedComponent: React.ComponentType<TChildProps & TProps>
) => React.ComponentClass<TProps>) {
  return graphql<
    TProps,
    MyVoteInReview.Query,
    MyVoteInReview.Variables,
    TChildProps
  >(document, operationOptions as OperationOption<
    TProps,
    MyVoteInReview.Query,
    MyVoteInReview.Variables,
    TChildProps
  >);
}

export type withReviewsFromUserDataValue = DataValue<
  ReviewsFromUser.Query,
  ReviewsFromUser.Variables
>;
export type withReviewsFromUserChildProps<TProps = {}> = ChildDataProps<
  TProps,
  ReviewsFromUser.Query,
  ReviewsFromUser.Variables
>;

export function withReviewsFromUser<
  TProps extends ReviewsFromUser.Variables | {} = {},
  TChildProps = DataProps<ReviewsFromUser.Query, ReviewsFromUser.Variables>
>(
  document: DocumentNode,
  operationOptions?: QueryOperationOption<
    TProps,
    ReviewsFromUser.Query,
    ReviewsFromUser.Variables,
    TChildProps
  >
): ((
  WrappedComponent: React.ComponentType<TChildProps & TProps>
) => React.ComponentClass<TProps>) {
  return graphql<
    TProps,
    ReviewsFromUser.Query,
    ReviewsFromUser.Variables,
    TChildProps
  >(document, operationOptions as OperationOption<
    TProps,
    ReviewsFromUser.Query,
    ReviewsFromUser.Variables,
    TChildProps
  >);
}

export type withMyOwnReviewsDataValue = DataValue<
  MyOwnReviews.Query,
  MyOwnReviews.Variables
>;
export type withMyOwnReviewsChildProps<TProps = {}> = ChildDataProps<
  TProps,
  MyOwnReviews.Query,
  MyOwnReviews.Variables
>;

export function withMyOwnReviews<
  TProps extends MyOwnReviews.Variables | {} = {},
  TChildProps = DataProps<MyOwnReviews.Query, MyOwnReviews.Variables>
>(
  document: DocumentNode,
  operationOptions?: QueryOperationOption<
    TProps,
    MyOwnReviews.Query,
    MyOwnReviews.Variables,
    TChildProps
  >
): ((
  WrappedComponent: React.ComponentType<TChildProps & TProps>
) => React.ComponentClass<TProps>) {
  return graphql<
    TProps,
    MyOwnReviews.Query,
    MyOwnReviews.Variables,
    TChildProps
  >(document, operationOptions as OperationOption<
    TProps,
    MyOwnReviews.Query,
    MyOwnReviews.Variables,
    TChildProps
  >);
}

export type withReviewExtraDataDataValue = DataValue<
  ReviewExtraData.Query,
  ReviewExtraData.Variables
>;
export type withReviewExtraDataChildProps<TProps = {}> = ChildDataProps<
  TProps,
  ReviewExtraData.Query,
  ReviewExtraData.Variables
>;

export function withReviewExtraData<
  TProps extends ReviewExtraData.Variables | {} = {},
  TChildProps = DataProps<ReviewExtraData.Query, ReviewExtraData.Variables>
>(
  document: DocumentNode,
  operationOptions?: QueryOperationOption<
    TProps,
    ReviewExtraData.Query,
    ReviewExtraData.Variables,
    TChildProps
  >
): ((
  WrappedComponent: React.ComponentType<TChildProps & TProps>
) => React.ComponentClass<TProps>) {
  return graphql<
    TProps,
    ReviewExtraData.Query,
    ReviewExtraData.Variables,
    TChildProps
  >(document, operationOptions as OperationOption<
    TProps,
    ReviewExtraData.Query,
    ReviewExtraData.Variables,
    TChildProps
  >);
}

export type withReviewDataToEditDataValue = DataValue<
  ReviewDataToEdit.Query,
  ReviewDataToEdit.Variables
>;
export type withReviewDataToEditChildProps<TProps = {}> = ChildDataProps<
  TProps,
  ReviewDataToEdit.Query,
  ReviewDataToEdit.Variables
>;

export function withReviewDataToEdit<
  TProps extends ReviewDataToEdit.Variables | {} = {},
  TChildProps = DataProps<ReviewDataToEdit.Query, ReviewDataToEdit.Variables>
>(
  document: DocumentNode,
  operationOptions?: QueryOperationOption<
    TProps,
    ReviewDataToEdit.Query,
    ReviewDataToEdit.Variables,
    TChildProps
  >
): ((
  WrappedComponent: React.ComponentType<TChildProps & TProps>
) => React.ComponentClass<TProps>) {
  return graphql<
    TProps,
    ReviewDataToEdit.Query,
    ReviewDataToEdit.Variables,
    TChildProps
  >(document, operationOptions as OperationOption<
    TProps,
    ReviewDataToEdit.Query,
    ReviewDataToEdit.Variables,
    TChildProps
  >);
}

export type withAllMyVotesDataValue = DataValue<
  AllMyVotes.Query,
  AllMyVotes.Variables
>;
export type withAllMyVotesChildProps<TProps = {}> = ChildDataProps<
  TProps,
  AllMyVotes.Query,
  AllMyVotes.Variables
>;

export function withAllMyVotes<
  TProps extends AllMyVotes.Variables | {} = {},
  TChildProps = DataProps<AllMyVotes.Query, AllMyVotes.Variables>
>(
  document: DocumentNode,
  operationOptions?: QueryOperationOption<
    TProps,
    AllMyVotes.Query,
    AllMyVotes.Variables,
    TChildProps
  >
): ((
  WrappedComponent: React.ComponentType<TChildProps & TProps>
) => React.ComponentClass<TProps>) {
  return graphql<TProps, AllMyVotes.Query, AllMyVotes.Variables, TChildProps>(
    document,
    operationOptions as OperationOption<
      TProps,
      AllMyVotes.Query,
      AllMyVotes.Variables,
      TChildProps
    >
  );
}

export type DateTime = any;

export interface Node {
  id: string;
}

export interface Query {
  logged: boolean;
  registered: boolean;
  searchAll: SearchResult[];
  listClasses: UfvClass[];
  user?: User | null;
  ufvClass?: UfvClass | null;
  reviews: Review[];
  review?: Review | null;
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
  useful: ReviewUseful;
  easy: ReviewEasy;
  description: string;
  anonymous: boolean;
  recommended: boolean;
  teacher: string;
  score: number;
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
  login: loginResponse;
  logoff: logoffResponse;
  register: User;
  deleteAcc?: User | null;
  createReview?: Review | null;
  editReview?: Review | null;
  setVote?: ReviewVotes | null;
}

export interface loginResponse {
  ok: boolean;
}

export interface logoffResponse {
  ok: boolean;
}

export namespace QueryResolvers {
  export interface Resolvers {
    logged?: LoggedResolver;
    registered?: RegisteredResolver;
    searchAll?: SearchAllResolver;
    listClasses?: ListClassesResolver;
    user?: UserResolver;
    ufvClass?: UfvClassResolver;
    reviews?: ReviewsResolver;
    review?: ReviewResolver;
    me?: MeResolver;
    myvote?: MyvoteResolver;
    myreviews?: MyreviewsResolver;
    myvotes?: MyvotesResolver;
  }

  export type LoggedResolver = Resolver<boolean>;
  export type RegisteredResolver = Resolver<boolean>;
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

  export type ReviewResolver = Resolver<Review | null, ReviewArgs>;
  export interface ReviewArgs {
    where: ReviewWhereInput;
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
    useful?: UsefulResolver;
    easy?: EasyResolver;
    description?: DescriptionResolver;
    anonymous?: AnonymousResolver;
    recommended?: RecommendedResolver;
    teacher?: TeacherResolver;
    score?: ScoreResolver;
    classReviewed?: ClassReviewedResolver;
    reviewer?: ReviewerResolver;
    votes?: VotesResolver;
    createdAt?: CreatedAtResolver;
    updatedAt?: UpdatedAtResolver;
  }

  export type IdResolver = Resolver<string>;
  export type UsefulResolver = Resolver<ReviewUseful>;
  export type EasyResolver = Resolver<ReviewEasy>;
  export type DescriptionResolver = Resolver<string>;
  export type AnonymousResolver = Resolver<boolean>;
  export type RecommendedResolver = Resolver<boolean>;
  export type TeacherResolver = Resolver<string>;
  export type ScoreResolver = Resolver<number>;
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
    login?: LoginResolver;
    logoff?: LogoffResolver;
    register?: RegisterResolver;
    deleteAcc?: DeleteAccResolver;
    createReview?: CreateReviewResolver;
    editReview?: EditReviewResolver;
    setVote?: SetVoteResolver;
  }

  export type LoginResolver = Resolver<loginResponse>;
  export type LogoffResolver = Resolver<logoffResponse>;
  export type RegisterResolver = Resolver<User, RegisterArgs>;
  export interface RegisterArgs {
    user: UserRegisterInput;
  }

  export type DeleteAccResolver = Resolver<User | null>;
  export type CreateReviewResolver = Resolver<Review | null, CreateReviewArgs>;
  export interface CreateReviewArgs {
    data: CreateReviewData;
  }

  export type EditReviewResolver = Resolver<Review | null, EditReviewArgs>;
  export interface EditReviewArgs {
    data: EditReviewData;
  }

  export type SetVoteResolver = Resolver<ReviewVotes | null, SetVoteArgs>;
  export interface SetVoteArgs {
    data: SetVoteData;
  }
}

export namespace loginResponseResolvers {
  export interface Resolvers {
    ok?: OkResolver;
  }

  export type OkResolver = Resolver<boolean>;
}

export namespace logoffResponseResolvers {
  export interface Resolvers {
    ok?: OkResolver;
  }

  export type OkResolver = Resolver<boolean>;
}

export interface SearchInput {
  value: string;
}

export interface ReviewWhereInput {
  id: string;
}

export interface UfvClassWhereInput {
  AND?: UfvClassWhereInput[] | null;
  OR?: UfvClassWhereInput[] | null;
  NOT?: UfvClassWhereInput[] | null;
  id?: string | null;
  id_not?: string | null;
  id_in?: string[] | null;
  id_not_in?: string[] | null;
  id_lt?: string | null;
  id_lte?: string | null;
  id_gt?: string | null;
  id_gte?: string | null;
  id_contains?: string | null;
  id_not_contains?: string | null;
  id_starts_with?: string | null;
  id_not_starts_with?: string | null;
  id_ends_with?: string | null;
  id_not_ends_with?: string | null;
  cod?: string | null;
  cod_not?: string | null;
  cod_in?: string[] | null;
  cod_not_in?: string[] | null;
  cod_lt?: string | null;
  cod_lte?: string | null;
  cod_gt?: string | null;
  cod_gte?: string | null;
  cod_contains?: string | null;
  cod_not_contains?: string | null;
  cod_starts_with?: string | null;
  cod_not_starts_with?: string | null;
  cod_ends_with?: string | null;
  cod_not_ends_with?: string | null;
  name?: string | null;
  name_not?: string | null;
  name_in?: string[] | null;
  name_not_in?: string[] | null;
  name_lt?: string | null;
  name_lte?: string | null;
  name_gt?: string | null;
  name_gte?: string | null;
  name_contains?: string | null;
  name_not_contains?: string | null;
  name_starts_with?: string | null;
  name_not_starts_with?: string | null;
  name_ends_with?: string | null;
  name_not_ends_with?: string | null;
  optional?: boolean | null;
  optional_not?: boolean | null;
  department?: Department | null;
  department_not?: Department | null;
  department_in?: Department[] | null;
  department_not_in?: Department[] | null;
  useful?: number | null;
  useful_not?: number | null;
  useful_in?: number[] | null;
  useful_not_in?: number[] | null;
  useful_lt?: number | null;
  useful_lte?: number | null;
  useful_gt?: number | null;
  useful_gte?: number | null;
  easy?: number | null;
  easy_not?: number | null;
  easy_in?: number[] | null;
  easy_not_in?: number[] | null;
  easy_lt?: number | null;
  easy_lte?: number | null;
  easy_gt?: number | null;
  easy_gte?: number | null;
  recommended?: number | null;
  recommended_not?: number | null;
  recommended_in?: number[] | null;
  recommended_not_in?: number[] | null;
  recommended_lt?: number | null;
  recommended_lte?: number | null;
  recommended_gt?: number | null;
  recommended_gte?: number | null;
  reviews_every?: ReviewWhereInput | null;
  reviews_some?: ReviewWhereInput | null;
  reviews_none?: ReviewWhereInput | null;
}

export interface UserWhereInput {
  AND?: UserWhereInput[] | null;
  OR?: UserWhereInput[] | null;
  NOT?: UserWhereInput[] | null;
  id?: string | null;
  id_not?: string | null;
  id_in?: string[] | null;
  id_not_in?: string[] | null;
  id_lt?: string | null;
  id_lte?: string | null;
  id_gt?: string | null;
  id_gte?: string | null;
  id_contains?: string | null;
  id_not_contains?: string | null;
  id_starts_with?: string | null;
  id_not_starts_with?: string | null;
  id_ends_with?: string | null;
  id_not_ends_with?: string | null;
  facebookId?: string | null;
  facebookId_not?: string | null;
  facebookId_in?: string[] | null;
  facebookId_not_in?: string[] | null;
  facebookId_lt?: string | null;
  facebookId_lte?: string | null;
  facebookId_gt?: string | null;
  facebookId_gte?: string | null;
  facebookId_contains?: string | null;
  facebookId_not_contains?: string | null;
  facebookId_starts_with?: string | null;
  facebookId_not_starts_with?: string | null;
  facebookId_ends_with?: string | null;
  facebookId_not_ends_with?: string | null;
  name?: string | null;
  name_not?: string | null;
  name_in?: string[] | null;
  name_not_in?: string[] | null;
  name_lt?: string | null;
  name_lte?: string | null;
  name_gt?: string | null;
  name_gte?: string | null;
  name_contains?: string | null;
  name_not_contains?: string | null;
  name_starts_with?: string | null;
  name_not_starts_with?: string | null;
  name_ends_with?: string | null;
  name_not_ends_with?: string | null;
  course?: UfvCourses | null;
  course_not?: UfvCourses | null;
  course_in?: UfvCourses[] | null;
  course_not_in?: UfvCourses[] | null;
  year?: UfvYears | null;
  year_not?: UfvYears | null;
  year_in?: UfvYears[] | null;
  year_not_in?: UfvYears[] | null;
  rate?: UserRate | null;
  rate_not?: UserRate | null;
  rate_in?: UserRate[] | null;
  rate_not_in?: UserRate[] | null;
  createdAt?: DateTime | null;
  createdAt_not?: DateTime | null;
  createdAt_in?: DateTime[] | null;
  createdAt_not_in?: DateTime[] | null;
  createdAt_lt?: DateTime | null;
  createdAt_lte?: DateTime | null;
  createdAt_gt?: DateTime | null;
  createdAt_gte?: DateTime | null;
  updatedAt?: DateTime | null;
  updatedAt_not?: DateTime | null;
  updatedAt_in?: DateTime[] | null;
  updatedAt_not_in?: DateTime[] | null;
  updatedAt_lt?: DateTime | null;
  updatedAt_lte?: DateTime | null;
  updatedAt_gt?: DateTime | null;
  updatedAt_gte?: DateTime | null;
  reviews_every?: ReviewWhereInput | null;
  reviews_some?: ReviewWhereInput | null;
  reviews_none?: ReviewWhereInput | null;
  votes_every?: ReviewVotesWhereInput | null;
  votes_some?: ReviewVotesWhereInput | null;
  votes_none?: ReviewVotesWhereInput | null;
}

export interface ReviewVotesWhereInput {
  AND?: ReviewVotesWhereInput[] | null;
  OR?: ReviewVotesWhereInput[] | null;
  NOT?: ReviewVotesWhereInput[] | null;
  id?: string | null;
  id_not?: string | null;
  id_in?: string[] | null;
  id_not_in?: string[] | null;
  id_lt?: string | null;
  id_lte?: string | null;
  id_gt?: string | null;
  id_gte?: string | null;
  id_contains?: string | null;
  id_not_contains?: string | null;
  id_starts_with?: string | null;
  id_not_starts_with?: string | null;
  id_ends_with?: string | null;
  id_not_ends_with?: string | null;
  type?: ReviewVotesTypes | null;
  type_not?: ReviewVotesTypes | null;
  type_in?: ReviewVotesTypes[] | null;
  type_not_in?: ReviewVotesTypes[] | null;
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
  id?: string | null;
  cod?: string | null;
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
  teacher: string;
  useful: ReviewUseful;
  easy: ReviewEasy;
  description: string;
  anonymous: boolean;
  recommended: boolean;
}

export interface EditReviewData {
  id: string;
  cod: string;
  teacher: string;
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
export interface ReviewQueryArgs {
  where: ReviewWhereInput;
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
export interface EditReviewMutationArgs {
  data: EditReviewData;
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

export type ReviewOrderByInput =
  | "id_ASC"
  | "id_DESC"
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
  | "teacher_ASC"
  | "teacher_DESC"
  | "score_ASC"
  | "score_DESC"
  | "createdAt_ASC"
  | "createdAt_DESC"
  | "updatedAt_ASC"
  | "updatedAt_DESC";

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

export namespace Logoff {
  export type Variables = {};

  export type Mutation = {
    __typename?: "Mutation";
    logoff: Logoff;
  };

  export type Logoff = {
    __typename?: "logoffResponse";
    ok: boolean;
  };
}
export namespace Login {
  export type Variables = {};

  export type Mutation = {
    __typename?: "Mutation";
    login: Login;
  };

  export type Login = {
    __typename?: "loginResponse";
    ok: boolean;
  };
}
export namespace Register {
  export type Variables = {
    course: UfvCourses;
    year: UfvYears;
  };

  export type Mutation = {
    __typename?: "Mutation";
    register: Register;
  };

  export type Register = {
    __typename?: "User";
    id: string;
  };
}
export namespace DeleteAccount {
  export type Variables = {};

  export type Mutation = {
    __typename?: "Mutation";
    deleteAcc?: DeleteAcc | null;
  };

  export type DeleteAcc = {
    __typename?: "User";
    id: string;
  };
}
export namespace UpdateReview {
  export type Variables = {
    cod: string;
    id: string;
    teacher: string;
    useful: ReviewUseful;
    easy: ReviewEasy;
    description: string;
    anonymous: boolean;
    recommended: boolean;
  };

  export type Mutation = {
    __typename?: "Mutation";
    editReview?: EditReview | null;
  };

  export type EditReview = {
    __typename?: "Review";
    id: string;
  };
}
export namespace WriteReview {
  export type Variables = {
    cod: string;
    teacher: string;
    useful: ReviewUseful;
    easy: ReviewEasy;
    description: string;
    anonymous: boolean;
    recommended: boolean;
  };

  export type Mutation = {
    __typename?: "Mutation";
    createReview?: CreateReview | null;
  };

  export type CreateReview = {
    __typename?: "Review";
    id: string;
  };
}
export namespace SetVoteOnReview {
  export type Variables = {
    reviewId: string;
    type: ReviewVotesTypes;
  };

  export type Mutation = {
    __typename?: "Mutation";
    setVote?: SetVote | null;
  };

  export type SetVote = {
    __typename?: "ReviewVotes";
    type: ReviewVotesTypes;
    id: string;
  };
}
export namespace LocalLogged {
  export type Variables = {};

  export type Query = {
    __typename?: "Query";
    logged: boolean;
  };
}
export namespace IsRegistered {
  export type Variables = {};

  export type Query = {
    __typename?: "Query";
    logged: boolean;
    me?: Me | null;
  };

  export type Me = {
    __typename?: "User";
    id: string;
  };
}
export namespace ListByKind {
  export type Variables = {
    sort: ClassesRanks;
    optional?: boolean | null;
    department?: Department | null;
  };

  export type Query = {
    __typename?: "Query";
    listClasses: ListClasses[];
  };

  export type ListClasses = {
    __typename?: "UfvClass";
    id: string;
    name: string;
    cod: string;
    useful: number;
    easy: number;
    recommended: number;
  };
}
export namespace SearchHome {
  export type Variables = {
    value: string;
  };

  export type Query = {
    __typename?: "Query";
    searchAll: SearchAll[];
  };

  export type SearchAll = UserInlineFragment | UfvClassInlineFragment;

  export type UserInlineFragment = {
    __typename?: "User";
    id: string;
    name: string;
  };

  export type UfvClassInlineFragment = {
    __typename?: "UfvClass";
    id: string;
    name: string;
    cod: string;
  };
}
export namespace UserProfile {
  export type Variables = {
    id: string;
  };

  export type Query = {
    __typename?: "Query";
    user?: User | null;
  };

  export type User = {
    __typename?: "User";
    id: string;
    name: string;
    createdAt: DateTime;
    rate: UserRate;
    course: UfvCourses;
    year: UfvYears;
    reviews?: Reviews[] | null;
  };

  export type Reviews = {
    __typename?: "Review";
    id: string;
    anonymous: boolean;
    recommended: boolean;
    createdAt: DateTime;
    easy: ReviewEasy;
    useful: ReviewUseful;
    description: string;
    reviewer: Reviewer;
  };

  export type Reviewer = {
    __typename?: "User";
    id: string;
  };
}
export namespace MeId {
  export type Variables = {};

  export type Query = {
    __typename?: "Query";
    me?: Me | null;
  };

  export type Me = {
    __typename?: "User";
    id: string;
  };
}
export namespace UfvClassDetail {
  export type Variables = {
    id: string;
  };

  export type Query = {
    __typename?: "Query";
    ufvClass?: UfvClass | null;
  };

  export type UfvClass = {
    __typename?: "UfvClass";
    id: string;
    cod: string;
    name: string;
    optional: boolean;
    useful: number;
    easy: number;
    recommended: number;
    reviews?: Reviews[] | null;
  };

  export type Reviews = {
    __typename?: "Review";
    id: string;
    createdAt: DateTime;
    useful: ReviewUseful;
    score: number;
    easy: ReviewEasy;
    description: string;
    recommended: boolean;
    anonymous: boolean;
    reviewer: Reviewer;
  };

  export type Reviewer = {
    __typename?: "User";
    id: string;
    name: string;
    rate: UserRate;
  };
}
export namespace UfvClassName {
  export type Variables = {
    id: string;
  };

  export type Query = {
    __typename?: "Query";
    ufvClass?: UfvClass | null;
  };

  export type UfvClass = {
    __typename?: "UfvClass";
    cod: string;
    name: string;
  };
}
export namespace MyVoteInReview {
  export type Variables = {
    reviewId: string;
  };

  export type Query = {
    __typename?: "Query";
    myvote?: Myvote | null;
  };

  export type Myvote = {
    __typename?: "ReviewVotes";
    type: ReviewVotesTypes;
  };
}
export namespace ReviewsFromUser {
  export type Variables = {
    userId: string;
    first: number;
  };

  export type Query = {
    __typename?: "Query";
    reviews: Reviews[];
  };

  export type Reviews = {
    __typename?: "Review";
    id: string;
    createdAt: DateTime;
    score: number;
    useful: ReviewUseful;
    easy: ReviewEasy;
    description: string;
    recommended: boolean;
    anonymous: boolean;
    reviewer: Reviewer;
  };

  export type Reviewer = {
    __typename?: "User";
    id: string;
    name: string;
    rate: UserRate;
  };
}
export namespace MyOwnReviews {
  export type Variables = {};

  export type Query = {
    __typename?: "Query";
    myreviews: Myreviews[];
  };

  export type Myreviews = {
    __typename?: "Review";
    id: string;
    score: number;
    createdAt: DateTime;
    useful: ReviewUseful;
    easy: ReviewEasy;
    description: string;
    recommended: boolean;
    anonymous: boolean;
    reviewer: Reviewer;
  };

  export type Reviewer = {
    __typename?: "User";
    id: string;
    name: string;
    rate: UserRate;
  };
}
export namespace ReviewExtraData {
  export type Variables = {
    id: string;
  };

  export type Query = {
    __typename?: "Query";
    me?: Me | null;
    myvote?: Myvote | null;
  };

  export type Me = {
    __typename?: "User";
    id: string;
  };

  export type Myvote = {
    __typename?: "ReviewVotes";
    type: ReviewVotesTypes;
  };
}
export namespace ReviewDataToEdit {
  export type Variables = {
    id: string;
  };

  export type Query = {
    __typename?: "Query";
    review?: Review | null;
  };

  export type Review = {
    __typename?: "Review";
    classReviewed: ClassReviewed;
    description: string;
    easy: ReviewEasy;
    useful: ReviewUseful;
    anonymous: boolean;
    recommended: boolean;
    teacher: string;
  };

  export type ClassReviewed = {
    __typename?: "UfvClass";
    cod: string;
    id: string;
  };
}
export namespace AllMyVotes {
  export type Variables = {};

  export type Query = {
    __typename?: "Query";
    myvotes: Myvotes[];
  };

  export type Myvotes = {
    __typename?: "ReviewVotes";
    review: Review;
  };

  export type Review = {
    __typename?: "Review";
    id: string;
    score: number;
    createdAt: DateTime;
    useful: ReviewUseful;
    easy: ReviewEasy;
    description: string;
    recommended: boolean;
    anonymous: boolean;
    reviewer: Reviewer;
  };

  export type Reviewer = {
    __typename?: "User";
    id: string;
    name: string;
    rate: UserRate;
  };
}
