import * as fs from 'fs/promises';
import * as path from 'path';

import enhanceCustomTypeString from './enhanceCustomTypeString.js';
import generateCustomTypeString from './generateCustomTypeExport.js';
import generateCustomTypeDeclaration from './generateCustomTypeDeclaration.js';

const injectCustomTypes = async (reExports, relativeDir) => {
  const targetPath = path.resolve('@types', 'custom.d.ts');

  const dirContent = await fs.readFile(targetPath, { encoding: 'UTF-8' });

  const dirContentLines = dirContent.split('\n');

  const indexOfTargetLine = dirContentLines.findIndex((line) => {
    return line.includes('@components');
  });

  const indexOfClosingBracket =
    dirContentLines.slice(indexOfTargetLine).findIndex((line) => {
      return line === '}';
    }) + indexOfTargetLine;

  const unchangedContent = dirContentLines
    .slice(0, indexOfTargetLine)
    .concat(dirContentLines.slice(indexOfClosingBracket + 2))
    .join('\n');
  console.log(unchangedContent);

  const newContent = generateCustomTypeDeclaration(reExports, relativeDir);
  //console.log(newContent);

  const enhancedNewContent = enhanceCustomTypeString(newContent);
  //console.log(enhancedNewContent);

  //await fs.writeFile(targetPath, unchangedContent);

  //await fs.appendFile(targetPath, enhancedNewContent);
};

export default injectCustomTypes;
