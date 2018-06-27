import { MutationResolvers } from "../generated/types";
import { Context, getUserData } from "../utils";

const register: MutationResolvers.RegisterResolver = async (
  _,
  { user: { course, year } },
  ctx: Context,
  info
) => {
  const { name, id } = await getUserData(ctx);
  return ctx.db.mutation.createUser(
    {
      data: {
        facebookId: id,
        name,
        course,
        year
      }
    },
    info
  );
};

const deleteAcc: MutationResolvers.DeleteAccResolver = async (
  _,
  __,
  ctx: Context,
  info
) => {
  const { id } = await getUserData(ctx);
  return ctx.db.mutation.deleteUser({ where: { facebookId: id } }, info);
};

export const Mutation = {
  register,
  deleteAcc
};
