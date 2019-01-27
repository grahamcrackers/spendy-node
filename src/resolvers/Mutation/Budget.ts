import { getUserId, Context } from '../../utils'

export const budget = {
  async createBudget(parent, { name, amount, date }, ctx: Context, info) {
    const userId = getUserId(ctx)
    return ctx.prisma.createBudget({
      name,
      amount,
      date,
      user: {
        connect: { id: userId }
      }
    })
  }
}
