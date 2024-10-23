const sliceUnchangedContent = (...args) => {
  const [contentLines, startIndexOfDeclar, endIndexOfDeclar] = args;

  if (startIndexOfDeclar < 0) {
    return contentLines;
  }

  const sliceBeforeDeclaration = contentLines.slice(0, startIndexOfDeclar);

  const sliceAfterDeclaration = contentLines.slice(endIndexOfDeclar + 2);

  return sliceBeforeDeclaration.concat(sliceAfterDeclaration);
};

export default sliceUnchangedContent;
