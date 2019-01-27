import { Query } from './Query'
import { auth } from './Mutation/auth'
import { budget } from './Mutation/Budget'

export default {
  Query,
  Mutation: {
    ...auth,
    ...budget
  }
}
