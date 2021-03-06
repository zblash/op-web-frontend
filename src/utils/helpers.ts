import * as React from 'react';

type MaybeArray<T> = T | T[];

/* eslint-disable @typescript-eslint/no-explicit-any */

function twoDigit(n: any) {
  return (n < 10 ? '0' : '') + n;
}

function makeid(length: number) {
  let result = '';
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
  for (let i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * characters.length));
  }

  return result;
}
function isArray<T>(o: MaybeArray<T>): o is Array<T> {
  return Array.isArray(o);
}
const isObject = (o: any) => !isArray(o) && typeof o === 'object' && o !== null && o !== undefined;

function objectKeys<K extends string>(obj: Record<K, any>): K[] {
  return Object.keys(obj) as K[];
}
function objectForeach<K extends string, V>(obj: Record<K, V>, callback: (key: K, value: V) => void) {
  Object.keys(obj).forEach(key => callback(key as K, obj[key]));
}
function objectMap<K extends string, V, G>(obj: Record<K, V>, callback: (key: K, value: V) => G): Record<K, G> {
  const newObject: Record<K, G> = {} as any;
  Object.keys(obj).forEach(key => {
    newObject[key] = callback(key as K, obj[key]);
  });

  return newObject;
}

function objectValues<K>(obj: Record<string, K>): K[] {
  return Object.keys(obj).map(_key => obj[_key]) as K[];
}

function getDisplayName(WrappedComponent: any): string {
  return WrappedComponent.displayName || WrappedComponent.name || 'Component';
}

function narrowObject<T extends boolean>(
  obj: Record<string, any>,
  isString?: T,
): T extends true ? string : Record<string, string | number | boolean | null | undefined> {
  const newobject: any = {};
  Object.keys(obj).forEach(key => {
    const value = obj[key];
    if (isObject(value) || isArray(value)) {
      const transformedData = narrowObject(value);
      Object.keys(transformedData).forEach(nestedObjectKey => {
        newobject[`${key}.${nestedObjectKey}`] = transformedData[nestedObjectKey];
      });
    } else {
      newobject[key] = value;
    }
  });

  if (isString) {
    return JSON.stringify(newobject) as any;
  }

  return newobject;
}

const stringLitArray = <L extends string>(arr: L[]) => arr;

function getKeyByValue(obj, value): string {
  return Object.keys(obj).find(key => obj[key] === value);
}

async function asyncMap(array: (() => Promise<any>)[]): Promise<any> {
  if (array.length === 0) {
    return Promise.resolve();
  }
  if (array.length === 1) {
    return array[0]();
  }
  for (let index = 0; index < array.length; index++) {
    // eslint-disable-next-line no-await-in-loop
    await array[index]();
  }

  return Promise.resolve();
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

function scrollToRef(ref: React.RefObject<any>) {
  if (ref.current) {
    window.scrollTo({
      top: ref.current.offsetTop - 150,
      behavior: 'smooth',
    });
  }
}

function dateToString(date: Date) {
  return `${twoDigit(date.getDate())}-${twoDigit(date.getMonth() + 1)}-${date.getFullYear()}`;
}

function stringToDate(dateString: string) {
  const newDateString = dateString.replace(/(\d+[/])(\d+[/])/, '$2$1');

  return new Date(newDateString);
}

export {
  // eslint-disable-next-line no-undef
  MaybeArray,
  twoDigit,
  makeid,
  getDisplayName,
  narrowObject,
  stringLitArray,
  isArray,
  isObject,
  getKeyByValue,
  objectKeys,
  objectValues,
  objectForeach,
  asyncMap,
  objectMap,
  useLocationQueryParams,
  scrollToRef,
  dateToString,
  stringToDate,
};
