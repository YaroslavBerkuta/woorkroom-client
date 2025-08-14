import { createRoute } from "@tanstack/react-router";
import { authLayoutRoute } from "./__auth";
import LoginPage from "@/pages/login";
import RegisterPage from "@/pages/register";

export const AuthRoute = createRoute({
  getParentRoute: () => authLayoutRoute,
  path: "/login",
  component: LoginPage,
});

export const RegisterRoute = createRoute({
  getParentRoute: () => authLayoutRoute,
  path: "/register",
  component: RegisterPage,
});
