const findStartIndexOfDeclaration = (contentLines, srcFileDirPath) => {
  const startIndexOfDeclaration = contentLines.findIndex((line) => {
    return line.includes(srcFileDirPath);
  });

  return startIndexOfDeclaration;
};

export default findStartIndexOfDeclaration;
