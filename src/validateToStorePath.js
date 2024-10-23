import pathStore from './createPathStore.js';

const validateToStorePath = (subDirPath, subDirInfo, relativeDir) => {
  const isDirectory = subDirInfo.isDirectory();

  const isIncludesRelativeDir = subDirPath.includes(relativeDir);

  const isPathStored = pathStore.isPathStored();

  if (!isDirectory && isIncludesRelativeDir && !isPathStored) {
    return true;
  }
};

export default validateToStorePath;
