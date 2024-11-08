import normalizeBasename from './normalizeBasename';

const getVariableNames = (filePaths: string[]): string[] => {
  return filePaths.map((filePath) => {
    const basename = filePath.slice(filePath.lastIndexOf('/') + 1);

    return normalizeBasename(basename);
  });
};

export default getVariableNames;
