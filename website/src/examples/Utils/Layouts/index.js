import {
  AppLayout,
  DefaultLayout,
  Flex,
  Link,
  SideBarLayout,
  Typography
} from '@captalys-platform/core';
import React, { useMemo } from 'react';

export const LayoutsExample = () => {
  const Login = () => (
    <Flex>
      <Typography component="h1">Login Page</Typography>
      <Flex container width="100%">
        <Link color="main" to="/register" text="Register" />
        <Link color="main" to="/sidebar-register" text="Sidebar Register" />
      </Flex>
    </Flex>
  );

  const Register = () => (
    <>
      <Typography component="h1">Register Page</Typography>
      <Link color="main" to="/login" text="Login" />
      <Link color="main" to="/sidebar-login" text="Sidebar Login" />
    </>
  );

  const routes = [
    {
      path: '/docs/utils-layouts',
      layout: DefaultLayout,
      layoutComponents: {
        content: () => <Login />
      },
      exact: true
    },
    {
      path: '/login',
      layout: DefaultLayout,
      layoutComponents: {
        content: () => <Login />
      }
    },
    {
      path: '/register',
      layout: DefaultLayout,
      layoutComponents: {
        content: () => <Register />
      }
    },
    {
      path: '/sidebar-login',
      layout: SideBarLayout,
      layoutComponents: {
        content: () => <Login />,
        sidebar: () => <Typography component="i">Sidebar Passado</Typography>
      }
    },
    {
      path: '/sidebar-register',
      layout: SideBarLayout,
      layoutComponents: {
        content: () => <Register />,
        sidebar: () => <Typography component="i">Sidebar Passado</Typography>
      }
    }
  ];

  return (
    <Flex margin="0 0 15px 0">
      <AppLayout
        layoutComponents={{
          Header: () => <Typography color="n0">Header</Typography>,
          Footer: () => <Typography color="n0">Footer</Typography>,
          main: useMemo(() => routes, [])
        }}
        offLayoutRoutes={[
          {
            path: '/only-login',
            component: Login
          }
        ]}
      />
    </Flex>
  );
};

export const AppLayoutGridExample = () => {
  const Content = () => (
    <Flex width="100%" height="100%" bgColor="primary">
      <Typography color="n0">Main Section</Typography>
    </Flex>
  );

  const appLayoutProps = {
    layoutComponents: {
      header: () => <Typography color="n0">Header Section</Typography>,
      footer: () => <Typography color="n0">Footer Section</Typography>,
      main: () => <Content />
    }
  };

  return (
    <Flex margin="0 0 15px 0">
      <AppLayout {...appLayoutProps} />
    </Flex>
  );
};

export const SideBarLayoutGridExample = () => {
  const Content = () => (
    <Flex width="100%" height="100%" bgColor="primary">
      <Typography color="n0">Content Section</Typography>
    </Flex>
  );

  const Sidebar = () => (
    <Flex width="100%" height="100%" bgColor="n70">
      <Typography color="n0">SideBar Section</Typography>
    </Flex>
  );

  return (
    <Flex margin="0 0 15px 0" height="300px">
      <SideBarLayout
        layoutComponents={{
          content: () => <Content />,
          sidebar: () => <Sidebar />
        }}
        path="/"
      />
    </Flex>
  );
};
