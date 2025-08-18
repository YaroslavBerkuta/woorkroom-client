import { Outlet, createRoute, redirect } from "@tanstack/react-router";
import { rootRoute } from "../__root";
import { ClientLayoutComponent } from "@/shared";

export const clientLayoutRoute = createRoute({
  getParentRoute: () => rootRoute,
  id: "client",
  beforeLoad: ({ context }) => {
    console.log(context);
    if (!context.isAuthenticated) {
      throw redirect({ to: "/login" });
    } else if (context.isAuthenticated && !context.company) {
      throw redirect({ to: "/select-company" });
    }
  },
  component: () => (
    <ClientLayoutComponent>
      <Outlet />
    </ClientLayoutComponent>
  ),
});
