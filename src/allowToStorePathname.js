import pathnameStore from './producePathnameStore.js';

const allowToStorePathname = (subDirInfo, subDirPathname, srcFileDirPath) => {
  const isPathnameStored = !!pathnameStore.getStoredPathname();

  const isSubDirDirectory = subDirInfo.isDirectory();

  const isSubDirPathnameIncludesReExportsFileDir = subDirPathname.includes(srcFileDirPath);

  if (!isPathnameStored && !isSubDirDirectory && isSubDirPathnameIncludesReExportsFileDir) return true;
};

export default allowToStorePathname;
