import * as fs from 'fs/promises';
import * as path from 'path';

const root = path.resolve('src');
let count = 0;

const logPaths = async (currDir = root) => {
  debugger;
  const dirList = await fs.readdir(currDir);

  dirList.forEach(async (subDir) => {
    debugger;
    const dirStats = await fs.lstat(path.resolve(currDir, subDir));

    count++;
    console.log(`Iteration #${count} with '${subDir}' dir`);

    if (!dirStats.isDirectory()) {
      console.log(`Not a directory, iteration #${count} is finished!`);
      console.log('Current path:', path.resolve(currDir, subDir));
      return;
    } else {
      console.log(`Found a directory, iteration #${count} init recursion...`);
      logPaths(path.resolve(currDir, subDir));
    }
  });
};

logPaths();
