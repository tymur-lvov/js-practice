import * as fs from 'fs/promises';
import * as path from 'path';

import pathnameStore from './producePathnameStore.js';
import errorCathingDecor from './errorCathingDecor.js';
import allowToStorePathname from './allowToStorePathname.js';

const produceReExportsPaths = async (reExportsDirPath) => {
  const dirsContent = await fs.readdir(reExportsDirPath, { recursive: true });

  const segregatedEntities = await Promise.all(
    dirsContent.map(async (entity) => {
      const entityPath = path.resolve(reExportsDirPath, entity);

      const entityInfo = await fs.lstat(entityPath);

      const isEntityDirectory = entityInfo.isDirectory();

      const isEntityReExportsFile = entity === 'index.ts';

      if (!isEntityDirectory && !isEntityReExportsFile) return entity;
    })
  );

  return segregatedEntities.filter((entity) => !!entity);
};

export default errorCathingDecor(produceReExportsPaths);
