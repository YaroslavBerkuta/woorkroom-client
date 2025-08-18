import { createRoute } from "@tanstack/react-router";
import { authLayoutRoute } from "./__auth";
import LoginPage from "@/pages/auth-pages/login";
import RegisterPage from "@/pages/auth-pages/register";
import SelectCompany from "@/pages/auth-pages/selectCompany";

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

export const SelectCompanyRoute = createRoute({
  getParentRoute: () => authLayoutRoute,
  component: SelectCompany,
  path: "/select-company",
});
