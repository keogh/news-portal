import { Vote } from "@prisma/client";

export function isItemVotedByUser(votes: Vote[], userId: string | undefined) {
  if (userId === undefined) return false;

  return votes.findIndex(vote => userId === vote.userId) !== -1;
}
