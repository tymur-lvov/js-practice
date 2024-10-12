const concatReExports = (reExports) => {
  return reExports.reduce((string, reExport) => {
    return string.concat(
      `export { default as ${reExport.variableName} } from '${reExport.relativePath}'\n`
    );
  }, '');
};

export default concatReExports;
