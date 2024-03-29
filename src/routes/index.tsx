import React, { Suspense } from "react";
import { Route, Switch } from "react-router-dom";
import { Layout } from "../components";
import PageNotFound from "../components/PageNotFound";
import { ProtectedRoute } from "./protectedRoute";

const Routes = () => (
  <Layout title="ADA UMKM">
    <Suspense fallback={<div />}>
      <Switch>
        {ProtectedRoute().routes.map((value: any, key: any) => (
          <Route
            key={key}
            exact={value.exact}
            path={value.path}
            render={() => (
              <value.component authedData={ProtectedRoute().data} />
            )}
          />
        ))}
        <Route
          path="*"
          render={() => (
            <PageNotFound authedData={ProtectedRoute().data || undefined} />
          )}
        />
      </Switch>
    </Suspense>
  </Layout>
);

const RootRoutes = () => <Route component={Routes} />;

export default RootRoutes;
