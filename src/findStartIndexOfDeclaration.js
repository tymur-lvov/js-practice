const findStartIndexOfDeclaration = (contentLines, sourceFileDirPath) => {
  const startIndexOfDeclaration = contentLines.findIndex((line) => {
    return line.includes(sourceFileDirPath);
  });

  return startIndexOfDeclaration;
};

export default findStartIndexOfDeclaration;
