import React from 'react';
import { createCtx } from './helpers';
import useAxios from '../hooks/useAxios';

const [useShipmentsContext, ShipmentsContextProvider] = createCtx();

export { useShipmentsContext };

export default function ShipmentsProvider({ children }) {
  const shipments = useAxios({
    url: 'https://bitbucket.org/hpstore/spacex-cargo-planner/raw/204125d74487b1423bbf0453f4dcb53a2161353b/shipments.json',
  });
  return (
    <ShipmentsContextProvider value={shipments}>{children}</ShipmentsContextProvider>
  );
}
