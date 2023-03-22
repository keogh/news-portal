import type { User, Item } from "@prisma/client";
import { prisma } from "~/db.server";

type Props = Pick<Item, 'title' | 'url' | 'text'> & {
  userId: User['id']
};

export function createItem({
  title,
  url,
  text,
  userId,
}: Props) {
  return prisma.item.create({
    data: {
      title,
      url,
      text,
      user: {
        connect: {
          id: userId
        },
      },
    }
  });
}
