import * as fs from 'fs/promises';

import { IReExport } from '@types';

const writeReExportFiles = (reExports: IReExport[]): void => {
  reExports.forEach(({ srcFilePath, statements }) => {
    const fileContent = statements.join('\n');

    fs.writeFile(srcFilePath, fileContent);
  });
};

export default writeReExportFiles;
