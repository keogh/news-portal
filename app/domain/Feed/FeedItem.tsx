import * as React from 'react';

import ItemHeader from './ItemHeader';
import { itemHeaderDecorator } from '~/decorators/ItemHeaderDecorator';
import type { ItemWithUserAndDomain } from "~/routes";
import Vote from '~/components/Vote';

interface Props {
  item: ItemWithUserAndDomain,
  currentUserId?: string,
}

export default function FeedItem({ item, currentUserId }: Props) {
  const decorator = itemHeaderDecorator(item, currentUserId);

  return (
    <div className="flex align-bottom gap-1">
      <Vote
        itemId={item.id}
        className="mt-1"
        hide={decorator.hideVoteAction}
      />
      <ItemHeader { ...decorator } />
    </div>
  );
}
