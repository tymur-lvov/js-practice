import * as fs from 'fs/promises';
import * as path from 'path';

import errorCathingDecor from './errorCathingDecor.js';

const segregateFilesFromDirs = async (dirContent, sourceFilePath) => {
  const segregatedEntities = await Promise.all(
    dirContent.map(async (entity) => {
      const entityPath = path.resolve(sourceFilePath, entity);

      const entityInfo = await fs.lstat(entityPath);

      const isEntityDirectory = entityInfo.isDirectory();

      const isEntitySrcFile = entity === 'index.ts';

      return !isEntityDirectory && !isEntitySrcFile ? entity : 'entityMarkedAsDir';
    })
  );

  return segregatedEntities.filter((entity) => entity !== 'entityMarkedAsDir');
};

export default errorCathingDecor(segregateFilesFromDirs);
