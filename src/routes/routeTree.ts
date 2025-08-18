import { rootRoute } from "./__root";
import { authLayoutRoute } from "./auth/__auth";
import { AuthRoute, RegisterRoute } from "./auth/route";
import { clientLayoutRoute } from "./client/__client";
import { HomeRoute } from "./client/routes";
import { AboutRoute } from "./client/routes";
import { SelectCompanyRoute } from "./auth/route";

export const routeTree = rootRoute.addChildren([
  authLayoutRoute.addChildren([AuthRoute, RegisterRoute, SelectCompanyRoute]),
  clientLayoutRoute.addChildren([HomeRoute, AboutRoute]),
]);
