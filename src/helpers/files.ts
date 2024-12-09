import { readdir, readFile } from 'fs/promises';

export const getDirEnts = async (dirPath) => {
  return readdir(dirPath, {
    withFileTypes: true,
    recursive: true,
  });
};

export const assignFilesData = async (files) => {
  return Promise.all(
    files.map(async ({ filePath }) => ({
      filePath,
      fileData: await readFile(filePath, 'utf-8'),
    }))
  );
};
