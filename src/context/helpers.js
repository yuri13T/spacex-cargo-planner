import { createContext, useContext } from 'react';

/**
 * A helper to create a Context and Provider with no upfront default value, and
 * without having to check for undefined all the time.
 */
export function createCtx() {
  const ctx = createContext(undefined);

  function useCtx() {
    const c = useContext(ctx);
    if (c === undefined) {
      throw new Error('useContext must be inside a Provider with a value');
    }
    return c;
  }
  return [useCtx, ctx.Provider];
}
