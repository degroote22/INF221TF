/* tslint:disable */
import { GraphQLResolveInfo } from "graphql";

type Resolver<Result, Args = any> = (
  parent: any,
  args: Args,
  context: any,
  info: GraphQLResolveInfo
) => Promise<Result> | Result;

export interface Node {
  id: string;
}

export interface Query {
  logged: boolean;
  registered: boolean;
  allClasses: UfvClass[];
  listClasses: UfvClass[];
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
}

export interface User extends Node {
  id: string;
  facebookId: string;
  name: string;
  rate: UserRate;
  course: UfvCourses;
  year: UfvYears;
  reviews?: Review[] | null;
  votes?: ReviewVotes[] | null;
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
}

export interface loginInput {
  token: string;
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
    allClasses?: AllClassesResolver;
    listClasses?: ListClassesResolver;
  }

  export type LoggedResolver = Resolver<boolean>;
  export type RegisteredResolver = Resolver<boolean>;
  export type AllClassesResolver = Resolver<UfvClass[], AllClassesArgs>;
  export interface AllClassesArgs {
    where: UfvClassesInput;
  }

  export type ListClassesResolver = Resolver<UfvClass[], ListClassesArgs>;
  export interface ListClassesArgs {
    where: UfvListClassesInput;
  }
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
}

export namespace UserResolvers {
  export interface Resolvers {
    id?: IdResolver;
    facebookId?: FacebookIdResolver;
    name?: NameResolver;
    rate?: RateResolver;
    course?: CourseResolver;
    year?: YearResolver;
    reviews?: ReviewsResolver;
    votes?: VotesResolver;
  }

  export type IdResolver = Resolver<string>;
  export type FacebookIdResolver = Resolver<string>;
  export type NameResolver = Resolver<string>;
  export type RateResolver = Resolver<UserRate>;
  export type CourseResolver = Resolver<UfvCourses>;
  export type YearResolver = Resolver<UfvYears>;
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
  }

  export type LoginResolver = Resolver<loginResponse, LoginArgs>;
  export interface LoginArgs {
    input: loginInput;
  }

  export type LogoffResolver = Resolver<logoffResponse>;
}

export namespace loginInputResolvers {
  export interface Resolvers {
    token?: TokenResolver;
  }

  export type TokenResolver = Resolver<string>;
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

export interface UfvClassesInput {
  searchFor: string;
}

export interface ReviewWhereInput {
  AND?: ReviewWhereInput[] | null;
  OR?: ReviewWhereInput[] | null;
  NOT?: ReviewWhereInput[] | null;
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
  score?: number | null;
  score_not?: number | null;
  score_in?: number[] | null;
  score_not_in?: number[] | null;
  score_lt?: number | null;
  score_lte?: number | null;
  score_gt?: number | null;
  score_gte?: number | null;
  useful?: ReviewUseful | null;
  useful_not?: ReviewUseful | null;
  useful_in?: ReviewUseful[] | null;
  useful_not_in?: ReviewUseful[] | null;
  easy?: ReviewEasy | null;
  easy_not?: ReviewEasy | null;
  easy_in?: ReviewEasy[] | null;
  easy_not_in?: ReviewEasy[] | null;
  description?: string | null;
  description_not?: string | null;
  description_in?: string[] | null;
  description_not_in?: string[] | null;
  description_lt?: string | null;
  description_lte?: string | null;
  description_gt?: string | null;
  description_gte?: string | null;
  description_contains?: string | null;
  description_not_contains?: string | null;
  description_starts_with?: string | null;
  description_not_starts_with?: string | null;
  description_ends_with?: string | null;
  description_not_ends_with?: string | null;
  anonymous?: boolean | null;
  anonymous_not?: boolean | null;
  recommended?: boolean | null;
  recommended_not?: boolean | null;
  classReviewed?: UfvClassWhereInput | null;
  reviewer?: UserWhereInput | null;
  votes_every?: ReviewVotesWhereInput | null;
  votes_some?: ReviewVotesWhereInput | null;
  votes_none?: ReviewVotesWhereInput | null;
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
  rate?: UserRate | null;
  rate_not?: UserRate | null;
  rate_in?: UserRate[] | null;
  rate_not_in?: UserRate[] | null;
  course?: UfvCourses | null;
  course_not?: UfvCourses | null;
  course_in?: UfvCourses[] | null;
  course_not_in?: UfvCourses[] | null;
  year?: UfvYears | null;
  year_not?: UfvYears | null;
  year_in?: UfvYears[] | null;
  year_not_in?: UfvYears[] | null;
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
export interface AllClassesQueryArgs {
  where: UfvClassesInput;
}
export interface ListClassesQueryArgs {
  where: UfvListClassesInput;
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
export interface LoginMutationArgs {
  input: loginInput;
}

export type Department = "CCA" | "CCE" | "CCB" | "CCH";

export type ReviewUseful = "U0" | "U1" | "U2" | "U3" | "U4" | "U5";

export type ReviewEasy = "E0" | "E1" | "E2" | "E3" | "E4" | "E5";

export type UserRate = "Iniciante" | "Confiavel";

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
  | "updatedAt_ASC"
  | "updatedAt_DESC"
  | "createdAt_ASC"
  | "createdAt_DESC";

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
export namespace LoggedRegistered {
  export type Variables = {};

  export type Query = {
    __typename?: "Query";
    logged: boolean;
    registered: boolean;
  };
}
