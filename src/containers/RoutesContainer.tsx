import React from 'react';
import { Routes, Route } from 'react-router-dom';
import RoutesProvider from '../context/routes-context';
import MainLayout from '../layouts/MainLayout';
import Shipment from '../components/shipment/Shipment';
import NoMatch from '../components/common/NoMatch';

export default function RoutesContainer() {
  return (
    <RoutesProvider>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route path="shipment/:shipmentPath" element={<Shipment />} />
          <Route path="*" element={<NoMatch />} />
        </Route>
      </Routes>
    </RoutesProvider>
  );
}
