import { ActionArgs, redirect } from "@remix-run/node";
import { requireUserId } from "~/session.server";
import { badRequest } from "~/utils/request.server";
import { createVote } from "~/models/vote.server";

export async function action({ request }: ActionArgs) {
  const userId = await requireUserId(request);

  const formData = await request.formData();
  const itemId = formData.get('itemId');

  if (typeof itemId !== 'string') {
    return badRequest( { formError: 'invalid itemId' });
  }

  await createVote({ userId, itemId });

  return redirect('/');
}

export default function Vote() {
  return null;
}
