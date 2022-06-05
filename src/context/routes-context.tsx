import React, { useMemo } from 'react';
import { RoutesProps } from 'react-router-dom';
import { createCtx } from './helpers';
import { useShipmentsContext, ShipmentType, ShipmentItemType } from './shipments-context';

export type RouteType = ShipmentItemType & {
  path: string;
}

type RoutesType = Omit<ShipmentType, 'data' | 'cancel'> & {
  routes: RouteType[]
}

const [useRoutesContext, RoutesContextProvider] = createCtx<RoutesType>();

export { useRoutesContext };

export function getRouteByPath(routes: RouteType[] = [], path = '') {
  return routes.find((route) => route.path === path);
}

export function getRouteByName(routes: RouteType[] = [], name = '') {
  return routes.find((route) => route.name === name);
}

const getRoutes = (list: ShipmentItemType[] | null) => {
  if (!list || !Array.isArray(list)) {
    return [];
  }

  const transformNameToPath = (name = '') => name.split(' ').join('-').toLowerCase();

  const getChildRoute = (item: ShipmentItemType) => ({
    ...item,
    path: `/shipment/${transformNameToPath(item.name)}`,
  });

  return list.map(getChildRoute);
};

export default function RoutesProvider({ children }: RoutesProps) {
  const { loaded, error, data: shipments } = useShipmentsContext();

  const routes: RoutesType = useMemo(
    () => ({
      loaded,
      error,
      routes: getRoutes(shipments),
    }),
    [loaded, error, shipments]
  );

  return <RoutesContextProvider value={routes}>{children}</RoutesContextProvider>;
}
