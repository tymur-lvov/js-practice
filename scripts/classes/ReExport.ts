import { IReExport } from '@types';

class ReExport implements IReExport {
  constructor(public srcFilePath: string, public statements: string[]) {}
}

export default ReExport;
