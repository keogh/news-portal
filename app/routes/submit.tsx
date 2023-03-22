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
      <div>
        <label htmlFor="title">Título: </label>
        <input type="text" id="title" name="title" />
      </div>
      <div>
        <label htmlFor="url">Url: </label>
        <input type="text" id="url" name="url" />
      </div>
      <div>
        <label htmlFor="text">Texto: </label>
        <textarea id="text" name="text" />
      </div>
      <div>
        <button type="submit">Submit</button>
      </div>
    </Form>
  )
}
