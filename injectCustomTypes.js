import * as fs from 'fs/promises';
import * as path from 'path';

import enhanceCustomTypeString from './enhanceCustomTypeString.js';
import generateCustomTypeString from './generateCustomTypeString.js';

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

  //  const newContent = reExports
  //    .map((reExport) => {
  //      const customTypeString = generateCustomTypeString(
  //        reExport.variableName,
  //        relativeDir
  //      );

  //      return enhanceCustomTypeString(customTypeString);
  //    })
  //    .join('\n');
  //  console.log('newContent:\n', newContent);

  //  const finalContent = unchangedContent.concat('\n', newContent);
  //  //  console.log('finalContent:\n', finalContent);

  //  //  await fs.writeFile(targetPath, finalContent);
};

export default injectCustomTypes;
