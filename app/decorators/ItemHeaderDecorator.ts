import type { Item } from '@prisma/client';
import { type ItemWithUserAndDomain } from "~/routes/index";

export function itemHeaderDecorator(item: ItemWithUserAndDomain ) {
  // TODO: Return real values
  return {
    id: item.id,
    title: item.title,
    url: item.url,
    text: "",
    domain: item.domain?.name,
    pointsLabel: null,
    username: "",
    userId: item.userId,
    postedAgo: "",
    commentsCount: 0,
  }
}
