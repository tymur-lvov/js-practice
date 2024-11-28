import { getConfigOption, getDirEntPath, getDirEntsRecurs, getFileData } from '@helpers';

const getFilePaths = (dirEnts: any) => {
  return dirEnts.map((dirEnt: any) => ({
    filePath: getDirEntPath(dirEnt),
  }));
};

const getFilesData = (files: any) => {
  return Promise.all(
    files.map(async ({ filePath }: any) => ({
      filePath,
      fileData: await getFileData(filePath),
    }))
  );
};

console.log(
  await getFilesData(getFilePaths(await getDirEntsRecurs(getConfigOption('targetDirPaths')[3])))
);
