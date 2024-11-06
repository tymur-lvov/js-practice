import * as fs from 'fs/promises';
import * as path from 'path';

import { Config } from '@types';

const readConfig = async (): Promise<Config> => {
  const configPath = path.resolve('genrex.json');

  const configContent = await fs.readFile(configPath, { encoding: 'utf-8' });

  return JSON.parse(configContent);
};

export default readConfig;
