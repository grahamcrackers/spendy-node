import { getUserId, Context } from '../../utils'

export const Budget = {
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
