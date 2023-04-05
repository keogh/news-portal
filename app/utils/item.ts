import type { Vote } from "@prisma/client";

export function isItemVotedByUser(votes: Vote[], userId: string | undefined) {
  if (userId === undefined) return false;

  return votes.findIndex(vote => userId === vote.userId) !== -1;
}

export function parseDomainFromURL(urlStr: string): string {
  const url = new URL(urlStr);
  let domain = url.hostname;
  const domainArray = domain.split('.');
  if (domainArray[0] === 'www') {
    domain = domainArray.splice(1).join('.');
  }
  return domain;
}
