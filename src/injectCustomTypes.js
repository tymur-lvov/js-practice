import * as fs from 'fs/promises';
import * as path from 'path';

import readFileOptions from './readFileOptions.js';
import errorCathingDecor from './errorCathingDecor.js';
import sliceUnchangedContent from './sliceUnchangedContent.js';
import enhanceCustomTypeString from './enhanceCustomTypeString.js';
import findEndIndexOfDeclaration from './findEndIndexOfDeclaration.js';
import findStartIndexOfDeclaration from './findStartIndexOfDeclaration.js';
import generateCustomTypeDeclaration from './generateCustomTypeDeclaration.js';

const injectCustomTypes = async (reExports, reExportsFileDir) => {
  const customTypesFilePath = path.resolve('@types', 'custom.d.ts');

  const fileContent = await fs.readFile(customTypesFilePath, readFileOptions);

  const contentLines = fileContent.split('\n');

  const startIndexOfDeclaration = findStartIndexOfDeclaration(contentLines, reExportsFileDir);

  const endIndexOfDeclaration = findEndIndexOfDeclaration(contentLines, startIndexOfDeclaration);

  const unchangedContent = sliceUnchangedContent(contentLines, startIndexOfDeclaration, endIndexOfDeclaration);
  //console.log(unchangedContent); // Refactoring ...

  const newContent = generateCustomTypeDeclaration(reExports, reExportsFileDir);
  //console.log(newContent);

  const enhancedContentToReplace = enhanceCustomTypeString(newContent);
  //console.log(enhancedNewContent);

  const finalUpdatedContent = unchangedContent + '\n' + enhancedContentToReplace;
  //console.log(finalUpdatedContent);

  //await fs.writeFile(customTypesFilePath, finalUpdatedContent);
};

export default errorCathingDecor(injectCustomTypes);
