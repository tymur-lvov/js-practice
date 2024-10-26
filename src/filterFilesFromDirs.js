import fs from 'fs/promises';
import path from 'path';

import errorCathingDecorator from './errorCathingDecorator.js';

const filterFilesFromDirs = async (dirContent, srcFileDirPath) => {
  const segregatedEntities = await Promise.all(
    dirContent.map(async (entity) => {
      const entityPath = path.resolve(srcFileDirPath, entity);

      const entityInfo = await fs.lstat(entityPath);

      const isEntityFile = entityInfo.isFile();

      const isEntitySourceFile = entity === 'index.ts';

      return isEntityFile && !isEntitySourceFile ? entity : 'markedAsDir';
    })
  );

  return segregatedEntities.filter((entity) => entity !== 'markedAsDir');
};

export default errorCathingDecorator(filterFilesFromDirs);
