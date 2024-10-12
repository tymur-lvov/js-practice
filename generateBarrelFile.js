import generateReExports from './generateReExports.js';

const generateBarrelFile = async (relativeDirName) => {
  const reExports = await generateReExports(relativeDirName);

  console.log(reExports);

  //injectReExports(reExports);
};

generateBarrelFile('images');

export default generateBarrelFile;
