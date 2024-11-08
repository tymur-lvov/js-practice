const produceStatements = (filePaths: string[], varNames: string[]): string[] => {
  return varNames.map((varName, index) => {
    const filePath = filePaths[index];

    return varName.includes('_types')
      ? `export type { default as ${varName} } from '${filePath}';`
      : `export { default as ${varName} } from '${filePath}';`;
  });
};

export default produceStatements;
