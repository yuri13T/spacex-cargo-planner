import React, { useEffect, useMemo, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { Stack, Typography, TextField, Skeleton } from '@mui/material';
import { getRouteByPath, useRoutesContext } from '../../context/routes-context';

const getCargoBays = (value) => {
  if (!value) {
    return 0;
  }

  const floatValues = value
    .split(',')
    .filter((v) => !!(v && !Number.isNaN(Number.parseFloat(v))))
    .map((v) => Number.parseFloat(v));
  const sum = floatValues.reduce((acc, curr) => acc + curr, 0);

  return Math.ceil(sum / 10);
};

export default function Shipment() {
  const location = useLocation();

  const { loaded, routes } = useRoutesContext();

  const selectedShipment = useMemo(
    () => getRouteByPath(routes, location.pathname),
    [routes, location.pathname]
  );

  const [cargoBoxesValue, setCargoBoxesValue] = useState('');
  const [cargoBays, setCargoBays] = useState(0);

  const handleCargoBoxesChange = ({ target: { value } }) => {
    setCargoBoxesValue(value);
    setCargoBays(getCargoBays(value));
  };

  useEffect(() => {
    if (selectedShipment) {
      const boxes = selectedShipment.boxes ?? '';
      setCargoBoxesValue(boxes);
      setCargoBays(getCargoBays(boxes));
    }
  }, [selectedShipment]);

  return (
    <section>
      <Stack spacing={3.75}>
        <div>
          <Typography variant="h2">
            {!loaded ? <Skeleton width="70%" /> : selectedShipment?.name}
          </Typography>
          <Typography color="secondary">
            {!loaded ? <Skeleton width="35%" /> : selectedShipment?.email}
          </Typography>
        </div>
        <div>
          <Typography color="secondary" sx={{ textTransform: 'uppercase', mb: 1.25 }}>
            Cargo boxes
          </Typography>
          <TextField value={cargoBoxesValue} onChange={handleCargoBoxesChange} />
        </div>
        <div>
          <Typography
            variant="h4"
            color="secondary"
            sx={(theme) => ({
              [theme.breakpoints.down('sm')]: {
                textAlign: 'center',
              },
            })}
          >
            Number of required cargo bays
          </Typography>
          <Typography
            variant="h3"
            sx={(theme) => ({
              [theme.breakpoints.down('sm')]: {
                textAlign: 'center',
              },
            })}
          >
            {!loaded ? <Skeleton width="5%" /> : cargoBays}
          </Typography>
        </div>
      </Stack>
    </section>
  );
}
