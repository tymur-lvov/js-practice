const enhanceCustomTypeString = (declarationString) => {
  const separatedString = declarationString.trim().split('\n');

  return separatedString
    .map((stringPart, partIndex) => {
      if (partIndex === 0) {
        return stringPart;
      }

      if (partIndex === separatedString.length - 1) {
        return stringPart.trim() + '\n';
      }

      return '  ' + stringPart.trim();
    })
    .join('\n');
};

export default enhanceCustomTypeString;
