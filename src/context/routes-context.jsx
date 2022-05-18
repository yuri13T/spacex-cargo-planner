import React, { useMemo } from 'react';
import { createCtx } from './helpers';
import { useShipmentsContext } from './shipments-context';

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
  });

  return list.map(getChildRoute);
};

export default function RoutesProvider({ children }) {
  const { loaded, error, data: shipments } = useShipmentsContext();

  const routes = useMemo(
    () => ({
      loaded,
      error,
      routes: getRoutes(shipments),
    }),
    [loaded, error, shipments]
  );

  return <RoutesContextProvider value={routes}>{children}</RoutesContextProvider>;
}
