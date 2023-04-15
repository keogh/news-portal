import type { LoaderArgs, V2_MetaFunction } from "@remix-run/node";
import type { Domain, Item, User, Vote } from "@prisma/client";

import { json } from '@remix-run/node';
import { useLoaderData} from "@remix-run/react";

import { getUserId } from "~/session.server";
import { getItemsList } from "~/models/item.server";
import Feed from "~/domain/Feed";
import Pagination from "~/components/Pagination/Pagination";

export const meta: V2_MetaFunction = () => [{ title: "Some News" }];

export type ItemWithUserAndDomain = Item & {
  user: User;
  domain: Domain | null;
  votes: Vote[];
  _count: { votes: number };
};

export const loader = async ({ request, params }: LoaderArgs) => {
  const userId = await getUserId(request)

  const url = new URL(request.url);
  const currentPage = parseInt(url.searchParams.get('page') ?? '1');

  const items: ItemWithUserAndDomain[] = await getItemsList({ page: currentPage });

  return json({ items, userId, currentPage });
};

export default function Index() {
  const data = useLoaderData<typeof loader>();
  const currentPage = data.currentPage ?? 1;

  return (
    <main className="relative min-h-screen bg-white sm:flex">
      <div className="relative sm:pb-16 sm:pt-4">
        <div className="px-4">
          {/* TODO: Fix this TS type error */}
          {/* @ts-ignore*/}
          <Feed items={data.items} currentUserId={data.userId} page={currentPage} />
          <Pagination
            className="mt-4"
            baseURL="/"
            nextPage={currentPage + 1}
          />
        </div>
      </div>
    </main>
  );
}
