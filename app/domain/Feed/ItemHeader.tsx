import * as React from "react";
import { Link } from "@remix-run/react";

interface Props {
  id: string;
  title: string;
  url: string | null;
  text: string | null;
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
  const itemPageRoute = `/items/${id}`;
  const href = url ?? itemPageRoute;

  return (
    <div className="flex flex-col">
      <div>
        <Link className="no-underline visited:text-gray-600 text-lg" to={href}>
          {title}
        </Link>
        &nbsp;
        {domain && (
          <span className="text-sm text-gray-600">
            ({domain})
          </span>
        )}
      </div>
      <div className="flex gap-x-1 text-xs text-gray-600">
        <div>
          <span>{`${pointsLabel} `}by {username}</span>
          &nbsp;
          <span>
            <Link
              className="no-underline hover:underline"
              to={itemPageRoute}
            >
              {postedAgo}
            </Link>
          </span>
        </div>
        <div>|</div>
        <div>
          <Link
            className="no-underline hover:underline"
            to={itemPageRoute}
          >
            {commentsCount > 0 ? `${commentsCount} comments` : 'discuss' }
          </Link>
        </div>
      </div>
    </div>
  );
}
