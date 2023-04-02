import type { User, Item } from "@prisma/client";
import { prisma } from "~/db.server";

export function getItemsList() {
  // TODO: support pagination
  return prisma.item.findMany({
    orderBy: { createdAt: "desc" },
    include: {
      user: true,
      domain: true,
      votes: true,
      _count: {
        select: {
          votes: true,
        }
      }
    }
  });
}

type CreateItemArgs = Pick<Item, 'title' | 'url' | 'text'> & {
  userId: User['id']
};

export function createItem({
  title,
  url,
  text,
  userId,
}: CreateItemArgs) {
  return prisma.item.create({
    data: {
      title,
      url,
      text,
      domain: {},
      user: {
        connect: {
          id: userId
        },
      },
    }
  });
}
