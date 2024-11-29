import * as path from 'path';

import { getExtension } from '@helpers';

import type { Dirent } from 'fs';
import type { IGetBasenameCreator } from '@types';

export const getAbsolutePath = (absolutePath: string): string => {
  return path.resolve(absolutePath);
};

export const getDirEntPath = ({ parentPath, name }: Dirent): string => {
  return path.resolve(parentPath, name);
};

const getBasenameCreator: IGetBasenameCreator = (mode) => (filePath) => {
  return mode === 'noExtension'
    ? path.basename(filePath, getExtension(filePath))
    : path.basename(filePath);
};

export const getBasename = getBasenameCreator('extension');
export const getBasenameWithoutExt = getBasenameCreator('noExtension');
