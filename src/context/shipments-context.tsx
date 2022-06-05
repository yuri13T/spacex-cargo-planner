import React from 'react';
import { createCtx } from './helpers';
import useAxios, { UseAxiosReturn } from '../containers/hooks/useAxios';

export type ShipmentItemType = {
  name: string;
  email: string;
  boxes?: string;
}

export type ShipmentType = UseAxiosReturn<ShipmentItemType>

const [useShipmentsContext, ShipmentsContextProvider] = createCtx<ShipmentType>();

export { useShipmentsContext };

export default function ShipmentsProvider({ children }: React.PropsWithChildren<unknown>): JSX.Element {
  const shipments = useAxios<ShipmentItemType>({
    url: 'https://bitbucket.org/hpstore/spacex-cargo-planner/raw/204125d74487b1423bbf0453f4dcb53a2161353b/shipments.json',
  });
  return (
    <ShipmentsContextProvider value={shipments}>{children}</ShipmentsContextProvider>
  );
}
