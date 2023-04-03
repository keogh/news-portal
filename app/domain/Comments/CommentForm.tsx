import { Form } from "@remix-run/react";
import * as React from "react";

interface Props {
  className?: string;
}

export default function CommentForm({ className }: Props) {
  return (
    <Form method="post" className={className}>
      <textarea
        id="text"
        name="text"
        rows={8}
        className={`
          block w-full max-w-3xl rounded-md border-0 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:py-1.5 sm:text-sm sm:leading-6
        `}
        disabled
        placeholder="Comments are disabled for now"
      />
      <button
        className="mt-4 rounded-md bg-indigo-500 px-2.5 py-1.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
        type="submit"
        disabled
      >
        agregar comentario
      </button>
    </Form>
  )
}