const main = () => {
  const targetDirPaths = getConfigOption('targetDirPaths');
  const indexFiles = processIndexFiles(targetDirPaths);
};

main();
