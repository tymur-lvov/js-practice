import { ReExport } from '@types';

const produceFileData = ({ filePaths, variableNames }: ReExport): string => {
  return filePaths.reduce((accumString, filePath, filePathIndex) => {
    const reExportTemplate = `import { default as ${variableNames[filePathIndex]} } from '${filePath}'\n`;

    return accumString.concat(reExportTemplate);
  }, '');
};

export default produceFileData;
