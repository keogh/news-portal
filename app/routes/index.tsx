import type { V2_MetaFunction } from "@remix-run/node";
import type { Item } from '@prisma/client';

import { json } from '@remix-run/node';
import { useLoaderData} from "@remix-run/react";

import { getItemsList } from "~/models/item.server";
import Feed from "~/domain/Feed";

export const meta: V2_MetaFunction = () => [{ title: "Some News" }];

export const loader = async () => {
  return json({
    items: await getItemsList(),
  });
};

export default function Index() {
  const data = useLoaderData<typeof loader>();

  return (
    <main className="relative min-h-screen bg-white sm:flex">
      <div className="relative sm:pb-16 sm:pt-8">
        <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
          {/* TODO: Fix typescript type issue */}
          {/* @ts-ignore */}
          <Feed items={data.items} />
        </div>
      </div>
    </main>
  );
}
