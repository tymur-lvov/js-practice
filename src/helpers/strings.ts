import { basename, extname } from 'path';
import { processExportStatement } from './processors';

export const produceVarName = (filePath) => {
  if (/\.(ts|tsx)$/.test(filePath)) {
    return null;
  }

  return basename(filePath, extname(filePath)).replace(/[^a-zA-Z0-9$_]/g, '');
};

export const produceStatement = ({ condition, relativePath, varName }) => {
  switch (condition) {
    case 'namedExport': {
      return `export * from '${relativePath}';\n`;
    }

    case 'typeNamedExport': {
      return `export type * from '${relativePath}';\n`;
    }

    case 'defaultExport': {
      return `export { default as ${varName} } from '${relativePath}';\n`;
    }
  }
};

export const produceFileData = ({ childFiles }) => {
  return childFiles.reduce(
    (fileData, childFile) => fileData.concat(processExportStatement(childFile)),
    ''
  );
};
