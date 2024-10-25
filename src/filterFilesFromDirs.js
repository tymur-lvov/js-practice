import * as fs from 'fs/promises';
import * as path from 'path';

import errorCathingDecorator from './errorCathingDecorator.js';

const filterFilesFromDirs = async (dirContent, sourceFilePath) => {
  const segregatedEntities = await Promise.all(
    dirContent.map(async (entity) => {
      const entityPath = path.resolve(sourceFilePath, entity);

      const entityInfo = await fs.lstat(entityPath);

      const isEntityDirectory = entityInfo.isDirectory();

      const isEntitySourceFile = entity === 'index.ts';

      return !isEntityDirectory && !isEntitySourceFile ? entity : 'entityMarkedAsDir';
    })
  );

  return segregatedEntities.filter((entity) => entity !== 'entityMarkedAsDir');
};

export default errorCathingDecorator(filterFilesFromDirs);
