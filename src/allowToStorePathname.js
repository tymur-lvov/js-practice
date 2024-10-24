import pathnameStore from './createPathnameStore.js';

const allowToStorePathname = (subDirInfo, subDirPathname, reExportsFileDir) => {
  const isPathnameStored = !!pathnameStore.getStoredPathname();

  const isPathnameDirectory = subDirInfo.isDirectory();

  const isPathnameIncludesRelativeDir = subDirPathname.includes(reExportsFileDir);

  if (!isPathnameStored && !isPathnameDirectory && isPathnameIncludesRelativeDir) return true;
};

export default allowToStorePathname;
