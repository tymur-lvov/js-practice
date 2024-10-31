import * as fs from 'fs/promises';
import * as path from 'path';

import { errorCathingDecorator } from '@scripts';

const filterFilePaths = async (dirContent: string[], srcFileDirPath: string): Promise<string[]> => {
  const invalidEntities = ['index', 'DS_Store'];

  const segregatedEntities = await Promise.all(
    dirContent.map(async (entity) => {
      const entityPath = path.resolve(srcFileDirPath, entity);

      const entityInfo = await fs.lstat(entityPath);

      const isEntityFile = entityInfo.isFile();

      const isEntityValid = !invalidEntities.some((invalidEntitie) =>
        entityPath.includes(invalidEntitie)
      );

      return isEntityFile && isEntityValid ? entity : 'markedForFiltration';
    })
  );

  return segregatedEntities.filter((entity) => entity !== 'markedForFiltration');
};
export default errorCathingDecorator(filterFilePaths);
