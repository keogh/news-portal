import type { Item } from '@prisma/client';

export function itemHeaderDecorator(item: Item) {
  // TODO: Return real values
  return {
    id: item.id,
    title: item.title,
    url: item.url,
    text: "",
    domain: "",
    pointsLabel: null,
    username: "",
    userId: item.userId,
    postedAgo: "",
    commentsCount: 0,
  }
}
