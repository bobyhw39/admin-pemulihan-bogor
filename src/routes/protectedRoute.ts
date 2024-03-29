import { AuthUser } from "../models/AuthUser";
import { getDataSession } from "../utils/utils";
import { noAuthRoutes, protectedRoutes, routes } from "./routes";

export const ProtectedRoute = () => {
  // const data: AuthUser | any = getDataSession();
  const data: AuthUser | any = { user_id: 1 };
  // if (data === undefined) {
  //   return { routes: [...noAuthRoutes, ...routes], data };
  // }

  // return { routes: [...protectedRoutes, ...routes], data };
  return {
    routes: [...protectedRoutes, ...routes, ...noAuthRoutes],
    data,
  };
};
