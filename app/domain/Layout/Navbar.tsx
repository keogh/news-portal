import { Form, Link } from "@remix-run/react";
import { LOGIN_ROUTE, LOGOUT_ROUTE, ROOT_ROUTE, SUBMIT_ROUTE } from "~/utils/routeConstants";
import { User } from "@prisma/client";

interface Props {
  currentUser: User | null;
}

export default function Navbar({ currentUser }: Props) {
  return (
    <nav className={`flex py-4 justify-between`}>
      <div className={`flex gap-x-4`}>
        <div className={`flex gap-x-2`}>
          <Link to={ROOT_ROUTE}>nuevos</Link>
          <span className="block">|</span>
          <Link to={SUBMIT_ROUTE}>submit</Link>
        </div>
      </div>

      <div>
        <Link to={ROOT_ROUTE}>
          News
        </Link>
      </div>
      <div className={`flex gap-x-4`}>
        {currentUser === null ? (
          <Link to={LOGIN_ROUTE}>iniciar sesión</Link>
        ) : (
          <div className={`flex gap-x-2`}>
            <span className={`block`}>{currentUser.id}</span>
            <span className={`block`}>|</span>
            <Form action={LOGOUT_ROUTE} method="post">
              <button
                type="submit"
              >
                logout
              </button>
            </Form>
          </div>
        )}
      </div>
    </nav>
  )
}