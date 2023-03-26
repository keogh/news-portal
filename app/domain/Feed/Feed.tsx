import type { Item } from '@prisma/client';

import * as React from 'react';
import FeedItem from './FeedItem';

interface Props {
  items: Item[],
}

export default function Feed({ items }: Props) {
  return (
    <ol>
      {items.map((item, key) => (
        <li key={key} className="list-decimal">
          <FeedItem item={item} />
        </li>
      ))}
    </ol>
  );
}
