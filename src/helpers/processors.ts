import {
  assignChildFiles,
  assignDirItems,
  assignFilePath,
  assignIndexFileData,
  assignIndexFilePath,
} from './assigners';
import { asyncCompose } from './composers';
import { filterFiles, filterItemsToInclude } from './filters';
import { basename, extname } from 'path';

export const processIndexFile = async (dirPath) => {
  return asyncCompose(assignIndexFilePath, assignIndexFileData)(dirPath);
};

export const processChildFile = async (dirEnt) => {
  return asyncCompose(assignFilePath)(dirEnt);
};

export const processTargetFiles = async (dirPath) => {
  return asyncCompose(assignDirItems, filterItemsToInclude, filterFiles, assignChildFiles)(dirPath);
};

export const processIndexFileData = async (dirPath) => {
  return asyncCompose(processTargetFiles, createIndexFileData)(dirPath);
};

export const createIndexFileData = ({ parentPath, childFiles }) => {
  const res = childFiles.reduce((data, { filePath }) => {
    const getRelativePath = (parentPath, childPath) => {
      const parentPathElements = parentPath.split('/');
      const parentPathLastElement = parentPathElements[parentPathElements.length - 1];

      const childPathElements = childPath.split('/');
      const parentDirIndex = childPathElements.indexOf(parentPathLastElement);

      const relativePath = `./${childPathElements.slice(parentDirIndex + 1).join('/')}`;
      const lastDotIndex = relativePath.lastIndexOf('.');

      return relativePath.slice(0, lastDotIndex);
    };

    const relativePath = getRelativePath(parentPath, filePath);

    if (!/\.(ts|tsx)$/.test(filePath)) {
      const varName = basename(filePath, extname(filePath)).replace(/[^a-zA-Z0-9$_]/g, '');

      return data.concat(`export { default as ${varName} } from '${relativePath}';\n`);
    }

    return data.concat(
      `export ${filePath.includes('@types') ? 'type ' : ''}* from '${relativePath}';\n`
    );
  }, '');

  console.log(res);
};
