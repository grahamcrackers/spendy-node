export const typeDefs = /* GraphQL */ `type AggregateBudget {
  count: Int!
}

type AggregateExpense {
  count: Int!
}

type AggregateUser {
  count: Int!
}

type BatchPayload {
  count: Long!
}

type Budget {
  id: ID!
  name: String!
  amount: Float!
  date: DateTime!
  user: User!
  createdAt: DateTime!
  updatedAt: DateTime!
}

type BudgetConnection {
  pageInfo: PageInfo!
  edges: [BudgetEdge]!
  aggregate: AggregateBudget!
}

input BudgetCreateInput {
  name: String!
  amount: Float!
  date: DateTime!
  user: UserCreateOneInput!
}

input BudgetCreateOneInput {
  create: BudgetCreateInput
  connect: BudgetWhereUniqueInput
}

type BudgetEdge {
  node: Budget!
  cursor: String!
}

enum BudgetOrderByInput {
  id_ASC
  id_DESC
  name_ASC
  name_DESC
  amount_ASC
  amount_DESC
  date_ASC
  date_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
}

type BudgetPreviousValues {
  id: ID!
  name: String!
  amount: Float!
  date: DateTime!
  createdAt: DateTime!
  updatedAt: DateTime!
}

type BudgetSubscriptionPayload {
  mutation: MutationType!
  node: Budget
  updatedFields: [String!]
  previousValues: BudgetPreviousValues
}

input BudgetSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: BudgetWhereInput
  AND: [BudgetSubscriptionWhereInput!]
  OR: [BudgetSubscriptionWhereInput!]
  NOT: [BudgetSubscriptionWhereInput!]
}

input BudgetUpdateDataInput {
  name: String
  amount: Float
  date: DateTime
  user: UserUpdateOneRequiredInput
}

input BudgetUpdateInput {
  name: String
  amount: Float
  date: DateTime
  user: UserUpdateOneRequiredInput
}

input BudgetUpdateManyMutationInput {
  name: String
  amount: Float
  date: DateTime
}

input BudgetUpdateOneRequiredInput {
  create: BudgetCreateInput
  update: BudgetUpdateDataInput
  upsert: BudgetUpsertNestedInput
  connect: BudgetWhereUniqueInput
}

input BudgetUpsertNestedInput {
  update: BudgetUpdateDataInput!
  create: BudgetCreateInput!
}

input BudgetWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  name: String
  name_not: String
  name_in: [String!]
  name_not_in: [String!]
  name_lt: String
  name_lte: String
  name_gt: String
  name_gte: String
  name_contains: String
  name_not_contains: String
  name_starts_with: String
  name_not_starts_with: String
  name_ends_with: String
  name_not_ends_with: String
  amount: Float
  amount_not: Float
  amount_in: [Float!]
  amount_not_in: [Float!]
  amount_lt: Float
  amount_lte: Float
  amount_gt: Float
  amount_gte: Float
  date: DateTime
  date_not: DateTime
  date_in: [DateTime!]
  date_not_in: [DateTime!]
  date_lt: DateTime
  date_lte: DateTime
  date_gt: DateTime
  date_gte: DateTime
  user: UserWhereInput
  createdAt: DateTime
  createdAt_not: DateTime
  createdAt_in: [DateTime!]
  createdAt_not_in: [DateTime!]
  createdAt_lt: DateTime
  createdAt_lte: DateTime
  createdAt_gt: DateTime
  createdAt_gte: DateTime
  updatedAt: DateTime
  updatedAt_not: DateTime
  updatedAt_in: [DateTime!]
  updatedAt_not_in: [DateTime!]
  updatedAt_lt: DateTime
  updatedAt_lte: DateTime
  updatedAt_gt: DateTime
  updatedAt_gte: DateTime
  AND: [BudgetWhereInput!]
  OR: [BudgetWhereInput!]
  NOT: [BudgetWhereInput!]
}

input BudgetWhereUniqueInput {
  id: ID
}

scalar DateTime

type Expense {
  id: ID!
  place: String!
  price: Float!
  reason: String!
  date: DateTime!
  budget: Budget!
  createdAt: DateTime!
  updatedAt: DateTime!
}

type ExpenseConnection {
  pageInfo: PageInfo!
  edges: [ExpenseEdge]!
  aggregate: AggregateExpense!
}

input ExpenseCreateInput {
  place: String!
  price: Float!
  reason: String!
  date: DateTime!
  budget: BudgetCreateOneInput!
}

type ExpenseEdge {
  node: Expense!
  cursor: String!
}

enum ExpenseOrderByInput {
  id_ASC
  id_DESC
  place_ASC
  place_DESC
  price_ASC
  price_DESC
  reason_ASC
  reason_DESC
  date_ASC
  date_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
}

type ExpensePreviousValues {
  id: ID!
  place: String!
  price: Float!
  reason: String!
  date: DateTime!
  createdAt: DateTime!
  updatedAt: DateTime!
}

type ExpenseSubscriptionPayload {
  mutation: MutationType!
  node: Expense
  updatedFields: [String!]
  previousValues: ExpensePreviousValues
}

input ExpenseSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: ExpenseWhereInput
  AND: [ExpenseSubscriptionWhereInput!]
  OR: [ExpenseSubscriptionWhereInput!]
  NOT: [ExpenseSubscriptionWhereInput!]
}

input ExpenseUpdateInput {
  place: String
  price: Float
  reason: String
  date: DateTime
  budget: BudgetUpdateOneRequiredInput
}

input ExpenseUpdateManyMutationInput {
  place: String
  price: Float
  reason: String
  date: DateTime
}

input ExpenseWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  place: String
  place_not: String
  place_in: [String!]
  place_not_in: [String!]
  place_lt: String
  place_lte: String
  place_gt: String
  place_gte: String
  place_contains: String
  place_not_contains: String
  place_starts_with: String
  place_not_starts_with: String
  place_ends_with: String
  place_not_ends_with: String
  price: Float
  price_not: Float
  price_in: [Float!]
  price_not_in: [Float!]
  price_lt: Float
  price_lte: Float
  price_gt: Float
  price_gte: Float
  reason: String
  reason_not: String
  reason_in: [String!]
  reason_not_in: [String!]
  reason_lt: String
  reason_lte: String
  reason_gt: String
  reason_gte: String
  reason_contains: String
  reason_not_contains: String
  reason_starts_with: String
  reason_not_starts_with: String
  reason_ends_with: String
  reason_not_ends_with: String
  date: DateTime
  date_not: DateTime
  date_in: [DateTime!]
  date_not_in: [DateTime!]
  date_lt: DateTime
  date_lte: DateTime
  date_gt: DateTime
  date_gte: DateTime
  budget: BudgetWhereInput
  createdAt: DateTime
  createdAt_not: DateTime
  createdAt_in: [DateTime!]
  createdAt_not_in: [DateTime!]
  createdAt_lt: DateTime
  createdAt_lte: DateTime
  createdAt_gt: DateTime
  createdAt_gte: DateTime
  updatedAt: DateTime
  updatedAt_not: DateTime
  updatedAt_in: [DateTime!]
  updatedAt_not_in: [DateTime!]
  updatedAt_lt: DateTime
  updatedAt_lte: DateTime
  updatedAt_gt: DateTime
  updatedAt_gte: DateTime
  AND: [ExpenseWhereInput!]
  OR: [ExpenseWhereInput!]
  NOT: [ExpenseWhereInput!]
}

input ExpenseWhereUniqueInput {
  id: ID
}

scalar Long

type Mutation {
  createBudget(data: BudgetCreateInput!): Budget!
  updateBudget(data: BudgetUpdateInput!, where: BudgetWhereUniqueInput!): Budget
  updateManyBudgets(data: BudgetUpdateManyMutationInput!, where: BudgetWhereInput): BatchPayload!
  upsertBudget(where: BudgetWhereUniqueInput!, create: BudgetCreateInput!, update: BudgetUpdateInput!): Budget!
  deleteBudget(where: BudgetWhereUniqueInput!): Budget
  deleteManyBudgets(where: BudgetWhereInput): BatchPayload!
  createExpense(data: ExpenseCreateInput!): Expense!
  updateExpense(data: ExpenseUpdateInput!, where: ExpenseWhereUniqueInput!): Expense
  updateManyExpenses(data: ExpenseUpdateManyMutationInput!, where: ExpenseWhereInput): BatchPayload!
  upsertExpense(where: ExpenseWhereUniqueInput!, create: ExpenseCreateInput!, update: ExpenseUpdateInput!): Expense!
  deleteExpense(where: ExpenseWhereUniqueInput!): Expense
  deleteManyExpenses(where: ExpenseWhereInput): BatchPayload!
  createUser(data: UserCreateInput!): User!
  updateUser(data: UserUpdateInput!, where: UserWhereUniqueInput!): User
  updateManyUsers(data: UserUpdateManyMutationInput!, where: UserWhereInput): BatchPayload!
  upsertUser(where: UserWhereUniqueInput!, create: UserCreateInput!, update: UserUpdateInput!): User!
  deleteUser(where: UserWhereUniqueInput!): User
  deleteManyUsers(where: UserWhereInput): BatchPayload!
}

enum MutationType {
  CREATED
  UPDATED
  DELETED
}

interface Node {
  id: ID!
}

type PageInfo {
  hasNextPage: Boolean!
  hasPreviousPage: Boolean!
  startCursor: String
  endCursor: String
}

type Query {
  budget(where: BudgetWhereUniqueInput!): Budget
  budgets(where: BudgetWhereInput, orderBy: BudgetOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Budget]!
  budgetsConnection(where: BudgetWhereInput, orderBy: BudgetOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): BudgetConnection!
  expense(where: ExpenseWhereUniqueInput!): Expense
  expenses(where: ExpenseWhereInput, orderBy: ExpenseOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Expense]!
  expensesConnection(where: ExpenseWhereInput, orderBy: ExpenseOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): ExpenseConnection!
  user(where: UserWhereUniqueInput!): User
  users(where: UserWhereInput, orderBy: UserOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [User]!
  usersConnection(where: UserWhereInput, orderBy: UserOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): UserConnection!
  node(id: ID!): Node
}

type Subscription {
  budget(where: BudgetSubscriptionWhereInput): BudgetSubscriptionPayload
  expense(where: ExpenseSubscriptionWhereInput): ExpenseSubscriptionPayload
  user(where: UserSubscriptionWhereInput): UserSubscriptionPayload
}

type User {
  id: ID!
  email: String!
  password: String!
  name: String!
  createdAt: DateTime!
  updatedAt: DateTime!
}

type UserConnection {
  pageInfo: PageInfo!
  edges: [UserEdge]!
  aggregate: AggregateUser!
}

input UserCreateInput {
  email: String!
  password: String!
  name: String!
}

input UserCreateOneInput {
  create: UserCreateInput
  connect: UserWhereUniqueInput
}

type UserEdge {
  node: User!
  cursor: String!
}

enum UserOrderByInput {
  id_ASC
  id_DESC
  email_ASC
  email_DESC
  password_ASC
  password_DESC
  name_ASC
  name_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
}

type UserPreviousValues {
  id: ID!
  email: String!
  password: String!
  name: String!
  createdAt: DateTime!
  updatedAt: DateTime!
}

type UserSubscriptionPayload {
  mutation: MutationType!
  node: User
  updatedFields: [String!]
  previousValues: UserPreviousValues
}

input UserSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: UserWhereInput
  AND: [UserSubscriptionWhereInput!]
  OR: [UserSubscriptionWhereInput!]
  NOT: [UserSubscriptionWhereInput!]
}

input UserUpdateDataInput {
  email: String
  password: String
  name: String
}

input UserUpdateInput {
  email: String
  password: String
  name: String
}

input UserUpdateManyMutationInput {
  email: String
  password: String
  name: String
}

input UserUpdateOneRequiredInput {
  create: UserCreateInput
  update: UserUpdateDataInput
  upsert: UserUpsertNestedInput
  connect: UserWhereUniqueInput
}

input UserUpsertNestedInput {
  update: UserUpdateDataInput!
  create: UserCreateInput!
}

input UserWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  email: String
  email_not: String
  email_in: [String!]
  email_not_in: [String!]
  email_lt: String
  email_lte: String
  email_gt: String
  email_gte: String
  email_contains: String
  email_not_contains: String
  email_starts_with: String
  email_not_starts_with: String
  email_ends_with: String
  email_not_ends_with: String
  password: String
  password_not: String
  password_in: [String!]
  password_not_in: [String!]
  password_lt: String
  password_lte: String
  password_gt: String
  password_gte: String
  password_contains: String
  password_not_contains: String
  password_starts_with: String
  password_not_starts_with: String
  password_ends_with: String
  password_not_ends_with: String
  name: String
  name_not: String
  name_in: [String!]
  name_not_in: [String!]
  name_lt: String
  name_lte: String
  name_gt: String
  name_gte: String
  name_contains: String
  name_not_contains: String
  name_starts_with: String
  name_not_starts_with: String
  name_ends_with: String
  name_not_ends_with: String
  createdAt: DateTime
  createdAt_not: DateTime
  createdAt_in: [DateTime!]
  createdAt_not_in: [DateTime!]
  createdAt_lt: DateTime
  createdAt_lte: DateTime
  createdAt_gt: DateTime
  createdAt_gte: DateTime
  updatedAt: DateTime
  updatedAt_not: DateTime
  updatedAt_in: [DateTime!]
  updatedAt_not_in: [DateTime!]
  updatedAt_lt: DateTime
  updatedAt_lte: DateTime
  updatedAt_gt: DateTime
  updatedAt_gte: DateTime
  AND: [UserWhereInput!]
  OR: [UserWhereInput!]
  NOT: [UserWhereInput!]
}

input UserWhereUniqueInput {
  id: ID
  email: String
}
`