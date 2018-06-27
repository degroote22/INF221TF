import { GraphQLResolveInfo, GraphQLSchema } from 'graphql'
import { IResolvers } from 'graphql-tools/dist/Interfaces'
import { Options } from 'graphql-binding'
import { makePrismaBindingClass, BasePrismaOptions } from 'prisma-binding'

export interface Query {
    users: <T = User[]>(args: { where?: UserWhereInput, orderBy?: UserOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    reviewVoteses: <T = ReviewVotes[]>(args: { where?: ReviewVotesWhereInput, orderBy?: ReviewVotesOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    reviews: <T = Review[]>(args: { where?: ReviewWhereInput, orderBy?: ReviewOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    ufvClasses: <T = UfvClass[]>(args: { where?: UfvClassWhereInput, orderBy?: UfvClassOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    user: <T = User | null>(args: { where: UserWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    reviewVotes: <T = ReviewVotes | null>(args: { where: ReviewVotesWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    review: <T = Review | null>(args: { where: ReviewWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    ufvClass: <T = UfvClass | null>(args: { where: UfvClassWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    usersConnection: <T = UserConnection>(args: { where?: UserWhereInput, orderBy?: UserOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    reviewVotesesConnection: <T = ReviewVotesConnection>(args: { where?: ReviewVotesWhereInput, orderBy?: ReviewVotesOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    reviewsConnection: <T = ReviewConnection>(args: { where?: ReviewWhereInput, orderBy?: ReviewOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    ufvClassesConnection: <T = UfvClassConnection>(args: { where?: UfvClassWhereInput, orderBy?: UfvClassOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    node: <T = Node | null>(args: { id: ID_Output }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> 
  }

export interface Mutation {
    createUser: <T = User>(args: { data: UserCreateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    createReviewVotes: <T = ReviewVotes>(args: { data: ReviewVotesCreateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    createReview: <T = Review>(args: { data: ReviewCreateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    createUfvClass: <T = UfvClass>(args: { data: UfvClassCreateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateUser: <T = User | null>(args: { data: UserUpdateInput, where: UserWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateReviewVotes: <T = ReviewVotes | null>(args: { data: ReviewVotesUpdateInput, where: ReviewVotesWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateReview: <T = Review | null>(args: { data: ReviewUpdateInput, where: ReviewWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateUfvClass: <T = UfvClass | null>(args: { data: UfvClassUpdateInput, where: UfvClassWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteUser: <T = User | null>(args: { where: UserWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteReviewVotes: <T = ReviewVotes | null>(args: { where: ReviewVotesWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteReview: <T = Review | null>(args: { where: ReviewWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteUfvClass: <T = UfvClass | null>(args: { where: UfvClassWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    upsertUser: <T = User>(args: { where: UserWhereUniqueInput, create: UserCreateInput, update: UserUpdateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    upsertReviewVotes: <T = ReviewVotes>(args: { where: ReviewVotesWhereUniqueInput, create: ReviewVotesCreateInput, update: ReviewVotesUpdateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    upsertReview: <T = Review>(args: { where: ReviewWhereUniqueInput, create: ReviewCreateInput, update: ReviewUpdateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    upsertUfvClass: <T = UfvClass>(args: { where: UfvClassWhereUniqueInput, create: UfvClassCreateInput, update: UfvClassUpdateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateManyUsers: <T = BatchPayload>(args: { data: UserUpdateInput, where?: UserWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateManyReviewVoteses: <T = BatchPayload>(args: { data: ReviewVotesUpdateInput, where?: ReviewVotesWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateManyReviews: <T = BatchPayload>(args: { data: ReviewUpdateInput, where?: ReviewWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateManyUfvClasses: <T = BatchPayload>(args: { data: UfvClassUpdateInput, where?: UfvClassWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteManyUsers: <T = BatchPayload>(args: { where?: UserWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteManyReviewVoteses: <T = BatchPayload>(args: { where?: ReviewVotesWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteManyReviews: <T = BatchPayload>(args: { where?: ReviewWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteManyUfvClasses: <T = BatchPayload>(args: { where?: UfvClassWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> 
  }

export interface Subscription {
    user: <T = UserSubscriptionPayload | null>(args: { where?: UserSubscriptionWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<AsyncIterator<T>> ,
    reviewVotes: <T = ReviewVotesSubscriptionPayload | null>(args: { where?: ReviewVotesSubscriptionWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<AsyncIterator<T>> ,
    review: <T = ReviewSubscriptionPayload | null>(args: { where?: ReviewSubscriptionWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<AsyncIterator<T>> ,
    ufvClass: <T = UfvClassSubscriptionPayload | null>(args: { where?: UfvClassSubscriptionWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<AsyncIterator<T>> 
  }

export interface Exists {
  User: (where?: UserWhereInput) => Promise<boolean>
  ReviewVotes: (where?: ReviewVotesWhereInput) => Promise<boolean>
  Review: (where?: ReviewWhereInput) => Promise<boolean>
  UfvClass: (where?: UfvClassWhereInput) => Promise<boolean>
}

export interface Prisma {
  query: Query
  mutation: Mutation
  subscription: Subscription
  exists: Exists
  request: <T = any>(query: string, variables?: {[key: string]: any}) => Promise<T>
  delegate(operation: 'query' | 'mutation', fieldName: string, args: {
    [key: string]: any;
}, infoOrQuery?: GraphQLResolveInfo | string, options?: Options): Promise<any>;
delegateSubscription(fieldName: string, args?: {
    [key: string]: any;
}, infoOrQuery?: GraphQLResolveInfo | string, options?: Options): Promise<AsyncIterator<any>>;
getAbstractResolvers(filterSchema?: GraphQLSchema | string): IResolvers;
}

export interface BindingConstructor<T> {
  new(options: BasePrismaOptions): T
}
/**
 * Type Defs
*/

const typeDefs = `type AggregateReview {
  count: Int!
}

type AggregateReviewVotes {
  count: Int!
}

type AggregateUfvClass {
  count: Int!
}

type AggregateUser {
  count: Int!
}

type BatchPayload {
  """The number of nodes that have been affected by the Batch operation."""
  count: Long!
}

scalar DateTime

enum Department {
  Depto__de_Economia_Rural
  Depto__de_Engenharia_Agricola
  Depto__de_Engenharia_Florestal
  Depto__de_Fitopatologia
  Depto__de_Fitotecnia
  Depto__de_Solos
  Depto__de_Zootecnia
  Depto__de_Biologia_Animal
  Depto__de_Biologia_Geral
  Depto__de_Biologia_Vegetal
  Depto__de_Bioquimica_e_Biologia_Molecular
  Depto__de_Educacao_Fisica
  Depto__de_Entomologia
  Depto__de_Microbiologia
  Depto__de_Medicina_e_Enfermagem
  Depto__de_Nutricaoo_e_Saude
  Depto__de_Veterinaria
  Depto__de_Arquitetura_e_Urbanismo
  Depto__de_Engenharia_Civil
  Depto__de_Engenharia_Eletrica
  Depto__de_Engenharia_de_Producao_e_Mecanica
  Depto__de_Estatistica
  Depto__de_Fisica
  Depto__de_Informatica
  Depto__de_Matematica
  Depto__de_Quimica
  Depto__de_Tecnologia_de_Alimentos
  Depto__de_Administracao_e_Contabilidade
  Depto__de_Artes_e_Humanidades
  Depto__de_Ciencias_Sociais
  Depto__de_Comunicacao_Social
  Depto__de_Direito
  Depto__de_Economia
  Depto__de_Economia_Domestica
  Depto__de_Educacao
  Depto__de_Geografia
  Depto__de_Historia
  Depto__de_Letras
}

"""
The \`Long\` scalar type represents non-fractional signed whole numeric values.
Long can represent values between -(2^63) and 2^63 - 1.
"""
scalar Long

type Mutation {
  createUser(data: UserCreateInput!): User!
  createReviewVotes(data: ReviewVotesCreateInput!): ReviewVotes!
  createReview(data: ReviewCreateInput!): Review!
  createUfvClass(data: UfvClassCreateInput!): UfvClass!
  updateUser(data: UserUpdateInput!, where: UserWhereUniqueInput!): User
  updateReviewVotes(data: ReviewVotesUpdateInput!, where: ReviewVotesWhereUniqueInput!): ReviewVotes
  updateReview(data: ReviewUpdateInput!, where: ReviewWhereUniqueInput!): Review
  updateUfvClass(data: UfvClassUpdateInput!, where: UfvClassWhereUniqueInput!): UfvClass
  deleteUser(where: UserWhereUniqueInput!): User
  deleteReviewVotes(where: ReviewVotesWhereUniqueInput!): ReviewVotes
  deleteReview(where: ReviewWhereUniqueInput!): Review
  deleteUfvClass(where: UfvClassWhereUniqueInput!): UfvClass
  upsertUser(where: UserWhereUniqueInput!, create: UserCreateInput!, update: UserUpdateInput!): User!
  upsertReviewVotes(where: ReviewVotesWhereUniqueInput!, create: ReviewVotesCreateInput!, update: ReviewVotesUpdateInput!): ReviewVotes!
  upsertReview(where: ReviewWhereUniqueInput!, create: ReviewCreateInput!, update: ReviewUpdateInput!): Review!
  upsertUfvClass(where: UfvClassWhereUniqueInput!, create: UfvClassCreateInput!, update: UfvClassUpdateInput!): UfvClass!
  updateManyUsers(data: UserUpdateInput!, where: UserWhereInput): BatchPayload!
  updateManyReviewVoteses(data: ReviewVotesUpdateInput!, where: ReviewVotesWhereInput): BatchPayload!
  updateManyReviews(data: ReviewUpdateInput!, where: ReviewWhereInput): BatchPayload!
  updateManyUfvClasses(data: UfvClassUpdateInput!, where: UfvClassWhereInput): BatchPayload!
  deleteManyUsers(where: UserWhereInput): BatchPayload!
  deleteManyReviewVoteses(where: ReviewVotesWhereInput): BatchPayload!
  deleteManyReviews(where: ReviewWhereInput): BatchPayload!
  deleteManyUfvClasses(where: UfvClassWhereInput): BatchPayload!
}

enum MutationType {
  CREATED
  UPDATED
  DELETED
}

"""An object with an ID"""
interface Node {
  """The id of the object."""
  id: ID!
}

"""Information about pagination in a connection."""
type PageInfo {
  """When paginating forwards, are there more items?"""
  hasNextPage: Boolean!

  """When paginating backwards, are there more items?"""
  hasPreviousPage: Boolean!

  """When paginating backwards, the cursor to continue."""
  startCursor: String

  """When paginating forwards, the cursor to continue."""
  endCursor: String
}

type Query {
  users(where: UserWhereInput, orderBy: UserOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [User]!
  reviewVoteses(where: ReviewVotesWhereInput, orderBy: ReviewVotesOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [ReviewVotes]!
  reviews(where: ReviewWhereInput, orderBy: ReviewOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Review]!
  ufvClasses(where: UfvClassWhereInput, orderBy: UfvClassOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [UfvClass]!
  user(where: UserWhereUniqueInput!): User
  reviewVotes(where: ReviewVotesWhereUniqueInput!): ReviewVotes
  review(where: ReviewWhereUniqueInput!): Review
  ufvClass(where: UfvClassWhereUniqueInput!): UfvClass
  usersConnection(where: UserWhereInput, orderBy: UserOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): UserConnection!
  reviewVotesesConnection(where: ReviewVotesWhereInput, orderBy: ReviewVotesOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): ReviewVotesConnection!
  reviewsConnection(where: ReviewWhereInput, orderBy: ReviewOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): ReviewConnection!
  ufvClassesConnection(where: UfvClassWhereInput, orderBy: UfvClassOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): UfvClassConnection!

  """Fetches an object given its ID"""
  node(
    """The ID of an object"""
    id: ID!
  ): Node
}

type Review implements Node {
  id: ID!
  score: Int!
  useful: ReviewUseful!
  easy: ReviewEasy!
  description: String!
  anonymous: Boolean!
  recommended: Boolean!
  classReviewed(where: UfvClassWhereInput): UfvClass!
  reviewer(where: UserWhereInput): User!
  votes(where: ReviewVotesWhereInput, orderBy: ReviewVotesOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [ReviewVotes!]
  createdAt: DateTime!
  updatedAt: DateTime!
}

"""A connection to a list of items."""
type ReviewConnection {
  """Information to aid in pagination."""
  pageInfo: PageInfo!

  """A list of edges."""
  edges: [ReviewEdge]!
  aggregate: AggregateReview!
}

input ReviewCreateInput {
  score: Int
  useful: ReviewUseful!
  easy: ReviewEasy!
  description: String!
  anonymous: Boolean!
  recommended: Boolean!
  classReviewed: UfvClassCreateOneWithoutReviewsInput!
  reviewer: UserCreateOneWithoutReviewsInput!
  votes: ReviewVotesCreateManyWithoutReviewInput
}

input ReviewCreateManyWithoutClassReviewedInput {
  create: [ReviewCreateWithoutClassReviewedInput!]
  connect: [ReviewWhereUniqueInput!]
}

input ReviewCreateManyWithoutReviewerInput {
  create: [ReviewCreateWithoutReviewerInput!]
  connect: [ReviewWhereUniqueInput!]
}

input ReviewCreateOneWithoutVotesInput {
  create: ReviewCreateWithoutVotesInput
  connect: ReviewWhereUniqueInput
}

input ReviewCreateWithoutClassReviewedInput {
  score: Int
  useful: ReviewUseful!
  easy: ReviewEasy!
  description: String!
  anonymous: Boolean!
  recommended: Boolean!
  reviewer: UserCreateOneWithoutReviewsInput!
  votes: ReviewVotesCreateManyWithoutReviewInput
}

input ReviewCreateWithoutReviewerInput {
  score: Int
  useful: ReviewUseful!
  easy: ReviewEasy!
  description: String!
  anonymous: Boolean!
  recommended: Boolean!
  classReviewed: UfvClassCreateOneWithoutReviewsInput!
  votes: ReviewVotesCreateManyWithoutReviewInput
}

input ReviewCreateWithoutVotesInput {
  score: Int
  useful: ReviewUseful!
  easy: ReviewEasy!
  description: String!
  anonymous: Boolean!
  recommended: Boolean!
  classReviewed: UfvClassCreateOneWithoutReviewsInput!
  reviewer: UserCreateOneWithoutReviewsInput!
}

enum ReviewEasy {
  E0
  E1
  E2
  E3
  E4
  E5
}

"""An edge in a connection."""
type ReviewEdge {
  """The item at the end of the edge."""
  node: Review!

  """A cursor for use in pagination."""
  cursor: String!
}

enum ReviewOrderByInput {
  id_ASC
  id_DESC
  score_ASC
  score_DESC
  useful_ASC
  useful_DESC
  easy_ASC
  easy_DESC
  description_ASC
  description_DESC
  anonymous_ASC
  anonymous_DESC
  recommended_ASC
  recommended_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
}

type ReviewPreviousValues {
  id: ID!
  score: Int!
  useful: ReviewUseful!
  easy: ReviewEasy!
  description: String!
  anonymous: Boolean!
  recommended: Boolean!
  createdAt: DateTime!
  updatedAt: DateTime!
}

type ReviewSubscriptionPayload {
  mutation: MutationType!
  node: Review
  updatedFields: [String!]
  previousValues: ReviewPreviousValues
}

input ReviewSubscriptionWhereInput {
  """Logical AND on all given filters."""
  AND: [ReviewSubscriptionWhereInput!]

  """Logical OR on all given filters."""
  OR: [ReviewSubscriptionWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [ReviewSubscriptionWhereInput!]

  """
  The subscription event gets dispatched when it's listed in mutation_in
  """
  mutation_in: [MutationType!]

  """
  The subscription event gets only dispatched when one of the updated fields names is included in this list
  """
  updatedFields_contains: String

  """
  The subscription event gets only dispatched when all of the field names included in this list have been updated
  """
  updatedFields_contains_every: [String!]

  """
  The subscription event gets only dispatched when some of the field names included in this list have been updated
  """
  updatedFields_contains_some: [String!]
  node: ReviewWhereInput
}

input ReviewUpdateInput {
  score: Int
  useful: ReviewUseful
  easy: ReviewEasy
  description: String
  anonymous: Boolean
  recommended: Boolean
  classReviewed: UfvClassUpdateOneWithoutReviewsInput
  reviewer: UserUpdateOneWithoutReviewsInput
  votes: ReviewVotesUpdateManyWithoutReviewInput
}

input ReviewUpdateManyWithoutClassReviewedInput {
  create: [ReviewCreateWithoutClassReviewedInput!]
  connect: [ReviewWhereUniqueInput!]
  disconnect: [ReviewWhereUniqueInput!]
  delete: [ReviewWhereUniqueInput!]
  update: [ReviewUpdateWithWhereUniqueWithoutClassReviewedInput!]
  upsert: [ReviewUpsertWithWhereUniqueWithoutClassReviewedInput!]
}

input ReviewUpdateManyWithoutReviewerInput {
  create: [ReviewCreateWithoutReviewerInput!]
  connect: [ReviewWhereUniqueInput!]
  disconnect: [ReviewWhereUniqueInput!]
  delete: [ReviewWhereUniqueInput!]
  update: [ReviewUpdateWithWhereUniqueWithoutReviewerInput!]
  upsert: [ReviewUpsertWithWhereUniqueWithoutReviewerInput!]
}

input ReviewUpdateOneWithoutVotesInput {
  create: ReviewCreateWithoutVotesInput
  connect: ReviewWhereUniqueInput
  delete: Boolean
  update: ReviewUpdateWithoutVotesDataInput
  upsert: ReviewUpsertWithoutVotesInput
}

input ReviewUpdateWithoutClassReviewedDataInput {
  score: Int
  useful: ReviewUseful
  easy: ReviewEasy
  description: String
  anonymous: Boolean
  recommended: Boolean
  reviewer: UserUpdateOneWithoutReviewsInput
  votes: ReviewVotesUpdateManyWithoutReviewInput
}

input ReviewUpdateWithoutReviewerDataInput {
  score: Int
  useful: ReviewUseful
  easy: ReviewEasy
  description: String
  anonymous: Boolean
  recommended: Boolean
  classReviewed: UfvClassUpdateOneWithoutReviewsInput
  votes: ReviewVotesUpdateManyWithoutReviewInput
}

input ReviewUpdateWithoutVotesDataInput {
  score: Int
  useful: ReviewUseful
  easy: ReviewEasy
  description: String
  anonymous: Boolean
  recommended: Boolean
  classReviewed: UfvClassUpdateOneWithoutReviewsInput
  reviewer: UserUpdateOneWithoutReviewsInput
}

input ReviewUpdateWithWhereUniqueWithoutClassReviewedInput {
  where: ReviewWhereUniqueInput!
  data: ReviewUpdateWithoutClassReviewedDataInput!
}

input ReviewUpdateWithWhereUniqueWithoutReviewerInput {
  where: ReviewWhereUniqueInput!
  data: ReviewUpdateWithoutReviewerDataInput!
}

input ReviewUpsertWithoutVotesInput {
  update: ReviewUpdateWithoutVotesDataInput!
  create: ReviewCreateWithoutVotesInput!
}

input ReviewUpsertWithWhereUniqueWithoutClassReviewedInput {
  where: ReviewWhereUniqueInput!
  update: ReviewUpdateWithoutClassReviewedDataInput!
  create: ReviewCreateWithoutClassReviewedInput!
}

input ReviewUpsertWithWhereUniqueWithoutReviewerInput {
  where: ReviewWhereUniqueInput!
  update: ReviewUpdateWithoutReviewerDataInput!
  create: ReviewCreateWithoutReviewerInput!
}

enum ReviewUseful {
  U0
  U1
  U2
  U3
  U4
  U5
}

type ReviewVotes implements Node {
  id: ID!
  review(where: ReviewWhereInput): Review!
  user(where: UserWhereInput): User!
  type: ReviewVotesTypes!
}

"""A connection to a list of items."""
type ReviewVotesConnection {
  """Information to aid in pagination."""
  pageInfo: PageInfo!

  """A list of edges."""
  edges: [ReviewVotesEdge]!
  aggregate: AggregateReviewVotes!
}

input ReviewVotesCreateInput {
  type: ReviewVotesTypes!
  review: ReviewCreateOneWithoutVotesInput!
  user: UserCreateOneWithoutVotesInput!
}

input ReviewVotesCreateManyWithoutReviewInput {
  create: [ReviewVotesCreateWithoutReviewInput!]
  connect: [ReviewVotesWhereUniqueInput!]
}

input ReviewVotesCreateManyWithoutUserInput {
  create: [ReviewVotesCreateWithoutUserInput!]
  connect: [ReviewVotesWhereUniqueInput!]
}

input ReviewVotesCreateWithoutReviewInput {
  type: ReviewVotesTypes!
  user: UserCreateOneWithoutVotesInput!
}

input ReviewVotesCreateWithoutUserInput {
  type: ReviewVotesTypes!
  review: ReviewCreateOneWithoutVotesInput!
}

"""An edge in a connection."""
type ReviewVotesEdge {
  """The item at the end of the edge."""
  node: ReviewVotes!

  """A cursor for use in pagination."""
  cursor: String!
}

enum ReviewVotesOrderByInput {
  id_ASC
  id_DESC
  type_ASC
  type_DESC
  updatedAt_ASC
  updatedAt_DESC
  createdAt_ASC
  createdAt_DESC
}

type ReviewVotesPreviousValues {
  id: ID!
  type: ReviewVotesTypes!
}

type ReviewVotesSubscriptionPayload {
  mutation: MutationType!
  node: ReviewVotes
  updatedFields: [String!]
  previousValues: ReviewVotesPreviousValues
}

input ReviewVotesSubscriptionWhereInput {
  """Logical AND on all given filters."""
  AND: [ReviewVotesSubscriptionWhereInput!]

  """Logical OR on all given filters."""
  OR: [ReviewVotesSubscriptionWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [ReviewVotesSubscriptionWhereInput!]

  """
  The subscription event gets dispatched when it's listed in mutation_in
  """
  mutation_in: [MutationType!]

  """
  The subscription event gets only dispatched when one of the updated fields names is included in this list
  """
  updatedFields_contains: String

  """
  The subscription event gets only dispatched when all of the field names included in this list have been updated
  """
  updatedFields_contains_every: [String!]

  """
  The subscription event gets only dispatched when some of the field names included in this list have been updated
  """
  updatedFields_contains_some: [String!]
  node: ReviewVotesWhereInput
}

enum ReviewVotesTypes {
  Agree
  Disagree
}

input ReviewVotesUpdateInput {
  type: ReviewVotesTypes
  review: ReviewUpdateOneWithoutVotesInput
  user: UserUpdateOneWithoutVotesInput
}

input ReviewVotesUpdateManyWithoutReviewInput {
  create: [ReviewVotesCreateWithoutReviewInput!]
  connect: [ReviewVotesWhereUniqueInput!]
  disconnect: [ReviewVotesWhereUniqueInput!]
  delete: [ReviewVotesWhereUniqueInput!]
  update: [ReviewVotesUpdateWithWhereUniqueWithoutReviewInput!]
  upsert: [ReviewVotesUpsertWithWhereUniqueWithoutReviewInput!]
}

input ReviewVotesUpdateManyWithoutUserInput {
  create: [ReviewVotesCreateWithoutUserInput!]
  connect: [ReviewVotesWhereUniqueInput!]
  disconnect: [ReviewVotesWhereUniqueInput!]
  delete: [ReviewVotesWhereUniqueInput!]
  update: [ReviewVotesUpdateWithWhereUniqueWithoutUserInput!]
  upsert: [ReviewVotesUpsertWithWhereUniqueWithoutUserInput!]
}

input ReviewVotesUpdateWithoutReviewDataInput {
  type: ReviewVotesTypes
  user: UserUpdateOneWithoutVotesInput
}

input ReviewVotesUpdateWithoutUserDataInput {
  type: ReviewVotesTypes
  review: ReviewUpdateOneWithoutVotesInput
}

input ReviewVotesUpdateWithWhereUniqueWithoutReviewInput {
  where: ReviewVotesWhereUniqueInput!
  data: ReviewVotesUpdateWithoutReviewDataInput!
}

input ReviewVotesUpdateWithWhereUniqueWithoutUserInput {
  where: ReviewVotesWhereUniqueInput!
  data: ReviewVotesUpdateWithoutUserDataInput!
}

input ReviewVotesUpsertWithWhereUniqueWithoutReviewInput {
  where: ReviewVotesWhereUniqueInput!
  update: ReviewVotesUpdateWithoutReviewDataInput!
  create: ReviewVotesCreateWithoutReviewInput!
}

input ReviewVotesUpsertWithWhereUniqueWithoutUserInput {
  where: ReviewVotesWhereUniqueInput!
  update: ReviewVotesUpdateWithoutUserDataInput!
  create: ReviewVotesCreateWithoutUserInput!
}

input ReviewVotesWhereInput {
  """Logical AND on all given filters."""
  AND: [ReviewVotesWhereInput!]

  """Logical OR on all given filters."""
  OR: [ReviewVotesWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [ReviewVotesWhereInput!]
  id: ID

  """All values that are not equal to given value."""
  id_not: ID

  """All values that are contained in given list."""
  id_in: [ID!]

  """All values that are not contained in given list."""
  id_not_in: [ID!]

  """All values less than the given value."""
  id_lt: ID

  """All values less than or equal the given value."""
  id_lte: ID

  """All values greater than the given value."""
  id_gt: ID

  """All values greater than or equal the given value."""
  id_gte: ID

  """All values containing the given string."""
  id_contains: ID

  """All values not containing the given string."""
  id_not_contains: ID

  """All values starting with the given string."""
  id_starts_with: ID

  """All values not starting with the given string."""
  id_not_starts_with: ID

  """All values ending with the given string."""
  id_ends_with: ID

  """All values not ending with the given string."""
  id_not_ends_with: ID
  type: ReviewVotesTypes

  """All values that are not equal to given value."""
  type_not: ReviewVotesTypes

  """All values that are contained in given list."""
  type_in: [ReviewVotesTypes!]

  """All values that are not contained in given list."""
  type_not_in: [ReviewVotesTypes!]
  review: ReviewWhereInput
  user: UserWhereInput
}

input ReviewVotesWhereUniqueInput {
  id: ID
}

input ReviewWhereInput {
  """Logical AND on all given filters."""
  AND: [ReviewWhereInput!]

  """Logical OR on all given filters."""
  OR: [ReviewWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [ReviewWhereInput!]
  id: ID

  """All values that are not equal to given value."""
  id_not: ID

  """All values that are contained in given list."""
  id_in: [ID!]

  """All values that are not contained in given list."""
  id_not_in: [ID!]

  """All values less than the given value."""
  id_lt: ID

  """All values less than or equal the given value."""
  id_lte: ID

  """All values greater than the given value."""
  id_gt: ID

  """All values greater than or equal the given value."""
  id_gte: ID

  """All values containing the given string."""
  id_contains: ID

  """All values not containing the given string."""
  id_not_contains: ID

  """All values starting with the given string."""
  id_starts_with: ID

  """All values not starting with the given string."""
  id_not_starts_with: ID

  """All values ending with the given string."""
  id_ends_with: ID

  """All values not ending with the given string."""
  id_not_ends_with: ID
  score: Int

  """All values that are not equal to given value."""
  score_not: Int

  """All values that are contained in given list."""
  score_in: [Int!]

  """All values that are not contained in given list."""
  score_not_in: [Int!]

  """All values less than the given value."""
  score_lt: Int

  """All values less than or equal the given value."""
  score_lte: Int

  """All values greater than the given value."""
  score_gt: Int

  """All values greater than or equal the given value."""
  score_gte: Int
  useful: ReviewUseful

  """All values that are not equal to given value."""
  useful_not: ReviewUseful

  """All values that are contained in given list."""
  useful_in: [ReviewUseful!]

  """All values that are not contained in given list."""
  useful_not_in: [ReviewUseful!]
  easy: ReviewEasy

  """All values that are not equal to given value."""
  easy_not: ReviewEasy

  """All values that are contained in given list."""
  easy_in: [ReviewEasy!]

  """All values that are not contained in given list."""
  easy_not_in: [ReviewEasy!]
  description: String

  """All values that are not equal to given value."""
  description_not: String

  """All values that are contained in given list."""
  description_in: [String!]

  """All values that are not contained in given list."""
  description_not_in: [String!]

  """All values less than the given value."""
  description_lt: String

  """All values less than or equal the given value."""
  description_lte: String

  """All values greater than the given value."""
  description_gt: String

  """All values greater than or equal the given value."""
  description_gte: String

  """All values containing the given string."""
  description_contains: String

  """All values not containing the given string."""
  description_not_contains: String

  """All values starting with the given string."""
  description_starts_with: String

  """All values not starting with the given string."""
  description_not_starts_with: String

  """All values ending with the given string."""
  description_ends_with: String

  """All values not ending with the given string."""
  description_not_ends_with: String
  anonymous: Boolean

  """All values that are not equal to given value."""
  anonymous_not: Boolean
  recommended: Boolean

  """All values that are not equal to given value."""
  recommended_not: Boolean
  createdAt: DateTime

  """All values that are not equal to given value."""
  createdAt_not: DateTime

  """All values that are contained in given list."""
  createdAt_in: [DateTime!]

  """All values that are not contained in given list."""
  createdAt_not_in: [DateTime!]

  """All values less than the given value."""
  createdAt_lt: DateTime

  """All values less than or equal the given value."""
  createdAt_lte: DateTime

  """All values greater than the given value."""
  createdAt_gt: DateTime

  """All values greater than or equal the given value."""
  createdAt_gte: DateTime
  updatedAt: DateTime

  """All values that are not equal to given value."""
  updatedAt_not: DateTime

  """All values that are contained in given list."""
  updatedAt_in: [DateTime!]

  """All values that are not contained in given list."""
  updatedAt_not_in: [DateTime!]

  """All values less than the given value."""
  updatedAt_lt: DateTime

  """All values less than or equal the given value."""
  updatedAt_lte: DateTime

  """All values greater than the given value."""
  updatedAt_gt: DateTime

  """All values greater than or equal the given value."""
  updatedAt_gte: DateTime
  classReviewed: UfvClassWhereInput
  reviewer: UserWhereInput
  votes_every: ReviewVotesWhereInput
  votes_some: ReviewVotesWhereInput
  votes_none: ReviewVotesWhereInput
}

input ReviewWhereUniqueInput {
  id: ID
}

type Subscription {
  user(where: UserSubscriptionWhereInput): UserSubscriptionPayload
  reviewVotes(where: ReviewVotesSubscriptionWhereInput): ReviewVotesSubscriptionPayload
  review(where: ReviewSubscriptionWhereInput): ReviewSubscriptionPayload
  ufvClass(where: UfvClassSubscriptionWhereInput): UfvClassSubscriptionPayload
}

type UfvClass implements Node {
  id: ID!
  cod: String!
  name: String!
  optional: Boolean!
  department: Department!
  useful: Float!
  easy: Float!
  recommended: Int!
  reviews(where: ReviewWhereInput, orderBy: ReviewOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Review!]
}

"""A connection to a list of items."""
type UfvClassConnection {
  """Information to aid in pagination."""
  pageInfo: PageInfo!

  """A list of edges."""
  edges: [UfvClassEdge]!
  aggregate: AggregateUfvClass!
}

input UfvClassCreateInput {
  cod: String!
  name: String!
  optional: Boolean!
  department: Department!
  useful: Float
  easy: Float
  recommended: Int
  reviews: ReviewCreateManyWithoutClassReviewedInput
}

input UfvClassCreateOneWithoutReviewsInput {
  create: UfvClassCreateWithoutReviewsInput
  connect: UfvClassWhereUniqueInput
}

input UfvClassCreateWithoutReviewsInput {
  cod: String!
  name: String!
  optional: Boolean!
  department: Department!
  useful: Float
  easy: Float
  recommended: Int
}

"""An edge in a connection."""
type UfvClassEdge {
  """The item at the end of the edge."""
  node: UfvClass!

  """A cursor for use in pagination."""
  cursor: String!
}

enum UfvClassOrderByInput {
  id_ASC
  id_DESC
  cod_ASC
  cod_DESC
  name_ASC
  name_DESC
  optional_ASC
  optional_DESC
  department_ASC
  department_DESC
  useful_ASC
  useful_DESC
  easy_ASC
  easy_DESC
  recommended_ASC
  recommended_DESC
  updatedAt_ASC
  updatedAt_DESC
  createdAt_ASC
  createdAt_DESC
}

type UfvClassPreviousValues {
  id: ID!
  cod: String!
  name: String!
  optional: Boolean!
  department: Department!
  useful: Float!
  easy: Float!
  recommended: Int!
}

type UfvClassSubscriptionPayload {
  mutation: MutationType!
  node: UfvClass
  updatedFields: [String!]
  previousValues: UfvClassPreviousValues
}

input UfvClassSubscriptionWhereInput {
  """Logical AND on all given filters."""
  AND: [UfvClassSubscriptionWhereInput!]

  """Logical OR on all given filters."""
  OR: [UfvClassSubscriptionWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [UfvClassSubscriptionWhereInput!]

  """
  The subscription event gets dispatched when it's listed in mutation_in
  """
  mutation_in: [MutationType!]

  """
  The subscription event gets only dispatched when one of the updated fields names is included in this list
  """
  updatedFields_contains: String

  """
  The subscription event gets only dispatched when all of the field names included in this list have been updated
  """
  updatedFields_contains_every: [String!]

  """
  The subscription event gets only dispatched when some of the field names included in this list have been updated
  """
  updatedFields_contains_some: [String!]
  node: UfvClassWhereInput
}

input UfvClassUpdateInput {
  cod: String
  name: String
  optional: Boolean
  department: Department
  useful: Float
  easy: Float
  recommended: Int
  reviews: ReviewUpdateManyWithoutClassReviewedInput
}

input UfvClassUpdateOneWithoutReviewsInput {
  create: UfvClassCreateWithoutReviewsInput
  connect: UfvClassWhereUniqueInput
  delete: Boolean
  update: UfvClassUpdateWithoutReviewsDataInput
  upsert: UfvClassUpsertWithoutReviewsInput
}

input UfvClassUpdateWithoutReviewsDataInput {
  cod: String
  name: String
  optional: Boolean
  department: Department
  useful: Float
  easy: Float
  recommended: Int
}

input UfvClassUpsertWithoutReviewsInput {
  update: UfvClassUpdateWithoutReviewsDataInput!
  create: UfvClassCreateWithoutReviewsInput!
}

input UfvClassWhereInput {
  """Logical AND on all given filters."""
  AND: [UfvClassWhereInput!]

  """Logical OR on all given filters."""
  OR: [UfvClassWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [UfvClassWhereInput!]
  id: ID

  """All values that are not equal to given value."""
  id_not: ID

  """All values that are contained in given list."""
  id_in: [ID!]

  """All values that are not contained in given list."""
  id_not_in: [ID!]

  """All values less than the given value."""
  id_lt: ID

  """All values less than or equal the given value."""
  id_lte: ID

  """All values greater than the given value."""
  id_gt: ID

  """All values greater than or equal the given value."""
  id_gte: ID

  """All values containing the given string."""
  id_contains: ID

  """All values not containing the given string."""
  id_not_contains: ID

  """All values starting with the given string."""
  id_starts_with: ID

  """All values not starting with the given string."""
  id_not_starts_with: ID

  """All values ending with the given string."""
  id_ends_with: ID

  """All values not ending with the given string."""
  id_not_ends_with: ID
  cod: String

  """All values that are not equal to given value."""
  cod_not: String

  """All values that are contained in given list."""
  cod_in: [String!]

  """All values that are not contained in given list."""
  cod_not_in: [String!]

  """All values less than the given value."""
  cod_lt: String

  """All values less than or equal the given value."""
  cod_lte: String

  """All values greater than the given value."""
  cod_gt: String

  """All values greater than or equal the given value."""
  cod_gte: String

  """All values containing the given string."""
  cod_contains: String

  """All values not containing the given string."""
  cod_not_contains: String

  """All values starting with the given string."""
  cod_starts_with: String

  """All values not starting with the given string."""
  cod_not_starts_with: String

  """All values ending with the given string."""
  cod_ends_with: String

  """All values not ending with the given string."""
  cod_not_ends_with: String
  name: String

  """All values that are not equal to given value."""
  name_not: String

  """All values that are contained in given list."""
  name_in: [String!]

  """All values that are not contained in given list."""
  name_not_in: [String!]

  """All values less than the given value."""
  name_lt: String

  """All values less than or equal the given value."""
  name_lte: String

  """All values greater than the given value."""
  name_gt: String

  """All values greater than or equal the given value."""
  name_gte: String

  """All values containing the given string."""
  name_contains: String

  """All values not containing the given string."""
  name_not_contains: String

  """All values starting with the given string."""
  name_starts_with: String

  """All values not starting with the given string."""
  name_not_starts_with: String

  """All values ending with the given string."""
  name_ends_with: String

  """All values not ending with the given string."""
  name_not_ends_with: String
  optional: Boolean

  """All values that are not equal to given value."""
  optional_not: Boolean
  department: Department

  """All values that are not equal to given value."""
  department_not: Department

  """All values that are contained in given list."""
  department_in: [Department!]

  """All values that are not contained in given list."""
  department_not_in: [Department!]
  useful: Float

  """All values that are not equal to given value."""
  useful_not: Float

  """All values that are contained in given list."""
  useful_in: [Float!]

  """All values that are not contained in given list."""
  useful_not_in: [Float!]

  """All values less than the given value."""
  useful_lt: Float

  """All values less than or equal the given value."""
  useful_lte: Float

  """All values greater than the given value."""
  useful_gt: Float

  """All values greater than or equal the given value."""
  useful_gte: Float
  easy: Float

  """All values that are not equal to given value."""
  easy_not: Float

  """All values that are contained in given list."""
  easy_in: [Float!]

  """All values that are not contained in given list."""
  easy_not_in: [Float!]

  """All values less than the given value."""
  easy_lt: Float

  """All values less than or equal the given value."""
  easy_lte: Float

  """All values greater than the given value."""
  easy_gt: Float

  """All values greater than or equal the given value."""
  easy_gte: Float
  recommended: Int

  """All values that are not equal to given value."""
  recommended_not: Int

  """All values that are contained in given list."""
  recommended_in: [Int!]

  """All values that are not contained in given list."""
  recommended_not_in: [Int!]

  """All values less than the given value."""
  recommended_lt: Int

  """All values less than or equal the given value."""
  recommended_lte: Int

  """All values greater than the given value."""
  recommended_gt: Int

  """All values greater than or equal the given value."""
  recommended_gte: Int
  reviews_every: ReviewWhereInput
  reviews_some: ReviewWhereInput
  reviews_none: ReviewWhereInput
}

input UfvClassWhereUniqueInput {
  id: ID
  cod: String
}

enum UfvCourses {
  Agronegocio
  Agronomia
  Cooperativismo
  Engenharia_Agricola_e_Ambiental
  Engenharia_Florestal
  Zootecnia
  Bioquimica
  Ciencias_Biologicas__Bacharelado_Licenciatura_
  Educacao_Fisica__Bacharelado_Licenciatura_
  Enfermagem
  Licenciatura_em_Ciencias_Biologicas__Noturno_
  Medicina
  Medicina_Veterinaria
  Nutricao
  Arquitetura_e_Urbanismo
  Ciencia_da_Computacaoo
  Ciencia_e_Tecnologia_de_Laticinios
  Engenharia_Ambiental
  Engenharia_Civil
  Engenharia_de_Agrimensura_e_Cartografica
  Engenharia_de_Alimentos
  Engenharia_de_Producao
  Engenharia_Eletrica
  Engenharia_Mecanica
  Engenharia_Quimica
  Fisica__Bacharelado_Licenciatura_
  Licenciatura_em_Fisica
  Licenciatura_em_Matematica
  Licenciatura_em_Quimica
  Matematica__Bacharelado_Licenciatura_
  Quimica__Bacharelado_Licenciatura_
  Administracao
  Ciencias_Contabeis
  Ciencias_Economicas
  Ciencias_Sociais__Bacharelado_Licenciatura_
  Comunicacao_Social___Jornalismo
  Danca__Bacharelado_Licenciatura_
  Direito
  Economia_Domestica
  Educacao_do_Campo
  Educacao_Infantil
  Geografia__Bacharelado_Licenciatura_
  Historia__Bacharelado_Licenciatura_
  Letras
  Pedagogia
  Secretariado_Executivo_Trilingue___Portugues__Frances_e_Ingles
  Servico_Social
}

enum UfvYears {
  Y19201
  Y19211
  Y19221
  Y19231
  Y19241
  Y19251
  Y19261
  Y19271
  Y19281
  Y19291
  Y19301
  Y19311
  Y19321
  Y19331
  Y19341
  Y19351
  Y19361
  Y19371
  Y19381
  Y19391
  Y19401
  Y19411
  Y19421
  Y19431
  Y19441
  Y19451
  Y19461
  Y19471
  Y19481
  Y19491
  Y19501
  Y19511
  Y19521
  Y19531
  Y19541
  Y19551
  Y19561
  Y19571
  Y19581
  Y19591
  Y19601
  Y19611
  Y19621
  Y19631
  Y19641
  Y19651
  Y19661
  Y19671
  Y19681
  Y19691
  Y19701
  Y19711
  Y19721
  Y19731
  Y19741
  Y19751
  Y19761
  Y19771
  Y19781
  Y19791
  Y19801
  Y19811
  Y19821
  Y19831
  Y19841
  Y19851
  Y19861
  Y19871
  Y19881
  Y19891
  Y19901
  Y19911
  Y19921
  Y19931
  Y19941
  Y19951
  Y19961
  Y19971
  Y19981
  Y19991
  Y20001
  Y20011
  Y20021
  Y20031
  Y20041
  Y20051
  Y20061
  Y20071
  Y20081
  Y20091
  Y20101
  Y20111
  Y20121
  Y20131
  Y20141
  Y20151
  Y20161
  Y20171
  Y20181
}

type User implements Node {
  id: ID!
  facebookId: String!
  name: String!
  course: UfvCourses!
  year: UfvYears!
  rate: UserRate!
  reviews(where: ReviewWhereInput, orderBy: ReviewOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Review!]
  votes(where: ReviewVotesWhereInput, orderBy: ReviewVotesOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [ReviewVotes!]
  createdAt: DateTime!
  updatedAt: DateTime!
}

"""A connection to a list of items."""
type UserConnection {
  """Information to aid in pagination."""
  pageInfo: PageInfo!

  """A list of edges."""
  edges: [UserEdge]!
  aggregate: AggregateUser!
}

input UserCreateInput {
  facebookId: String!
  name: String!
  course: UfvCourses!
  year: UfvYears!
  rate: UserRate
  reviews: ReviewCreateManyWithoutReviewerInput
  votes: ReviewVotesCreateManyWithoutUserInput
}

input UserCreateOneWithoutReviewsInput {
  create: UserCreateWithoutReviewsInput
  connect: UserWhereUniqueInput
}

input UserCreateOneWithoutVotesInput {
  create: UserCreateWithoutVotesInput
  connect: UserWhereUniqueInput
}

input UserCreateWithoutReviewsInput {
  facebookId: String!
  name: String!
  course: UfvCourses!
  year: UfvYears!
  rate: UserRate
  votes: ReviewVotesCreateManyWithoutUserInput
}

input UserCreateWithoutVotesInput {
  facebookId: String!
  name: String!
  course: UfvCourses!
  year: UfvYears!
  rate: UserRate
  reviews: ReviewCreateManyWithoutReviewerInput
}

"""An edge in a connection."""
type UserEdge {
  """The item at the end of the edge."""
  node: User!

  """A cursor for use in pagination."""
  cursor: String!
}

enum UserOrderByInput {
  id_ASC
  id_DESC
  facebookId_ASC
  facebookId_DESC
  name_ASC
  name_DESC
  course_ASC
  course_DESC
  year_ASC
  year_DESC
  rate_ASC
  rate_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
}

type UserPreviousValues {
  id: ID!
  facebookId: String!
  name: String!
  course: UfvCourses!
  year: UfvYears!
  rate: UserRate!
  createdAt: DateTime!
  updatedAt: DateTime!
}

enum UserRate {
  Iniciante
  Confiavel
}

type UserSubscriptionPayload {
  mutation: MutationType!
  node: User
  updatedFields: [String!]
  previousValues: UserPreviousValues
}

input UserSubscriptionWhereInput {
  """Logical AND on all given filters."""
  AND: [UserSubscriptionWhereInput!]

  """Logical OR on all given filters."""
  OR: [UserSubscriptionWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [UserSubscriptionWhereInput!]

  """
  The subscription event gets dispatched when it's listed in mutation_in
  """
  mutation_in: [MutationType!]

  """
  The subscription event gets only dispatched when one of the updated fields names is included in this list
  """
  updatedFields_contains: String

  """
  The subscription event gets only dispatched when all of the field names included in this list have been updated
  """
  updatedFields_contains_every: [String!]

  """
  The subscription event gets only dispatched when some of the field names included in this list have been updated
  """
  updatedFields_contains_some: [String!]
  node: UserWhereInput
}

input UserUpdateInput {
  facebookId: String
  name: String
  course: UfvCourses
  year: UfvYears
  rate: UserRate
  reviews: ReviewUpdateManyWithoutReviewerInput
  votes: ReviewVotesUpdateManyWithoutUserInput
}

input UserUpdateOneWithoutReviewsInput {
  create: UserCreateWithoutReviewsInput
  connect: UserWhereUniqueInput
  delete: Boolean
  update: UserUpdateWithoutReviewsDataInput
  upsert: UserUpsertWithoutReviewsInput
}

input UserUpdateOneWithoutVotesInput {
  create: UserCreateWithoutVotesInput
  connect: UserWhereUniqueInput
  delete: Boolean
  update: UserUpdateWithoutVotesDataInput
  upsert: UserUpsertWithoutVotesInput
}

input UserUpdateWithoutReviewsDataInput {
  facebookId: String
  name: String
  course: UfvCourses
  year: UfvYears
  rate: UserRate
  votes: ReviewVotesUpdateManyWithoutUserInput
}

input UserUpdateWithoutVotesDataInput {
  facebookId: String
  name: String
  course: UfvCourses
  year: UfvYears
  rate: UserRate
  reviews: ReviewUpdateManyWithoutReviewerInput
}

input UserUpsertWithoutReviewsInput {
  update: UserUpdateWithoutReviewsDataInput!
  create: UserCreateWithoutReviewsInput!
}

input UserUpsertWithoutVotesInput {
  update: UserUpdateWithoutVotesDataInput!
  create: UserCreateWithoutVotesInput!
}

input UserWhereInput {
  """Logical AND on all given filters."""
  AND: [UserWhereInput!]

  """Logical OR on all given filters."""
  OR: [UserWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [UserWhereInput!]
  id: ID

  """All values that are not equal to given value."""
  id_not: ID

  """All values that are contained in given list."""
  id_in: [ID!]

  """All values that are not contained in given list."""
  id_not_in: [ID!]

  """All values less than the given value."""
  id_lt: ID

  """All values less than or equal the given value."""
  id_lte: ID

  """All values greater than the given value."""
  id_gt: ID

  """All values greater than or equal the given value."""
  id_gte: ID

  """All values containing the given string."""
  id_contains: ID

  """All values not containing the given string."""
  id_not_contains: ID

  """All values starting with the given string."""
  id_starts_with: ID

  """All values not starting with the given string."""
  id_not_starts_with: ID

  """All values ending with the given string."""
  id_ends_with: ID

  """All values not ending with the given string."""
  id_not_ends_with: ID
  facebookId: String

  """All values that are not equal to given value."""
  facebookId_not: String

  """All values that are contained in given list."""
  facebookId_in: [String!]

  """All values that are not contained in given list."""
  facebookId_not_in: [String!]

  """All values less than the given value."""
  facebookId_lt: String

  """All values less than or equal the given value."""
  facebookId_lte: String

  """All values greater than the given value."""
  facebookId_gt: String

  """All values greater than or equal the given value."""
  facebookId_gte: String

  """All values containing the given string."""
  facebookId_contains: String

  """All values not containing the given string."""
  facebookId_not_contains: String

  """All values starting with the given string."""
  facebookId_starts_with: String

  """All values not starting with the given string."""
  facebookId_not_starts_with: String

  """All values ending with the given string."""
  facebookId_ends_with: String

  """All values not ending with the given string."""
  facebookId_not_ends_with: String
  name: String

  """All values that are not equal to given value."""
  name_not: String

  """All values that are contained in given list."""
  name_in: [String!]

  """All values that are not contained in given list."""
  name_not_in: [String!]

  """All values less than the given value."""
  name_lt: String

  """All values less than or equal the given value."""
  name_lte: String

  """All values greater than the given value."""
  name_gt: String

  """All values greater than or equal the given value."""
  name_gte: String

  """All values containing the given string."""
  name_contains: String

  """All values not containing the given string."""
  name_not_contains: String

  """All values starting with the given string."""
  name_starts_with: String

  """All values not starting with the given string."""
  name_not_starts_with: String

  """All values ending with the given string."""
  name_ends_with: String

  """All values not ending with the given string."""
  name_not_ends_with: String
  course: UfvCourses

  """All values that are not equal to given value."""
  course_not: UfvCourses

  """All values that are contained in given list."""
  course_in: [UfvCourses!]

  """All values that are not contained in given list."""
  course_not_in: [UfvCourses!]
  year: UfvYears

  """All values that are not equal to given value."""
  year_not: UfvYears

  """All values that are contained in given list."""
  year_in: [UfvYears!]

  """All values that are not contained in given list."""
  year_not_in: [UfvYears!]
  rate: UserRate

  """All values that are not equal to given value."""
  rate_not: UserRate

  """All values that are contained in given list."""
  rate_in: [UserRate!]

  """All values that are not contained in given list."""
  rate_not_in: [UserRate!]
  createdAt: DateTime

  """All values that are not equal to given value."""
  createdAt_not: DateTime

  """All values that are contained in given list."""
  createdAt_in: [DateTime!]

  """All values that are not contained in given list."""
  createdAt_not_in: [DateTime!]

  """All values less than the given value."""
  createdAt_lt: DateTime

  """All values less than or equal the given value."""
  createdAt_lte: DateTime

  """All values greater than the given value."""
  createdAt_gt: DateTime

  """All values greater than or equal the given value."""
  createdAt_gte: DateTime
  updatedAt: DateTime

  """All values that are not equal to given value."""
  updatedAt_not: DateTime

  """All values that are contained in given list."""
  updatedAt_in: [DateTime!]

  """All values that are not contained in given list."""
  updatedAt_not_in: [DateTime!]

  """All values less than the given value."""
  updatedAt_lt: DateTime

  """All values less than or equal the given value."""
  updatedAt_lte: DateTime

  """All values greater than the given value."""
  updatedAt_gt: DateTime

  """All values greater than or equal the given value."""
  updatedAt_gte: DateTime
  reviews_every: ReviewWhereInput
  reviews_some: ReviewWhereInput
  reviews_none: ReviewWhereInput
  votes_every: ReviewVotesWhereInput
  votes_some: ReviewVotesWhereInput
  votes_none: ReviewVotesWhereInput
}

input UserWhereUniqueInput {
  id: ID
  facebookId: String
}
`

export const Prisma = makePrismaBindingClass<BindingConstructor<Prisma>>({typeDefs})

/**
 * Types
*/

export type ReviewVotesOrderByInput =   'id_ASC' |
  'id_DESC' |
  'type_ASC' |
  'type_DESC' |
  'updatedAt_ASC' |
  'updatedAt_DESC' |
  'createdAt_ASC' |
  'createdAt_DESC'

export type Department =   'Depto__de_Economia_Rural' |
  'Depto__de_Engenharia_Agricola' |
  'Depto__de_Engenharia_Florestal' |
  'Depto__de_Fitopatologia' |
  'Depto__de_Fitotecnia' |
  'Depto__de_Solos' |
  'Depto__de_Zootecnia' |
  'Depto__de_Biologia_Animal' |
  'Depto__de_Biologia_Geral' |
  'Depto__de_Biologia_Vegetal' |
  'Depto__de_Bioquimica_e_Biologia_Molecular' |
  'Depto__de_Educacao_Fisica' |
  'Depto__de_Entomologia' |
  'Depto__de_Microbiologia' |
  'Depto__de_Medicina_e_Enfermagem' |
  'Depto__de_Nutricaoo_e_Saude' |
  'Depto__de_Veterinaria' |
  'Depto__de_Arquitetura_e_Urbanismo' |
  'Depto__de_Engenharia_Civil' |
  'Depto__de_Engenharia_Eletrica' |
  'Depto__de_Engenharia_de_Producao_e_Mecanica' |
  'Depto__de_Estatistica' |
  'Depto__de_Fisica' |
  'Depto__de_Informatica' |
  'Depto__de_Matematica' |
  'Depto__de_Quimica' |
  'Depto__de_Tecnologia_de_Alimentos' |
  'Depto__de_Administracao_e_Contabilidade' |
  'Depto__de_Artes_e_Humanidades' |
  'Depto__de_Ciencias_Sociais' |
  'Depto__de_Comunicacao_Social' |
  'Depto__de_Direito' |
  'Depto__de_Economia' |
  'Depto__de_Economia_Domestica' |
  'Depto__de_Educacao' |
  'Depto__de_Geografia' |
  'Depto__de_Historia' |
  'Depto__de_Letras'

export type ReviewOrderByInput =   'id_ASC' |
  'id_DESC' |
  'score_ASC' |
  'score_DESC' |
  'useful_ASC' |
  'useful_DESC' |
  'easy_ASC' |
  'easy_DESC' |
  'description_ASC' |
  'description_DESC' |
  'anonymous_ASC' |
  'anonymous_DESC' |
  'recommended_ASC' |
  'recommended_DESC' |
  'createdAt_ASC' |
  'createdAt_DESC' |
  'updatedAt_ASC' |
  'updatedAt_DESC'

export type UfvCourses =   'Agronegocio' |
  'Agronomia' |
  'Cooperativismo' |
  'Engenharia_Agricola_e_Ambiental' |
  'Engenharia_Florestal' |
  'Zootecnia' |
  'Bioquimica' |
  'Ciencias_Biologicas__Bacharelado_Licenciatura_' |
  'Educacao_Fisica__Bacharelado_Licenciatura_' |
  'Enfermagem' |
  'Licenciatura_em_Ciencias_Biologicas__Noturno_' |
  'Medicina' |
  'Medicina_Veterinaria' |
  'Nutricao' |
  'Arquitetura_e_Urbanismo' |
  'Ciencia_da_Computacaoo' |
  'Ciencia_e_Tecnologia_de_Laticinios' |
  'Engenharia_Ambiental' |
  'Engenharia_Civil' |
  'Engenharia_de_Agrimensura_e_Cartografica' |
  'Engenharia_de_Alimentos' |
  'Engenharia_de_Producao' |
  'Engenharia_Eletrica' |
  'Engenharia_Mecanica' |
  'Engenharia_Quimica' |
  'Fisica__Bacharelado_Licenciatura_' |
  'Licenciatura_em_Fisica' |
  'Licenciatura_em_Matematica' |
  'Licenciatura_em_Quimica' |
  'Matematica__Bacharelado_Licenciatura_' |
  'Quimica__Bacharelado_Licenciatura_' |
  'Administracao' |
  'Ciencias_Contabeis' |
  'Ciencias_Economicas' |
  'Ciencias_Sociais__Bacharelado_Licenciatura_' |
  'Comunicacao_Social___Jornalismo' |
  'Danca__Bacharelado_Licenciatura_' |
  'Direito' |
  'Economia_Domestica' |
  'Educacao_do_Campo' |
  'Educacao_Infantil' |
  'Geografia__Bacharelado_Licenciatura_' |
  'Historia__Bacharelado_Licenciatura_' |
  'Letras' |
  'Pedagogia' |
  'Secretariado_Executivo_Trilingue___Portugues__Frances_e_Ingles' |
  'Servico_Social'

export type ReviewVotesTypes =   'Agree' |
  'Disagree'

export type UserOrderByInput =   'id_ASC' |
  'id_DESC' |
  'facebookId_ASC' |
  'facebookId_DESC' |
  'name_ASC' |
  'name_DESC' |
  'course_ASC' |
  'course_DESC' |
  'year_ASC' |
  'year_DESC' |
  'rate_ASC' |
  'rate_DESC' |
  'createdAt_ASC' |
  'createdAt_DESC' |
  'updatedAt_ASC' |
  'updatedAt_DESC'

export type ReviewEasy =   'E0' |
  'E1' |
  'E2' |
  'E3' |
  'E4' |
  'E5'

export type ReviewUseful =   'U0' |
  'U1' |
  'U2' |
  'U3' |
  'U4' |
  'U5'

export type UfvYears =   'Y19201' |
  'Y19211' |
  'Y19221' |
  'Y19231' |
  'Y19241' |
  'Y19251' |
  'Y19261' |
  'Y19271' |
  'Y19281' |
  'Y19291' |
  'Y19301' |
  'Y19311' |
  'Y19321' |
  'Y19331' |
  'Y19341' |
  'Y19351' |
  'Y19361' |
  'Y19371' |
  'Y19381' |
  'Y19391' |
  'Y19401' |
  'Y19411' |
  'Y19421' |
  'Y19431' |
  'Y19441' |
  'Y19451' |
  'Y19461' |
  'Y19471' |
  'Y19481' |
  'Y19491' |
  'Y19501' |
  'Y19511' |
  'Y19521' |
  'Y19531' |
  'Y19541' |
  'Y19551' |
  'Y19561' |
  'Y19571' |
  'Y19581' |
  'Y19591' |
  'Y19601' |
  'Y19611' |
  'Y19621' |
  'Y19631' |
  'Y19641' |
  'Y19651' |
  'Y19661' |
  'Y19671' |
  'Y19681' |
  'Y19691' |
  'Y19701' |
  'Y19711' |
  'Y19721' |
  'Y19731' |
  'Y19741' |
  'Y19751' |
  'Y19761' |
  'Y19771' |
  'Y19781' |
  'Y19791' |
  'Y19801' |
  'Y19811' |
  'Y19821' |
  'Y19831' |
  'Y19841' |
  'Y19851' |
  'Y19861' |
  'Y19871' |
  'Y19881' |
  'Y19891' |
  'Y19901' |
  'Y19911' |
  'Y19921' |
  'Y19931' |
  'Y19941' |
  'Y19951' |
  'Y19961' |
  'Y19971' |
  'Y19981' |
  'Y19991' |
  'Y20001' |
  'Y20011' |
  'Y20021' |
  'Y20031' |
  'Y20041' |
  'Y20051' |
  'Y20061' |
  'Y20071' |
  'Y20081' |
  'Y20091' |
  'Y20101' |
  'Y20111' |
  'Y20121' |
  'Y20131' |
  'Y20141' |
  'Y20151' |
  'Y20161' |
  'Y20171' |
  'Y20181'

export type MutationType =   'CREATED' |
  'UPDATED' |
  'DELETED'

export type UfvClassOrderByInput =   'id_ASC' |
  'id_DESC' |
  'cod_ASC' |
  'cod_DESC' |
  'name_ASC' |
  'name_DESC' |
  'optional_ASC' |
  'optional_DESC' |
  'department_ASC' |
  'department_DESC' |
  'useful_ASC' |
  'useful_DESC' |
  'easy_ASC' |
  'easy_DESC' |
  'recommended_ASC' |
  'recommended_DESC' |
  'updatedAt_ASC' |
  'updatedAt_DESC' |
  'createdAt_ASC' |
  'createdAt_DESC'

export type UserRate =   'Iniciante' |
  'Confiavel'

export interface ReviewCreateWithoutVotesInput {
  score?: Int
  useful: ReviewUseful
  easy: ReviewEasy
  description: String
  anonymous: Boolean
  recommended: Boolean
  classReviewed: UfvClassCreateOneWithoutReviewsInput
  reviewer: UserCreateOneWithoutReviewsInput
}

export interface UserWhereInput {
  AND?: UserWhereInput[] | UserWhereInput
  OR?: UserWhereInput[] | UserWhereInput
  NOT?: UserWhereInput[] | UserWhereInput
  id?: ID_Input
  id_not?: ID_Input
  id_in?: ID_Input[] | ID_Input
  id_not_in?: ID_Input[] | ID_Input
  id_lt?: ID_Input
  id_lte?: ID_Input
  id_gt?: ID_Input
  id_gte?: ID_Input
  id_contains?: ID_Input
  id_not_contains?: ID_Input
  id_starts_with?: ID_Input
  id_not_starts_with?: ID_Input
  id_ends_with?: ID_Input
  id_not_ends_with?: ID_Input
  facebookId?: String
  facebookId_not?: String
  facebookId_in?: String[] | String
  facebookId_not_in?: String[] | String
  facebookId_lt?: String
  facebookId_lte?: String
  facebookId_gt?: String
  facebookId_gte?: String
  facebookId_contains?: String
  facebookId_not_contains?: String
  facebookId_starts_with?: String
  facebookId_not_starts_with?: String
  facebookId_ends_with?: String
  facebookId_not_ends_with?: String
  name?: String
  name_not?: String
  name_in?: String[] | String
  name_not_in?: String[] | String
  name_lt?: String
  name_lte?: String
  name_gt?: String
  name_gte?: String
  name_contains?: String
  name_not_contains?: String
  name_starts_with?: String
  name_not_starts_with?: String
  name_ends_with?: String
  name_not_ends_with?: String
  course?: UfvCourses
  course_not?: UfvCourses
  course_in?: UfvCourses[] | UfvCourses
  course_not_in?: UfvCourses[] | UfvCourses
  year?: UfvYears
  year_not?: UfvYears
  year_in?: UfvYears[] | UfvYears
  year_not_in?: UfvYears[] | UfvYears
  rate?: UserRate
  rate_not?: UserRate
  rate_in?: UserRate[] | UserRate
  rate_not_in?: UserRate[] | UserRate
  createdAt?: DateTime
  createdAt_not?: DateTime
  createdAt_in?: DateTime[] | DateTime
  createdAt_not_in?: DateTime[] | DateTime
  createdAt_lt?: DateTime
  createdAt_lte?: DateTime
  createdAt_gt?: DateTime
  createdAt_gte?: DateTime
  updatedAt?: DateTime
  updatedAt_not?: DateTime
  updatedAt_in?: DateTime[] | DateTime
  updatedAt_not_in?: DateTime[] | DateTime
  updatedAt_lt?: DateTime
  updatedAt_lte?: DateTime
  updatedAt_gt?: DateTime
  updatedAt_gte?: DateTime
  reviews_every?: ReviewWhereInput
  reviews_some?: ReviewWhereInput
  reviews_none?: ReviewWhereInput
  votes_every?: ReviewVotesWhereInput
  votes_some?: ReviewVotesWhereInput
  votes_none?: ReviewVotesWhereInput
}

export interface UfvClassCreateOneWithoutReviewsInput {
  create?: UfvClassCreateWithoutReviewsInput
  connect?: UfvClassWhereUniqueInput
}

export interface ReviewUpsertWithWhereUniqueWithoutReviewerInput {
  where: ReviewWhereUniqueInput
  update: ReviewUpdateWithoutReviewerDataInput
  create: ReviewCreateWithoutReviewerInput
}

export interface UfvClassCreateWithoutReviewsInput {
  cod: String
  name: String
  optional: Boolean
  department: Department
  useful?: Float
  easy?: Float
  recommended?: Int
}

export interface ReviewCreateWithoutClassReviewedInput {
  score?: Int
  useful: ReviewUseful
  easy: ReviewEasy
  description: String
  anonymous: Boolean
  recommended: Boolean
  reviewer: UserCreateOneWithoutReviewsInput
  votes?: ReviewVotesCreateManyWithoutReviewInput
}

export interface ReviewVotesCreateManyWithoutReviewInput {
  create?: ReviewVotesCreateWithoutReviewInput[] | ReviewVotesCreateWithoutReviewInput
  connect?: ReviewVotesWhereUniqueInput[] | ReviewVotesWhereUniqueInput
}

export interface UfvClassSubscriptionWhereInput {
  AND?: UfvClassSubscriptionWhereInput[] | UfvClassSubscriptionWhereInput
  OR?: UfvClassSubscriptionWhereInput[] | UfvClassSubscriptionWhereInput
  NOT?: UfvClassSubscriptionWhereInput[] | UfvClassSubscriptionWhereInput
  mutation_in?: MutationType[] | MutationType
  updatedFields_contains?: String
  updatedFields_contains_every?: String[] | String
  updatedFields_contains_some?: String[] | String
  node?: UfvClassWhereInput
}

export interface ReviewVotesCreateWithoutReviewInput {
  type: ReviewVotesTypes
  user: UserCreateOneWithoutVotesInput
}

export interface UserSubscriptionWhereInput {
  AND?: UserSubscriptionWhereInput[] | UserSubscriptionWhereInput
  OR?: UserSubscriptionWhereInput[] | UserSubscriptionWhereInput
  NOT?: UserSubscriptionWhereInput[] | UserSubscriptionWhereInput
  mutation_in?: MutationType[] | MutationType
  updatedFields_contains?: String
  updatedFields_contains_every?: String[] | String
  updatedFields_contains_some?: String[] | String
  node?: UserWhereInput
}

export interface UserCreateOneWithoutVotesInput {
  create?: UserCreateWithoutVotesInput
  connect?: UserWhereUniqueInput
}

export interface ReviewWhereInput {
  AND?: ReviewWhereInput[] | ReviewWhereInput
  OR?: ReviewWhereInput[] | ReviewWhereInput
  NOT?: ReviewWhereInput[] | ReviewWhereInput
  id?: ID_Input
  id_not?: ID_Input
  id_in?: ID_Input[] | ID_Input
  id_not_in?: ID_Input[] | ID_Input
  id_lt?: ID_Input
  id_lte?: ID_Input
  id_gt?: ID_Input
  id_gte?: ID_Input
  id_contains?: ID_Input
  id_not_contains?: ID_Input
  id_starts_with?: ID_Input
  id_not_starts_with?: ID_Input
  id_ends_with?: ID_Input
  id_not_ends_with?: ID_Input
  score?: Int
  score_not?: Int
  score_in?: Int[] | Int
  score_not_in?: Int[] | Int
  score_lt?: Int
  score_lte?: Int
  score_gt?: Int
  score_gte?: Int
  useful?: ReviewUseful
  useful_not?: ReviewUseful
  useful_in?: ReviewUseful[] | ReviewUseful
  useful_not_in?: ReviewUseful[] | ReviewUseful
  easy?: ReviewEasy
  easy_not?: ReviewEasy
  easy_in?: ReviewEasy[] | ReviewEasy
  easy_not_in?: ReviewEasy[] | ReviewEasy
  description?: String
  description_not?: String
  description_in?: String[] | String
  description_not_in?: String[] | String
  description_lt?: String
  description_lte?: String
  description_gt?: String
  description_gte?: String
  description_contains?: String
  description_not_contains?: String
  description_starts_with?: String
  description_not_starts_with?: String
  description_ends_with?: String
  description_not_ends_with?: String
  anonymous?: Boolean
  anonymous_not?: Boolean
  recommended?: Boolean
  recommended_not?: Boolean
  createdAt?: DateTime
  createdAt_not?: DateTime
  createdAt_in?: DateTime[] | DateTime
  createdAt_not_in?: DateTime[] | DateTime
  createdAt_lt?: DateTime
  createdAt_lte?: DateTime
  createdAt_gt?: DateTime
  createdAt_gte?: DateTime
  updatedAt?: DateTime
  updatedAt_not?: DateTime
  updatedAt_in?: DateTime[] | DateTime
  updatedAt_not_in?: DateTime[] | DateTime
  updatedAt_lt?: DateTime
  updatedAt_lte?: DateTime
  updatedAt_gt?: DateTime
  updatedAt_gte?: DateTime
  classReviewed?: UfvClassWhereInput
  reviewer?: UserWhereInput
  votes_every?: ReviewVotesWhereInput
  votes_some?: ReviewVotesWhereInput
  votes_none?: ReviewVotesWhereInput
}

export interface UserCreateWithoutVotesInput {
  facebookId: String
  name: String
  course: UfvCourses
  year: UfvYears
  rate?: UserRate
  reviews?: ReviewCreateManyWithoutReviewerInput
}

export interface ReviewUpdateWithWhereUniqueWithoutClassReviewedInput {
  where: ReviewWhereUniqueInput
  data: ReviewUpdateWithoutClassReviewedDataInput
}

export interface ReviewVotesCreateManyWithoutUserInput {
  create?: ReviewVotesCreateWithoutUserInput[] | ReviewVotesCreateWithoutUserInput
  connect?: ReviewVotesWhereUniqueInput[] | ReviewVotesWhereUniqueInput
}

export interface ReviewVotesWhereUniqueInput {
  id?: ID_Input
}

export interface ReviewVotesCreateWithoutUserInput {
  type: ReviewVotesTypes
  review: ReviewCreateOneWithoutVotesInput
}

export interface UfvClassWhereUniqueInput {
  id?: ID_Input
  cod?: String
}

export interface ReviewCreateOneWithoutVotesInput {
  create?: ReviewCreateWithoutVotesInput
  connect?: ReviewWhereUniqueInput
}

export interface UfvClassUpdateInput {
  cod?: String
  name?: String
  optional?: Boolean
  department?: Department
  useful?: Float
  easy?: Float
  recommended?: Int
  reviews?: ReviewUpdateManyWithoutClassReviewedInput
}

export interface ReviewVotesUpdateManyWithoutUserInput {
  create?: ReviewVotesCreateWithoutUserInput[] | ReviewVotesCreateWithoutUserInput
  connect?: ReviewVotesWhereUniqueInput[] | ReviewVotesWhereUniqueInput
  disconnect?: ReviewVotesWhereUniqueInput[] | ReviewVotesWhereUniqueInput
  delete?: ReviewVotesWhereUniqueInput[] | ReviewVotesWhereUniqueInput
  update?: ReviewVotesUpdateWithWhereUniqueWithoutUserInput[] | ReviewVotesUpdateWithWhereUniqueWithoutUserInput
  upsert?: ReviewVotesUpsertWithWhereUniqueWithoutUserInput[] | ReviewVotesUpsertWithWhereUniqueWithoutUserInput
}

export interface ReviewVotesUpdateInput {
  type?: ReviewVotesTypes
  review?: ReviewUpdateOneWithoutVotesInput
  user?: UserUpdateOneWithoutVotesInput
}

export interface UserCreateOneWithoutReviewsInput {
  create?: UserCreateWithoutReviewsInput
  connect?: UserWhereUniqueInput
}

export interface ReviewUpsertWithoutVotesInput {
  update: ReviewUpdateWithoutVotesDataInput
  create: ReviewCreateWithoutVotesInput
}

export interface UserCreateWithoutReviewsInput {
  facebookId: String
  name: String
  course: UfvCourses
  year: UfvYears
  rate?: UserRate
  votes?: ReviewVotesCreateManyWithoutUserInput
}

export interface UserUpdateWithoutReviewsDataInput {
  facebookId?: String
  name?: String
  course?: UfvCourses
  year?: UfvYears
  rate?: UserRate
  votes?: ReviewVotesUpdateManyWithoutUserInput
}

export interface ReviewVotesCreateInput {
  type: ReviewVotesTypes
  review: ReviewCreateOneWithoutVotesInput
  user: UserCreateOneWithoutVotesInput
}

export interface ReviewUpdateWithoutVotesDataInput {
  score?: Int
  useful?: ReviewUseful
  easy?: ReviewEasy
  description?: String
  anonymous?: Boolean
  recommended?: Boolean
  classReviewed?: UfvClassUpdateOneWithoutReviewsInput
  reviewer?: UserUpdateOneWithoutReviewsInput
}

export interface ReviewCreateInput {
  score?: Int
  useful: ReviewUseful
  easy: ReviewEasy
  description: String
  anonymous: Boolean
  recommended: Boolean
  classReviewed: UfvClassCreateOneWithoutReviewsInput
  reviewer: UserCreateOneWithoutReviewsInput
  votes?: ReviewVotesCreateManyWithoutReviewInput
}

export interface ReviewVotesUpdateWithoutUserDataInput {
  type?: ReviewVotesTypes
  review?: ReviewUpdateOneWithoutVotesInput
}

export interface UfvClassCreateInput {
  cod: String
  name: String
  optional: Boolean
  department: Department
  useful?: Float
  easy?: Float
  recommended?: Int
  reviews?: ReviewCreateManyWithoutClassReviewedInput
}

export interface UserCreateInput {
  facebookId: String
  name: String
  course: UfvCourses
  year: UfvYears
  rate?: UserRate
  reviews?: ReviewCreateManyWithoutReviewerInput
  votes?: ReviewVotesCreateManyWithoutUserInput
}

export interface ReviewCreateManyWithoutClassReviewedInput {
  create?: ReviewCreateWithoutClassReviewedInput[] | ReviewCreateWithoutClassReviewedInput
  connect?: ReviewWhereUniqueInput[] | ReviewWhereUniqueInput
}

export interface ReviewCreateWithoutReviewerInput {
  score?: Int
  useful: ReviewUseful
  easy: ReviewEasy
  description: String
  anonymous: Boolean
  recommended: Boolean
  classReviewed: UfvClassCreateOneWithoutReviewsInput
  votes?: ReviewVotesCreateManyWithoutReviewInput
}

export interface ReviewVotesWhereInput {
  AND?: ReviewVotesWhereInput[] | ReviewVotesWhereInput
  OR?: ReviewVotesWhereInput[] | ReviewVotesWhereInput
  NOT?: ReviewVotesWhereInput[] | ReviewVotesWhereInput
  id?: ID_Input
  id_not?: ID_Input
  id_in?: ID_Input[] | ID_Input
  id_not_in?: ID_Input[] | ID_Input
  id_lt?: ID_Input
  id_lte?: ID_Input
  id_gt?: ID_Input
  id_gte?: ID_Input
  id_contains?: ID_Input
  id_not_contains?: ID_Input
  id_starts_with?: ID_Input
  id_not_starts_with?: ID_Input
  id_ends_with?: ID_Input
  id_not_ends_with?: ID_Input
  type?: ReviewVotesTypes
  type_not?: ReviewVotesTypes
  type_in?: ReviewVotesTypes[] | ReviewVotesTypes
  type_not_in?: ReviewVotesTypes[] | ReviewVotesTypes
  review?: ReviewWhereInput
  user?: UserWhereInput
}

export interface ReviewSubscriptionWhereInput {
  AND?: ReviewSubscriptionWhereInput[] | ReviewSubscriptionWhereInput
  OR?: ReviewSubscriptionWhereInput[] | ReviewSubscriptionWhereInput
  NOT?: ReviewSubscriptionWhereInput[] | ReviewSubscriptionWhereInput
  mutation_in?: MutationType[] | MutationType
  updatedFields_contains?: String
  updatedFields_contains_every?: String[] | String
  updatedFields_contains_some?: String[] | String
  node?: ReviewWhereInput
}

export interface UserUpdateInput {
  facebookId?: String
  name?: String
  course?: UfvCourses
  year?: UfvYears
  rate?: UserRate
  reviews?: ReviewUpdateManyWithoutReviewerInput
  votes?: ReviewVotesUpdateManyWithoutUserInput
}

export interface ReviewUpsertWithWhereUniqueWithoutClassReviewedInput {
  where: ReviewWhereUniqueInput
  update: ReviewUpdateWithoutClassReviewedDataInput
  create: ReviewCreateWithoutClassReviewedInput
}

export interface ReviewUpdateManyWithoutReviewerInput {
  create?: ReviewCreateWithoutReviewerInput[] | ReviewCreateWithoutReviewerInput
  connect?: ReviewWhereUniqueInput[] | ReviewWhereUniqueInput
  disconnect?: ReviewWhereUniqueInput[] | ReviewWhereUniqueInput
  delete?: ReviewWhereUniqueInput[] | ReviewWhereUniqueInput
  update?: ReviewUpdateWithWhereUniqueWithoutReviewerInput[] | ReviewUpdateWithWhereUniqueWithoutReviewerInput
  upsert?: ReviewUpsertWithWhereUniqueWithoutReviewerInput[] | ReviewUpsertWithWhereUniqueWithoutReviewerInput
}

export interface UserWhereUniqueInput {
  id?: ID_Input
  facebookId?: String
}

export interface ReviewUpdateWithWhereUniqueWithoutReviewerInput {
  where: ReviewWhereUniqueInput
  data: ReviewUpdateWithoutReviewerDataInput
}

export interface ReviewUpdateManyWithoutClassReviewedInput {
  create?: ReviewCreateWithoutClassReviewedInput[] | ReviewCreateWithoutClassReviewedInput
  connect?: ReviewWhereUniqueInput[] | ReviewWhereUniqueInput
  disconnect?: ReviewWhereUniqueInput[] | ReviewWhereUniqueInput
  delete?: ReviewWhereUniqueInput[] | ReviewWhereUniqueInput
  update?: ReviewUpdateWithWhereUniqueWithoutClassReviewedInput[] | ReviewUpdateWithWhereUniqueWithoutClassReviewedInput
  upsert?: ReviewUpsertWithWhereUniqueWithoutClassReviewedInput[] | ReviewUpsertWithWhereUniqueWithoutClassReviewedInput
}

export interface ReviewUpdateWithoutReviewerDataInput {
  score?: Int
  useful?: ReviewUseful
  easy?: ReviewEasy
  description?: String
  anonymous?: Boolean
  recommended?: Boolean
  classReviewed?: UfvClassUpdateOneWithoutReviewsInput
  votes?: ReviewVotesUpdateManyWithoutReviewInput
}

export interface ReviewVotesUpsertWithWhereUniqueWithoutUserInput {
  where: ReviewVotesWhereUniqueInput
  update: ReviewVotesUpdateWithoutUserDataInput
  create: ReviewVotesCreateWithoutUserInput
}

export interface UfvClassUpdateOneWithoutReviewsInput {
  create?: UfvClassCreateWithoutReviewsInput
  connect?: UfvClassWhereUniqueInput
  delete?: Boolean
  update?: UfvClassUpdateWithoutReviewsDataInput
  upsert?: UfvClassUpsertWithoutReviewsInput
}

export interface UserUpdateOneWithoutReviewsInput {
  create?: UserCreateWithoutReviewsInput
  connect?: UserWhereUniqueInput
  delete?: Boolean
  update?: UserUpdateWithoutReviewsDataInput
  upsert?: UserUpsertWithoutReviewsInput
}

export interface UfvClassUpdateWithoutReviewsDataInput {
  cod?: String
  name?: String
  optional?: Boolean
  department?: Department
  useful?: Float
  easy?: Float
  recommended?: Int
}

export interface ReviewVotesUpdateWithWhereUniqueWithoutUserInput {
  where: ReviewVotesWhereUniqueInput
  data: ReviewVotesUpdateWithoutUserDataInput
}

export interface UfvClassUpsertWithoutReviewsInput {
  update: UfvClassUpdateWithoutReviewsDataInput
  create: UfvClassCreateWithoutReviewsInput
}

export interface UfvClassWhereInput {
  AND?: UfvClassWhereInput[] | UfvClassWhereInput
  OR?: UfvClassWhereInput[] | UfvClassWhereInput
  NOT?: UfvClassWhereInput[] | UfvClassWhereInput
  id?: ID_Input
  id_not?: ID_Input
  id_in?: ID_Input[] | ID_Input
  id_not_in?: ID_Input[] | ID_Input
  id_lt?: ID_Input
  id_lte?: ID_Input
  id_gt?: ID_Input
  id_gte?: ID_Input
  id_contains?: ID_Input
  id_not_contains?: ID_Input
  id_starts_with?: ID_Input
  id_not_starts_with?: ID_Input
  id_ends_with?: ID_Input
  id_not_ends_with?: ID_Input
  cod?: String
  cod_not?: String
  cod_in?: String[] | String
  cod_not_in?: String[] | String
  cod_lt?: String
  cod_lte?: String
  cod_gt?: String
  cod_gte?: String
  cod_contains?: String
  cod_not_contains?: String
  cod_starts_with?: String
  cod_not_starts_with?: String
  cod_ends_with?: String
  cod_not_ends_with?: String
  name?: String
  name_not?: String
  name_in?: String[] | String
  name_not_in?: String[] | String
  name_lt?: String
  name_lte?: String
  name_gt?: String
  name_gte?: String
  name_contains?: String
  name_not_contains?: String
  name_starts_with?: String
  name_not_starts_with?: String
  name_ends_with?: String
  name_not_ends_with?: String
  optional?: Boolean
  optional_not?: Boolean
  department?: Department
  department_not?: Department
  department_in?: Department[] | Department
  department_not_in?: Department[] | Department
  useful?: Float
  useful_not?: Float
  useful_in?: Float[] | Float
  useful_not_in?: Float[] | Float
  useful_lt?: Float
  useful_lte?: Float
  useful_gt?: Float
  useful_gte?: Float
  easy?: Float
  easy_not?: Float
  easy_in?: Float[] | Float
  easy_not_in?: Float[] | Float
  easy_lt?: Float
  easy_lte?: Float
  easy_gt?: Float
  easy_gte?: Float
  recommended?: Int
  recommended_not?: Int
  recommended_in?: Int[] | Int
  recommended_not_in?: Int[] | Int
  recommended_lt?: Int
  recommended_lte?: Int
  recommended_gt?: Int
  recommended_gte?: Int
  reviews_every?: ReviewWhereInput
  reviews_some?: ReviewWhereInput
  reviews_none?: ReviewWhereInput
}

export interface ReviewVotesUpdateManyWithoutReviewInput {
  create?: ReviewVotesCreateWithoutReviewInput[] | ReviewVotesCreateWithoutReviewInput
  connect?: ReviewVotesWhereUniqueInput[] | ReviewVotesWhereUniqueInput
  disconnect?: ReviewVotesWhereUniqueInput[] | ReviewVotesWhereUniqueInput
  delete?: ReviewVotesWhereUniqueInput[] | ReviewVotesWhereUniqueInput
  update?: ReviewVotesUpdateWithWhereUniqueWithoutReviewInput[] | ReviewVotesUpdateWithWhereUniqueWithoutReviewInput
  upsert?: ReviewVotesUpsertWithWhereUniqueWithoutReviewInput[] | ReviewVotesUpsertWithWhereUniqueWithoutReviewInput
}

export interface ReviewUpdateWithoutClassReviewedDataInput {
  score?: Int
  useful?: ReviewUseful
  easy?: ReviewEasy
  description?: String
  anonymous?: Boolean
  recommended?: Boolean
  reviewer?: UserUpdateOneWithoutReviewsInput
  votes?: ReviewVotesUpdateManyWithoutReviewInput
}

export interface ReviewVotesUpdateWithWhereUniqueWithoutReviewInput {
  where: ReviewVotesWhereUniqueInput
  data: ReviewVotesUpdateWithoutReviewDataInput
}

export interface ReviewUpdateInput {
  score?: Int
  useful?: ReviewUseful
  easy?: ReviewEasy
  description?: String
  anonymous?: Boolean
  recommended?: Boolean
  classReviewed?: UfvClassUpdateOneWithoutReviewsInput
  reviewer?: UserUpdateOneWithoutReviewsInput
  votes?: ReviewVotesUpdateManyWithoutReviewInput
}

export interface ReviewVotesUpdateWithoutReviewDataInput {
  type?: ReviewVotesTypes
  user?: UserUpdateOneWithoutVotesInput
}

export interface ReviewUpdateOneWithoutVotesInput {
  create?: ReviewCreateWithoutVotesInput
  connect?: ReviewWhereUniqueInput
  delete?: Boolean
  update?: ReviewUpdateWithoutVotesDataInput
  upsert?: ReviewUpsertWithoutVotesInput
}

export interface ReviewVotesUpsertWithWhereUniqueWithoutReviewInput {
  where: ReviewVotesWhereUniqueInput
  update: ReviewVotesUpdateWithoutReviewDataInput
  create: ReviewVotesCreateWithoutReviewInput
}

export interface UserUpsertWithoutVotesInput {
  update: UserUpdateWithoutVotesDataInput
  create: UserCreateWithoutVotesInput
}

export interface UserUpdateWithoutVotesDataInput {
  facebookId?: String
  name?: String
  course?: UfvCourses
  year?: UfvYears
  rate?: UserRate
  reviews?: ReviewUpdateManyWithoutReviewerInput
}

export interface UserUpdateOneWithoutVotesInput {
  create?: UserCreateWithoutVotesInput
  connect?: UserWhereUniqueInput
  delete?: Boolean
  update?: UserUpdateWithoutVotesDataInput
  upsert?: UserUpsertWithoutVotesInput
}

export interface ReviewCreateManyWithoutReviewerInput {
  create?: ReviewCreateWithoutReviewerInput[] | ReviewCreateWithoutReviewerInput
  connect?: ReviewWhereUniqueInput[] | ReviewWhereUniqueInput
}

export interface UserUpsertWithoutReviewsInput {
  update: UserUpdateWithoutReviewsDataInput
  create: UserCreateWithoutReviewsInput
}

export interface ReviewWhereUniqueInput {
  id?: ID_Input
}

export interface ReviewVotesSubscriptionWhereInput {
  AND?: ReviewVotesSubscriptionWhereInput[] | ReviewVotesSubscriptionWhereInput
  OR?: ReviewVotesSubscriptionWhereInput[] | ReviewVotesSubscriptionWhereInput
  NOT?: ReviewVotesSubscriptionWhereInput[] | ReviewVotesSubscriptionWhereInput
  mutation_in?: MutationType[] | MutationType
  updatedFields_contains?: String
  updatedFields_contains_every?: String[] | String
  updatedFields_contains_some?: String[] | String
  node?: ReviewVotesWhereInput
}

/*
 * An object with an ID

 */
export interface Node {
  id: ID_Output
}

export interface UfvClassPreviousValues {
  id: ID_Output
  cod: String
  name: String
  optional: Boolean
  department: Department
  useful: Float
  easy: Float
  recommended: Int
}

/*
 * A connection to a list of items.

 */
export interface UserConnection {
  pageInfo: PageInfo
  edges: UserEdge[]
  aggregate: AggregateUser
}

export interface ReviewVotesPreviousValues {
  id: ID_Output
  type: ReviewVotesTypes
}

export interface UfvClassSubscriptionPayload {
  mutation: MutationType
  node?: UfvClass
  updatedFields?: String[]
  previousValues?: UfvClassPreviousValues
}

export interface UfvClass extends Node {
  id: ID_Output
  cod: String
  name: String
  optional: Boolean
  department: Department
  useful: Float
  easy: Float
  recommended: Int
  reviews?: Review[]
}

export interface ReviewVotes extends Node {
  id: ID_Output
  review: Review
  user: User
  type: ReviewVotesTypes
}

/*
 * A connection to a list of items.

 */
export interface UfvClassConnection {
  pageInfo: PageInfo
  edges: UfvClassEdge[]
  aggregate: AggregateUfvClass
}

export interface AggregateUfvClass {
  count: Int
}

/*
 * An edge in a connection.

 */
export interface ReviewEdge {
  node: Review
  cursor: String
}

export interface BatchPayload {
  count: Long
}

export interface AggregateReviewVotes {
  count: Int
}

export interface ReviewPreviousValues {
  id: ID_Output
  score: Int
  useful: ReviewUseful
  easy: ReviewEasy
  description: String
  anonymous: Boolean
  recommended: Boolean
  createdAt: DateTime
  updatedAt: DateTime
}

/*
 * A connection to a list of items.

 */
export interface ReviewVotesConnection {
  pageInfo: PageInfo
  edges: ReviewVotesEdge[]
  aggregate: AggregateReviewVotes
}

export interface Review extends Node {
  id: ID_Output
  score: Int
  useful: ReviewUseful
  easy: ReviewEasy
  description: String
  anonymous: Boolean
  recommended: Boolean
  classReviewed: UfvClass
  reviewer: User
  votes?: ReviewVotes[]
  createdAt: DateTime
  updatedAt: DateTime
}

/*
 * An edge in a connection.

 */
export interface UserEdge {
  node: User
  cursor: String
}

export interface ReviewSubscriptionPayload {
  mutation: MutationType
  node?: Review
  updatedFields?: String[]
  previousValues?: ReviewPreviousValues
}

/*
 * An edge in a connection.

 */
export interface UfvClassEdge {
  node: UfvClass
  cursor: String
}

/*
 * A connection to a list of items.

 */
export interface ReviewConnection {
  pageInfo: PageInfo
  edges: ReviewEdge[]
  aggregate: AggregateReview
}

export interface ReviewVotesSubscriptionPayload {
  mutation: MutationType
  node?: ReviewVotes
  updatedFields?: String[]
  previousValues?: ReviewVotesPreviousValues
}

export interface User extends Node {
  id: ID_Output
  facebookId: String
  name: String
  course: UfvCourses
  year: UfvYears
  rate: UserRate
  reviews?: Review[]
  votes?: ReviewVotes[]
  createdAt: DateTime
  updatedAt: DateTime
}

export interface UserPreviousValues {
  id: ID_Output
  facebookId: String
  name: String
  course: UfvCourses
  year: UfvYears
  rate: UserRate
  createdAt: DateTime
  updatedAt: DateTime
}

export interface UserSubscriptionPayload {
  mutation: MutationType
  node?: User
  updatedFields?: String[]
  previousValues?: UserPreviousValues
}

/*
 * An edge in a connection.

 */
export interface ReviewVotesEdge {
  node: ReviewVotes
  cursor: String
}

export interface AggregateReview {
  count: Int
}

/*
 * Information about pagination in a connection.

 */
export interface PageInfo {
  hasNextPage: Boolean
  hasPreviousPage: Boolean
  startCursor?: String
  endCursor?: String
}

export interface AggregateUser {
  count: Int
}

/*
The `Float` scalar type represents signed double-precision fractional values as specified by [IEEE 754](http://en.wikipedia.org/wiki/IEEE_floating_point). 
*/
export type Float = number

/*
The `ID` scalar type represents a unique identifier, often used to refetch an object or as key for a cache. The ID type appears in a JSON response as a String; however, it is not intended to be human-readable. When expected as an input type, any string (such as `"4"`) or integer (such as `4`) input value will be accepted as an ID.
*/
export type ID_Input = string | number
export type ID_Output = string

export type DateTime = Date | string

/*
The `Boolean` scalar type represents `true` or `false`.
*/
export type Boolean = boolean

/*
The `Long` scalar type represents non-fractional signed whole numeric values.
Long can represent values between -(2^63) and 2^63 - 1.
*/
export type Long = string

/*
The `String` scalar type represents textual data, represented as UTF-8 character sequences. The String type is most often used by GraphQL to represent free-form human-readable text.
*/
export type String = string

/*
The `Int` scalar type represents non-fractional signed whole numeric values. Int can represent values between -(2^31) and 2^31 - 1. 
*/
export type Int = number