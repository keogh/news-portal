import type { Item } from '@prisma/client';

import * as React from 'react';

interface Props {
  items: Item[],
}

export default function Feed({ items }: Props) {
  return (
    <ol>
      {items.map((item, key) => (
        <li key={key}>{item.title}</li>
      ))}
    </ol>
  );
}
