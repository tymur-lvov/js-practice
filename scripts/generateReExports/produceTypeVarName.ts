const produceTypeVarName = (varName: string): string => {
  const firstLetter = varName[0];

  const underscoreIndex = varName.indexOf('_');

  const processedVarName = varName
    .slice(0, underscoreIndex)

    .replace(firstLetter, firstLetter.toUpperCase());

  return 'I' + processedVarName;
};

export default produceTypeVarName;
