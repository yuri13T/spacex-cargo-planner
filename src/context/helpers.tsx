import { createContext, useContext, Provider } from 'react';

/**
 * A helper to create a Context and Provider with no upfront default value, and
 * without having to check for undefined all the time.
 */
export function createCtx<A extends Record<string, unknown> | unknown[] | null>(): readonly [
  () => A,
  Provider<A | undefined>
] {
  const ctx = createContext<A | undefined>(undefined);

  function useCtx(): A {
    const c = useContext(ctx);

    if (c === undefined) {
      throw new Error('useCtx must be inside a Provider with a value');
    }

    return c;
  }

  return [useCtx, ctx.Provider] as const; // 'as const' makes TypeScript infer a tuple
}
