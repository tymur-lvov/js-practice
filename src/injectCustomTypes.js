import * as fs from 'fs/promises';
import * as path from 'path';

import fsReadFileOptions from './fsReadFileOptions.js';
import errorCathingDecor from './errorCathingDecor.js';
import sliceUnchangedContent from './sliceUnchangedContent.js';
import enhanceCustomTypeString from './enhanceCustomTypeString.js';
import findEndIndexOfDeclaration from './findEndIndexOfDeclaration.js';
import findStartIndexOfDeclaration from './findStartIndexOfDeclaration.js';
import produceTypeDeclaration from './produceTypeDeclaration.js';

const injectCustomTypes = async (reExports, reExportsDirPath) => {
  const customTypesFilePath = path.resolve('@types', 'custom.d.ts');

  const fileContent = await fs.readFile(customTypesFilePath, fsReadFileOptions);

  const contentLines = fileContent.split('\n');

  const startIndexOfDeclaration = findStartIndexOfDeclaration(contentLines, reExportsDirPath);

  const endIndexOfDeclaration = findEndIndexOfDeclaration(contentLines, startIndexOfDeclaration);

  const unchangedContent = sliceUnchangedContent(contentLines, startIndexOfDeclaration, endIndexOfDeclaration);
  //console.log(unchangedContent); // Refactoring ...

  const newContent = produceTypeDeclaration(reExports, reExportsDirPath);
  //console.log(newContent);

  const enhancedContentToReplace = enhanceCustomTypeString(newContent);
  //console.log(enhancedNewContent);

  const finalUpdatedContent = unchangedContent + '\n' + enhancedContentToReplace;
  //console.log(finalUpdatedContent);

  //await fs.writeFile(customTypesFilePath, finalUpdatedContent);
};

export default errorCathingDecor(injectCustomTypes);
