import type { Item } from '@prisma/client';
import * as React from 'react';

import ItemHeader from './ItemHeader';
import { itemHeaderDecorator } from '~/decorators/ItemHeaderDecorator';

interface Props {
  item: Item,
}

export default function FeedItem({ item }: Props) {
  const decorator = itemHeaderDecorator(item);

  return (
    <div className="flex">
      <div>vote</div>
      <ItemHeader { ...decorator } />
    </div>
  );
}