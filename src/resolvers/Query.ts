import { getUserId, Context } from '../utils'

export const Query = {
  me(parent, args, ctx: Context) {
    const id = getUserId(ctx)
    return ctx.prisma.user({ id })
  },

  budgets(parent, args, ctx: Context) {
    const userId = getUserId(ctx)

    const where = {
      user: { id: userId }
    }

    return ctx.prisma.budgets({ where })
  },

  expenses(parent, args, ctx: Context) {
    const userId = getUserId(ctx)

    const where = {
      budget: {
        user: { id: userId }
      }
    }

    return ctx.prisma.expenses({ where })
  }
}
