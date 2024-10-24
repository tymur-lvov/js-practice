import pathnameStore from './createPathnameStore.js';

const allowToStorePathname = (subDirInfo, subDirPathname, reExportsFileDir) => {
  const isPathnameStored = !!pathnameStore.getStoredPathname();

  const isSubDirDirectory = subDirInfo.isDirectory();

  const isSubDirPathnameIncludesReExportsFileDir = subDirPathname.includes(reExportsFileDir);

  if (!isPathnameStored && !isSubDirDirectory && isSubDirPathnameIncludesReExportsFileDir) return true;
};

export default allowToStorePathname;
