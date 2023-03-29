import { type ItemWithUserAndDomain } from "~/routes/index";
import { formatDistanceToNow, subDays } from 'date-fns'

export function itemHeaderDecorator(item: ItemWithUserAndDomain ) {
  const postedAgo = formatDistanceToNow(
    new Date(item.createdAt),
    { addSuffix: true }
  );

  return {
    id: item.id,
    title: item.title,
    url: item.url,
    text: item.text,
    domain: item.domain?.name ?? null,
    pointsLabel: "101 points", // TODO: Add real points
    username: item.user.email,
    userId: item.userId,
    postedAgo,
    commentsCount: 0, // TODO: Add real comments
  }
}
