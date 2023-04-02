import type { Item } from '@prisma/client';

import * as React from 'react';
import FeedItem from './FeedItem';
import { type ItemWithUserAndDomain } from '~/routes/index';

interface Props {
  items: ItemWithUserAndDomain[],
  currentUserId?: string
}

export default function Feed({ items, currentUserId }: Props) {
  return (
    <ol>
      {items.map((item, key) => (
        <li key={key} className="list-decimal mb-1.5">
          <FeedItem item={item} currentUserId={currentUserId} />
        </li>
      ))}
    </ol>
  );
}
