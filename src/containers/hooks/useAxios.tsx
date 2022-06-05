import { useState, useRef, useEffect } from 'react';
import axios, { Method, AxiosError } from 'axios';

type UseAxiosProps = {
  url: string;
  method?: Method;
  payload?: Record<string, unknown>;
}

export type UseAxiosReturn<D> = {
  loaded: boolean;
  error: AxiosError | undefined;
  data: D[] | null;
  cancel: () => void;
}

const useAxios = <D,>({ url, method, payload }: UseAxiosProps): UseAxiosReturn<D> => {
  const [data, setData] = useState(null);
  const [error, setError] = useState<AxiosError>();
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
        setError(error as AxiosError);
      } finally {
        setLoaded(true);
      }
    })();
  }, [method, payload, url]);

  return { loaded, error, data, cancel };
};

export default useAxios;
