import { getUserId, Context } from '../../utils'

export const Expense = {
  async createExpense(
    parent,
    { place, price, reason, date, budgetId },
    ctx: Context,
    info
  ) {
    const userId = getUserId(ctx)
    const where = {
      id: budgetId,
      user: { id: userId }
    }
    const budget = await ctx.prisma.budgets({ where })

    if (!budget) {
      // need to return unauthorized error here
      return null
    }

    return ctx.prisma.createExpense({
      place,
      price,
      reason,
      date,
      budget: {
        connect: { id: budgetId }
      }
    })
  }
}
