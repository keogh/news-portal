import type { ActionArgs } from "@remix-run/node";
import { redirect } from "@remix-run/node";
import * as React from 'react';
import { Form } from "@remix-run/react";

import { requireUserId } from "~/session.server";
import { createItem } from "~/models/item.server";

export async function action({ request }: ActionArgs) {
  const userId = await requireUserId(request);

  const formData = await request.formData();
  const title = formData.get('title') as string;
  const url = formData.get('url') as string;
  const text = formData.get('text') as string;

  // TODO: Validate input with yup https://github.com/jquense/yup

  const item = await createItem({ title, url, text, userId });

  return redirect(`/item/${item.id}`);
}

export default function Submit() {
  return (
    <Form method="post">
      <div className="flex gap-1 py-2 w-96 items-baseline">
        <label htmlFor="title" className="w-1/6">Título: </label>
        <input
          type="text"
          id="title"
          name="title"
          className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
        />
      </div>
      <div className="flex gap-1 py-2 w-96 items-baseline">
        <label htmlFor="url" className="w-1/6" >Url: </label>
        <input
          type="text"
          id="url"
          name="url"
          className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
        />
      </div>
      <div className="flex gap-1 py-2 w-96 items-baseline">
        <label htmlFor="text" className="w-1/6">Texto: </label>
        <textarea
          id="text"
          name="text"
          rows={6}
          className="block w-full rounded-md border-0 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:py-1.5 sm:text-sm sm:leading-6"
        />
      </div>
      <div className="flex gap-2 py-2 w-72">
        <div className="w-1/6" />
        <button
          type="submit"
          className="rounded-md bg-indigo-500 px-2.5 py-1.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
        >
          Submit
        </button>
      </div>
      <div className="ml-14 mt-1 w-96 text-sm">
        Deje la URL en blanco para publicar una pregunta ha ser discutida.
        Si no hay url, el "texto" aparecerá al principio del hilo.
        Si hay una URL entonces el texto es opcional.
      </div>
    </Form>
  )
}
