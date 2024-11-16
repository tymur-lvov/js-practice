import * as fs from 'fs/promises';

import { IReExport } from '@types';

const writeReExportFile = ({ srcFilePath, statements }: IReExport): void => {
  const fileContent = statements.join('\n');

  fs.writeFile(srcFilePath, fileContent);
};

export default writeReExportFile;
