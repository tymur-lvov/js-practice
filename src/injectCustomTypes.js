import * as fs from 'fs/promises';
import * as path from 'path';

import errorCathingDecor from './errorCathingDecor.js';
import findEndIndexOfDeclar from './findEndIndexOfDeclar.js';
import findStartIndexOfDeclar from './findStartIndexOfDeclar.js';
import sliceUnchangedContent from './sliceUnchangedContent.js';
import enhanceCustomTypeString from './enhanceCustomTypeString.js';
import generateCustomTypeDeclaration from './generateCustomTypeDeclaration.js';

const injectCustomTypes = async (reExports, relativeDir) => {
  const customTypesFilePath = path.resolve('@types', 'custom.d.ts');

  const fileContent = await fs.readFile(customTypesFilePath, {
    encoding: 'UTF-8',
  });

  const contentLines = fileContent.split('\n');

  const startIndexOfDeclar = findStartIndexOfDeclar(contentLines, relativeDir);

  const endIndexOfDeclar = findEndIndexOfDeclar(
    contentLines,
    startIndexOfDeclar
  );

  const unchangedContent = sliceUnchangedContent(
    contentLines,
    startIndexOfDeclar,
    endIndexOfDeclar
  );
  console.log(unchangedContent);

  const newContent = generateCustomTypeDeclaration(reExports, relativeDir);
  //console.log(newContent);

  const enhancedContentToReplace = enhanceCustomTypeString(newContent);
  //console.log(enhancedNewContent);

  const finalUpdatedContent =
    unchangedContent + '\n' + enhancedContentToReplace;
  //console.log(finalUpdatedContent);

  //await fs.writeFile(customTypesFilePath, finalUpdatedContent);
};

export default errorCathingDecor(injectCustomTypes);
