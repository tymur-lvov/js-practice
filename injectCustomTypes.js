import * as fs from 'fs/promises';
import * as path from 'path';

import enhanceCustomTypeString from './enhanceCustomTypeString.js';
import generateCustomTypeString from './generateCustomTypeExport.js';
import generateCustomTypeDeclaration from './generateCustomTypeDeclaration.js';

const injectCustomTypes = async (reExports, relativeDir) => {
  const customTypesFilePath = path.resolve('@types', 'custom.d.ts');

  const dirContent = await fs.readFile(customTypesFilePath, {
    encoding: 'UTF-8',
  });

  const dirContentRows = dirContent.split('\n');
  //console.log(dirContentRows);

  const startIndexOfDeclaration = dirContentRows.findIndex((row) => {
    return row.includes('@components');
  });
  //console.log(startIndexOfDeclaration);

  const endIndexOfDeclaration =
    dirContentRows.slice(startIndexOfDeclaration).findIndex((line) => {
      return line === '}';
    }) + startIndexOfDeclaration;
  //console.log(endIndexOfDeclaration);

  const contentToBeKept = dirContentRows
    .slice(0, startIndexOfDeclaration)
    .concat(dirContentRows.slice(endIndexOfDeclaration + 2))
    .join('\n');
  //console.log(contentToBeKept);

  const contentToReplace = generateCustomTypeDeclaration(
    reExports,
    relativeDir
  );
  //console.log(contentToReplace);

  const enhancedContentToReplace = enhanceCustomTypeString(contentToReplace);
  //console.log(enhancedNewContent);

  const finalUpdatedContent = contentToBeKept + '\n' + enhancedContentToReplace;
  //console.log(finalUpdatedContent);

  await fs.writeFile(customTypesFilePath, finalUpdatedContent);
};

export default injectCustomTypes;
