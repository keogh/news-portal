import type { V2_MetaFunction } from "@remix-run/node";
import { json } from '@remix-run/node';
import { useLoaderData} from "@remix-run/react";

export const meta: V2_MetaFunction = () => [{ title: "Some News" }];

export const loader = async () => {
  return json({
    items: [
      { title: 'uno' },
      { title: 'dos' }
    ],
  });
};

export default function Index() {
  const { items } = useLoaderData<typeof loader>();

  return (
    <main className="relative min-h-screen bg-white sm:flex">
      <div className="relative sm:pb-16 sm:pt-8">
        <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
          <ol>
            {items.map((item, key) => (
              <li>{item.title}</li>
            ))}
          </ol>
        </div>
      </div>
    </main>
  );
}
