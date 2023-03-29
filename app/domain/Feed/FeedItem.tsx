import type { Item } from '@prisma/client';
import * as React from 'react';

import ItemHeader from './ItemHeader';
import { itemHeaderDecorator } from '~/decorators/ItemHeaderDecorator';
import { ItemWithUserAndDomain } from "~/routes";

interface Props {
  item: ItemWithUserAndDomain,
}

export default function FeedItem({ item }: Props) {
  const decorator = itemHeaderDecorator(item);

  return (
    <div className="flex gap-2">
      <div>vote</div>
      <ItemHeader { ...decorator } />
    </div>
  );
}
