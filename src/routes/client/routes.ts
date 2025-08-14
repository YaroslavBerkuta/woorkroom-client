import HomePage from "@/pages/home.page";
import { createRoute } from "@tanstack/react-router";
import AboutPage from "@/pages/about.page";
import { clientLayoutRoute } from "./__client";

export const HomeRoute = createRoute({
  getParentRoute: () => clientLayoutRoute,
  component: HomePage,
  path: "/",
});

export const AboutRoute = createRoute({
  getParentRoute: () => clientLayoutRoute,
  component: AboutPage,
  path: "/about",
});
