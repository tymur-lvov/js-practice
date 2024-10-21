declare module '@svg' {
  const content: string;
  export default content;
}

declare module '@components' {
  import { FunctionComponent } from 'react';
  export const TestComponentB: FunctionComponent<any>;
}

declare module '@svg' {
  const content: string;
  export default content;
}
