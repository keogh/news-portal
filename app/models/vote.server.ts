
import type { User, Item } from "@prisma/client";
import { prisma } from "~/db.server";

type CreateVoteArgs = {
  userId: User['id'],
  itemId: Item['id']
}
export function createVote({
  userId,
  itemId,
}: CreateVoteArgs) {
  return prisma.vote.create({
    data: {
      user: {
        connect: {
          id: userId
        }
      },
      item: {
        connect: {
          id: itemId
        }
      },
    },
  });
}
