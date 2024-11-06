import { produceReExports, readConfig, tryCatchDecorator } from '@scripts';

const generateReExports = async () => {
  const { srcFileDirs } = await readConfig();

  const reExports = produceReExports(srcFileDirs);

  //console.log(reExports);
};

tryCatchDecorator(generateReExports)();
