import { type ItemWithUserAndDomain } from "~/routes/index";
import { isItemVotedByUser } from '~/utils/item';
import { formatDistanceToNow } from 'date-fns'

export function itemHeaderDecorator(item: ItemWithUserAndDomain, currentUserId: string | undefined) {
  const postedAgo = formatDistanceToNow(
    new Date(item.createdAt),
    { addSuffix: true }
  );
  const points = item._count.votes;

  return {
    id: item.id,
    title: item.title,
    url: item.url,
    text: item.text,
    domain: item.domain?.name ?? null,
    pointsLabel: `${points} ${points !== 1 ? 'puntos' : 'punto'}`, // TODO: Add locale library
    points,
    username: item.user.email,
    userId: item.userId,
    postedAgo,
    commentsCount: 0, // TODO: Add real comments
    hideVoteAction: isItemVotedByUser(item.votes, currentUserId),
  }
}
