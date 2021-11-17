import React from 'react';
import { toast, TypeOptions } from 'react-toastify';
import { useWindowSize } from './ui/use-window-size';
import { useLocation } from 'react-router-dom';

function useStateFromProp<T>(initialValue: T): [T, React.Dispatch<React.SetStateAction<T>>] {
  const [value, setValue] = React.useState(initialValue);

  React.useEffect(() => setValue(initialValue), [initialValue]);

  return [value, setValue];
}

function usePrevious<T>(value: T, setInitial?: boolean): T {
  const ref = React.useRef<T>(setInitial ? value : undefined);

  React.useEffect(() => {
    ref.current = value;
  }, [value]);

  return ref.current;
}

function useMemoWithPrevDeps<T, D>(factory: (prevDeps: ReadonlyArray<D>) => T, deps: ReadonlyArray<D>): T {
  const depsMemo = React.useMemo(() => deps, deps); // eslint-disable-line
  const prevDeps = usePrevious(depsMemo);
  const factoryMemo = React.useCallback(() => factory(prevDeps || []), deps); // eslint-disable-line

  return React.useMemo(() => factoryMemo(), [factoryMemo]);
}

function useKeepValue<T>(value: T | undefined, wantedValue: T): T {
  const constantWantedValue = React.useRef(wantedValue).current;
  const ref = React.useRef(value);

  if (ref.current !== constantWantedValue && value !== ref.current) {
    ref.current = value;
  }

  return ref.current;
}

function useStateWithCallback<T>(
  initialState: T,
  callback: (s: T) => void,
): [T, React.Dispatch<React.SetStateAction<T>>] {
  const [state, setState] = React.useState(initialState);

  React.useEffect(() => callback(state), [state, callback]);

  return [state, setState];
}

function useWindowEvent<T extends keyof WindowEventMap>(event: T, callback: (e: WindowEventMap[T]) => void) {
  React.useEffect(() => {
    window.addEventListener(event, callback);

    return () => window.removeEventListener(event, callback);
  }, [event, callback]);
}
type UseObjectStateSetStateAction<T> = (newValue: Partial<T>, isCompletely?: boolean) => void;
function useObjectState<T>(initialState: T): [T, UseObjectStateSetStateAction<T>] {
  const [state, setState] = React.useState(initialState);
  const setMergedState = React.useCallback((newState, isCompletely) => {
    if (isCompletely) {
      setState(prevState => newState);
    } else {
      setState(prevState => ({ ...prevState, ...newState }));
    }
  }, []);

  return [state, setMergedState];
}
function useArrayState<T>(initialState: T[]): [T[], React.Dispatch<React.SetStateAction<Partial<T>>>] {
  const [state, setState] = React.useState(initialState);
  const setMergedState = React.useCallback(newState => setState(prevState => [...prevState, ...newState]), []);

  return [state, setMergedState];
}

function useAlert() {
  const { width } = useWindowSize();
  const show = (message: string, { type }: { type: TypeOptions }) => {
    toast(message, {
      type,
      progressClassName: 'fancy-progress-bar',
      position: width > 768 ? 'bottom-right' : 'top-right',
      autoClose: 4000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
    });
  };

  return { show };
}

function useLocationQueryParams() {
  const url = new URL(window.location.href);

  function getParam(key) {
    return url.searchParams.get(key) || '';
  }

  function setParam(key, value) {
    url.searchParams.set(key, value);
    window.history.pushState({}, '', url.toString());
  }

  return { setParam, getParam };
}

export {
  useStateFromProp,
  usePrevious,
  useKeepValue,
  useStateWithCallback,
  useWindowEvent,
  useObjectState,
  useArrayState,
  useMemoWithPrevDeps,
  useAlert,
  useLocationQueryParams,
};
