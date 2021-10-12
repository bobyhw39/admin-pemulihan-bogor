import Auth from "./Auth";

export const routes = [
  { path: "/", component: Auth, exact: true  },
];

export const noAuthRoutes =[
  { path: "/login", component: Auth },
]

export const protectedRoutes =[
]
