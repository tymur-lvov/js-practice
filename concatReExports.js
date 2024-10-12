const concatReExports = (reExports) => {
  const concatedReExports = reExports.reduce((string, reExport) => {
    return string.concat(
      `export { default as ${reExport.variableName} } from '${reExport.relativePath}'\n`
    );
  }, '');

  return concatedReExports;
};

export default concatReExports;
