const sliceUnchangedContent = (...args) => {
  const [contentLines, startIndexOfDeclaration, endIndexOfDeclaration] = args;

  if (startIndexOfDeclaration < 0) {
    return contentLines;
  }

  const sliceBeforeDeclaration = contentLines.slice(0, startIndexOfDeclaration);

  const sliceAfterDeclaration = contentLines.slice(endIndexOfDeclaration + 2);

  return sliceBeforeDeclaration.concat(sliceAfterDeclaration);
};

export default sliceUnchangedContent;
