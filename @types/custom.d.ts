declare module '1' {
  const content: string;
  export default content;
}

declare module '2' {
  const content: string;
  export default content;
}

declare module '@images' {
  export const firstImgExample_1x: string;
  export const firstImgExample_2x: string;
  export const secondImgExample_1x: string;
  export const secondImgExample_2x: string;
}

declare module '@components' {
  import { FunctionComponent } from 'react';
  export const TestComponentA: FunctionComponent<any>;
  export const TestComponentB: FunctionComponent<any>;
  export const TestComponentC: FunctionComponent<any>;
}
