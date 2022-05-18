import React, { useMemo } from 'react';
import { useRoutes, Navigate } from 'react-router-dom';
import { createCtx } from './helpers';
import { useShipmentsContext } from './shipments-context';
import MainLayout from '../layouts/MainLayout';
// TODO: Find out info about this issue import/no-cycle and fix it.
import Shipment from '../components/shipment/Shipment';
import NoMatch from '../components/common/NoMatch';

const [useRoutesContext, RoutesContextProvider] = createCtx();

export { useRoutesContext };

export function getRouteByPath(routes = [], path = '') {
  return routes.find((route) => route.path === path);
}

export function getRouteByName(routes = [], name = '') {
  return routes.find((route) => route.name === name);
}

const getRoutes = (list) => {
  if (!list || !Array.isArray(list)) {
    return [];
  }

  const transformNameToPath = (name = '') => name.split(' ').join('-').toLowerCase();

  const getChildRoute = (item) => ({
    ...item,
    path: `/${transformNameToPath(item.name)}`,
    element: <Shipment />,
  });

  return list.reduce((acc, curr, index) => {
    if (index === 0) {
      return [
        {
          path: '/',
          element: <MainLayout />,
          children: [
            {
              path: '/',
              index: true,
              element: <Navigate to={`/${transformNameToPath(curr.name)}`} replace />,
            },
            getChildRoute(curr),
          ],
        },
      ];
    }

    let mainLayout = acc[0];
    mainLayout = {
      ...mainLayout,
      children: [...mainLayout.children, getChildRoute(curr)],
    };

    if (index === list.length - 1) {
      mainLayout = {
        ...mainLayout,
        children: [...mainLayout.children, { path: '*', element: <NoMatch /> }],
      };
    }

    return [mainLayout];
  }, []);
};

export default function RoutesProvider() {
  const { /* loaded, error, */ data: shipments } = useShipmentsContext();

  const mainLayout = useMemo(() => getRoutes(shipments), [shipments]);
  // For the context value, routes, delete the index route and the last NoMatch route.
  const routes = mainLayout[0]?.children.slice(1, -1);

  const routeElements = useRoutes(mainLayout);

  return <RoutesContextProvider value={routes}>{routeElements}</RoutesContextProvider>;
}
