const produceFileData = ({ filePaths, variableNames }) => {
  return filePaths.reduce((accumString, filePath, filePathIndex) => {
    const reExportTemplate = `import { default as ${variableNames[filePathIndex]} } from '${filePath}'\n`;

    return accumString.concat(reExportTemplate);
  }, '');
};

export default produceFileData;
