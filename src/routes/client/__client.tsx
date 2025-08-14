import { Outlet, createRoute, redirect } from "@tanstack/react-router";
import { rootRoute } from "../__root";

export const clientLayoutRoute = createRoute({
  getParentRoute: () => rootRoute,
  id: "client",
  beforeLoad: ({ context, location }) => {
    console.log(context);
    if (!context.auth?.isAuthenticated) {
      throw redirect({ to: "/login", search: { redirect: location.href } });
    }
  },
  component: () => <Outlet />,
});
