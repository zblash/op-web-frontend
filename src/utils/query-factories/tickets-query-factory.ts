import { BaseKeysFactory } from './base-factory';

export const ticketsQueryKeys = BaseKeysFactory('tickets', {
  listByFilter: (s: { pageNumber: number; sortBy?: string; sortType?: string }) => [...ticketsQueryKeys, s] as const,
  repliesById: (ticketId: string) => [...ticketsQueryKeys, 'replies', { ticketId }] as const,
});
