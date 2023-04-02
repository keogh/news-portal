import * as React from 'react';
import { Form } from "@remix-run/react";

interface Props {
  className: string,
  itemId: string,
  hide?: boolean,
}

export default function Vote({ className, itemId, hide = false }: Props) {
  return (
    <div className={`w-4 h-4 cursor-pointer ${className}`}>
      <Form method="post" action="/vote">
        <input type="hidden" id="itemId" name="itemId" value={itemId} />
        <button className="block w-full">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
          >
            <path fillRule="evenodd" d="M11.47 7.72a.75.75 0 011.06 0l7.5 7.5a.75.75 0 11-1.06 1.06L12 9.31l-6.97 6.97a.75.75 0 01-1.06-1.06l7.5-7.5z" clipRule="evenodd" />
          </svg>
        </button>
      </Form>
    </div>
  )
}
