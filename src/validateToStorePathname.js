import pathnameStore from './createPathnameStore.js';

const validateTostorePathname = (subDirPathname, subDirInfo, relativeDir) => {
  const isDirectory = subDirInfo.isDirectory();

  const isIncludesRelativeDir = subDirPathname.includes(relativeDir);

  const isPathnameStored = pathnameStore.isPathnameStored();

  if (!isDirectory && isIncludesRelativeDir && !isPathnameStored) {
    return true;
  }
};

export default validateTostorePathname;
