import { IReExport } from '@types';

class ReExport implements IReExport {
  constructor(public srcDir: string, public statements: string[]) {}
}

export default ReExport;
