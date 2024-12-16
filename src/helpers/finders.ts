import { getIndexFileNameConditions } from './conditions';

export const findIndexFileName = (parentPath) => {
  const conditions = getIndexFileNameConditions(parentPath);

  return conditions.find(({ condition }) => condition()).result;
};
