import { BaseKeysFactory } from './base-factory';
import { GetCategoriesVariables } from '../api/paginated-query-endpoints';

export const categoriesQueryKeys = BaseKeysFactory('states', {
  listByType: (type: GetCategoriesVariables) => [...categoriesQueryKeys.all, { type }] as const,
  parentCategories: () => [...categoriesQueryKeys.all, 'parents'] as const,
  subCategoriesByParent: (parentId: string) => [...categoriesQueryKeys.all, { parentId }] as const,
});
