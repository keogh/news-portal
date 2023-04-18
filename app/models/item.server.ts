import type { User, Item } from "@prisma/client";
import { prisma } from "~/db.server";

type GetItemsListArgs = {
  page?: number,
};

export async function getItemsList({ page = 1 }) {
  const perPage = 30;
  const offset = (page - 1) * perPage;

  const idsRaw = await prisma.$queryRaw<{id: string}[]>`
    SELECT i.id
      FROM public."Item" i
      JOIN (SELECT p.id, SUM(v.vote) as points
            FROM public."Item" p
            JOIN public."Vote" v ON v."itemId" = p.id
      GROUP BY p.id) y ON y.id = i.id
    ORDER BY (y.points - 1)/POW(((EXTRACT(epoch FROM NOW()) - EXTRACT(epoch FROM i."createdAt"))/3600)+2, 1.5) DESC
    LIMIT ${perPage} OFFSET ${offset}
  `;

  const ids = idsRaw.map(item => item.id);

  const items = prisma.item.findMany({
    where: {
      id: { in: ids },
    },
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

  return items;
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
