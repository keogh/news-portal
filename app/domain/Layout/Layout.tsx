import type { ReactNode } from "react";

import type { User } from "@prisma/client";
import Navbar from "~/domain/Layout/Navbar";

interface Props {
  children?: ReactNode;
  currentUser: User | null;
}

export default function Layout({ children, currentUser }: Props) {
  return (
    <div className={`mx-auto md:w-5/6 w-full`}>
      <header className={`px-8 bg-gray-200`}>
        <Navbar currentUser={currentUser} />
      </header>
      <div>
        {children}
      </div>
    </div>
  )
}
