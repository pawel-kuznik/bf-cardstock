/**
 *  This is a function that, in a very rudemetry way, sets the initial
 *  state of a localStorage zustand state. It's useful for when the state
 *  should have some initial data already inside, but we don't want to run
 *  a computation for that state each time we create a zustand store.
 */
export function hydrateLocalZustandState<TState>(key: string, hydrator: () => TState, version: number = 1 ) {

    // get the data from the localStorage.
    const data = window.localStorage.getItem(key);

    // check if we have some data. If that's the case, then we will
    // op-out of the hydration.
    if (!!data) return;

    const initialData = hydrator();

    // persist the initial data in the local storage
    window.localStorage.setItem(key, JSON.stringify({
        version,
        state: initialData
    }));
};