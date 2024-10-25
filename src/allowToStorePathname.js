import pathnameStore from './producePathnameStore.js';

const allowToStorePathname = (subDirInfo, subDirPathname, sourceFilePath) => {
  const isPathnameStored = !!pathnameStore.getStoredPathname();

  const isSubDirDirectory = subDirInfo.isDirectory();

  const isSubDirPathnameIncludesReExportsFileDir = subDirPathname.includes(sourceFilePath);

  if (!isPathnameStored && !isSubDirDirectory && isSubDirPathnameIncludesReExportsFileDir) return true;
};

export default allowToStorePathname;
