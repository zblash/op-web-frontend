export function BaseFactory(key: string, extraKeys: any) {
  return {
    all: [key] as const,
    details: (id: string) => [key, id] as const,
    ...extraKeys,
  };
}
