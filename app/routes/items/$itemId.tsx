import type { LoaderArgs } from "@remix-run/node";
import invariant from "tiny-invariant";
import { json } from "@remix-run/node";
import { getItem } from "~/models/item.server";
import { useLoaderData } from "@remix-run/react";
import ItemHeader from "~/domain/Feed/ItemHeader";
import { itemHeaderDecorator } from "~/decorators/ItemHeaderDecorator";
import Vote from "~/components/Vote";
import CommentForm from "~/domain/Comments/CommentForm";

export async function loader({ request, params }: LoaderArgs) {
  invariant(params.itemId, "itemId not found");

  const item = await getItem({ id: params.itemId });
  if (!item) {
    throw new Response("Not Found", { status: 404 });
  }
  return json({ item });
}

export default function ItemDetailedPage() {
  const data = useLoaderData<typeof loader>();
  // @ts-ignore
  const itemDecorator = itemHeaderDecorator(data.item, "a");

  return (
    <div className="flex flex-col gap-6">
      <div className="flex align-bottom gap-1">
        <Vote
          itemId={itemDecorator.id}
          hide={itemDecorator.hideVoteAction}
          className="mt-1"
        />
        <ItemHeader
          id={itemDecorator.id}
          title={itemDecorator.title}
          url={itemDecorator.url}
          text={itemDecorator.text}
          domain={itemDecorator.domain}
          pointsLabel={itemDecorator.pointsLabel}
          username={itemDecorator.username}
          userId={itemDecorator.userId}
          postedAgo={itemDecorator.postedAgo}
          commentsCount={itemDecorator.commentsCount}
        />
      </div>
      <CommentForm className="ml-4" />
    </div>
  );
}
