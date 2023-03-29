import * as React from 'react';

import ItemHeader from './ItemHeader';
import { itemHeaderDecorator } from '~/decorators/ItemHeaderDecorator';
import { ItemWithUserAndDomain } from "~/routes";
import Vote from '~/components/Vote';

interface Props {
  item: ItemWithUserAndDomain,
}

export default function FeedItem({ item }: Props) {
  const decorator = itemHeaderDecorator(item);

  return (
    <div className="flex align-bottom gap-1">
      <Vote className="mt-1" />
      <ItemHeader { ...decorator } />
    </div>
  );
}
