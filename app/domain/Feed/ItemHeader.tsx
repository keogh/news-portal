import * as React from "react";
import { Link } from "@remix-run/react";

interface Props {
  id: string;
  title: string;
  url: string | null;
  domain: string | null;
  pointsLabel: string | null;
  username: string;
  userId: string;
  postedAgo: string;
  commentsCount: number;
}

export default function ItemHeader({
  id,
  title,
  url,
  domain,
  pointsLabel,
  username,
  userId,
  postedAgo,
  commentsCount,
}: Props) {
  const href = url ?? `/item/${id}`;

  return (
    <div className="flex flex-col">
      <div>
        <div className="flex gap-x-1 items-baseline">
          <div className="text-lg">
            <Link to={href}>
              {title}
            </Link>
          </div>
          {domain && (
            <div className="text-sm">({domain})</div>
          )}
        </div>
      </div>
      <div className="flex gap-x-1 text-sm">
        <div>{`${pointsLabel} `}by {username} {postedAgo}</div>
        <div>|</div>
        <div>
          {commentsCount > 0 ? `${commentsCount} comments` : 'discuss' }
        </div>
      </div>
    </div>
  );
}
