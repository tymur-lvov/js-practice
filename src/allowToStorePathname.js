import pathnameStore from './producePathnameStore.js';

const allowToStorePathname = (subDirInfo, subDirPathname, reExportsDirPath) => {
  const isPathnameStored = !!pathnameStore.getStoredPathname();

  const isSubDirDirectory = subDirInfo.isDirectory();

  const isSubDirPathnameIncludesReExportsFileDir = subDirPathname.includes(reExportsDirPath);

  if (!isPathnameStored && !isSubDirDirectory && isSubDirPathnameIncludesReExportsFileDir) return true;
};

export default allowToStorePathname;
