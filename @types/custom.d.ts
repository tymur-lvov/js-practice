declare module '*.svg' {
  const content: string;
  export default content;
}

declare module '*.webp' {
  const content: string;
  export default content;
}

declare module '@components' {
  import { FunctionComponent } from 'react';
  export const TestComponentA: FunctionComponent<any>;
  export const TestComponentB: FunctionComponent<any>;
  export const TestComponentC: FunctionComponent<any>;
}

declare module '@images' {
  export const firstImgExample_1x: string;
  export const firstImgExample_2x: string;
  export const secondImgExample_1x: string;
  export const secondImgExample_2x: string;
}

declare module '@icons' {
  export const icons: string;
}

declare module '@utils' {
  export function helperA(...args: any[]): any;
  export function helperB(...args: any[]): any;
}
