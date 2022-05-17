import { useState, useRef, useEffect } from 'react';
import axios from 'axios';

const useAxios = ({ url, method, payload, deps = [] }) => {
  const [data, setData] = useState(null);
  const [error, setError] = useState('');
  const [loaded, setLoaded] = useState(false);

  const controllerRef = useRef(new AbortController());

  const cancel = () => {
    controllerRef.current.abort();
  };

  useEffect(() => {
    (async () => {
      try {
        const response = await axios.request({
          url,
          method,
          data: payload,
          signal: controllerRef.current.signal,
        });

        setData(response.data);
      } catch (error) {
        setError(error);
      } finally {
        setLoaded(true);
      }
    })();
    // eslint-disable-next-line
  }, deps);

  return { loaded, error, data, cancel };
};

export default useAxios;
