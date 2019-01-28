import { Query } from './Query'
import { Auth } from './Mutation/Auth'
import { Budget } from './Mutation/Budget'
import { Expense } from './Mutation/Expense'

export default {
  Query,
  Mutation: {
    ...Auth,
    ...Budget,
    ...Expense
  }
}
