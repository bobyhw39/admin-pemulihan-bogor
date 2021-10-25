import Auth from "./Auth";
import Banner from "./Dashboard/Banner";
import Category from "./Dashboard/Category";
import CategoryFaq from "./Dashboard/FAQ/Category";
import List from "./Dashboard/FAQ/List";
import Dashboard from "./Dashboard/Home";
import Product from "./Dashboard/Product";
import ResetPassword from "./Dashboard/ResetPassword";
import User from "./Dashboard/User";
import Wisata from "./Dashboard/Wisata";

export const routes = [{ path: "/", component: Dashboard, exact: true }];

export const noAuthRoutes = [{ path: "/login", component: Auth }];

export const protectedRoutes = [
  { path: "/dashboard", component: Dashboard, exact: true },
  { path: "/user", component: User, exact: true },
  { path: "/category", component: Category, exact: true },
  { path: "/product", component: Product, exact: true },
  { path: "/banner", component: Banner, exact: true },
  { path: "/info-wisata", component: Wisata, exact: true },
  { path: "/faq/list", component: List, exact: true },
  { path: "/faq/category", component: CategoryFaq, exact: true },
  { path: "/reset-password", component: ResetPassword, exact: true },
];
