const findStartIndexOfDeclaration = (contentLines, reExportsDirPath) => {
  const startIndexOfDeclaration = contentLines.findIndex((line) => {
    return line.includes(reExportsDirPath);
  });

  return startIndexOfDeclaration;
};

export default findStartIndexOfDeclaration;
