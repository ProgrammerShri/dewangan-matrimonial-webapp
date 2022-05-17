import { Skeleton } from "antd";
import React, { Suspense } from "react";
import FooterLayout from "../layouts/FooterLayout";
const HomeLayout = React.lazy(() => import("../layouts/HomeLayout"));
const FooterBar = React.lazy(() => import("../components/Footer"));

const LoginPage = React.lazy(() => import("../pages/LoginPage"));
const LoginRoute = () => (
  <>
    <Suspense fallback={<Skeleton />}>
      <LoginPage />
    </Suspense>
  </>
);

const SignUpPage = React.lazy(() => import("../pages/SignupPage"));
const SignUpRoute = () => (
  <>
    <Suspense fallback={<Skeleton />}>
      <SignUpPage />
    </Suspense>
  </>
);

const HomePage = React.lazy(() => import("../pages/HomePage"));
const DashboardRoute = () => (
  <>
    <Suspense fallback={<Skeleton />}>
      <HomeLayout>
        <FooterLayout>
          <HomePage />
        </FooterLayout>
      </HomeLayout>
    </Suspense>
  </>
);

const MessagesPage = React.lazy(() => import("../pages/MessagesPage"));
const MessagesRoute = () => (
  <>
    <Suspense fallback={<Skeleton />}>
      <FooterLayout>
        <MessagesPage />
      </FooterLayout>
    </Suspense>
  </>
);

export { LoginRoute, DashboardRoute, SignUpRoute, MessagesRoute };
