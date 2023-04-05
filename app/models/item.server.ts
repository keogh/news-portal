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
  domainName: string,
};

export function createItem({
  title,
  url,
  text,
  userId,
  domainName,
}: CreateItemArgs) {
  return prisma.item.create({
    data: {
      title,
      url,
      text,
      domain: {
        connectOrCreate: {
          where: {
            name: domainName,
          },
          create: {
            name: domainName,
          }
        }
      },
      user: {
        connect: {
          id: userId
        },
      },
    }
  });
}

export function getItem({ id }: Pick<Item, 'id'>) {
  return prisma.item.findFirst({
    where: { id },
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
