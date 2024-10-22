declare module '*.svg' {
  const content: string;
  export default content;
}

declare module '*.webp' {
  const content: string;
  export default content;
}

declare module '@images' {
  
}

declare module '@utils' {
  export function helperA(...args: any[]): any;
  export function helperB(...args: any[]): any;
}

declare module '@components' {
  import { FunctionComponent } from 'react';
  export const TestComponentA: FunctionComponent<any>;
  export const TestComponentB: FunctionComponent<any>;
  export const TestComponentC: FunctionComponent<any>;
}
