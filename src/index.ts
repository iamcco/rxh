import { useState, useEffect } from 'react';
import { Observable } from 'rxjs';

type InitialState<State> = State | (() => State);

export function useObservable<State>(obs: Observable<State>): State | undefined;
export function useObservable<State>(obs: Observable<State>, initialState: InitialState<State>): State;
export function useObservable<State>(cb: () => Observable<State>): State | undefined;
export function useObservable<State>(cb: () => Observable<State>, initialState: InitialState<State>): State;
export function useObservable<State>(
  param: Observable<State> | (() => Observable<State>),
  initialState?: InitialState<State>,
): State | undefined {
  const [value, setValue] = useState(initialState);
  useEffect(() => {
    const obs = typeof param === 'function' ? param() : param;
    const subscription = obs.subscribe((res: State) => {
      setValue(res);
    });
    return (): void => {
      subscription.unsubscribe();
    };
  }, []); // eslint-disable-line react-hooks/exhaustive-deps
  return value;
}
