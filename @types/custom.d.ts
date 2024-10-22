declare module '1' {
  const content: string;
  export default content;
}

declare module '2' {
  const content: string;
  export default content;
}

declare module "@components" {
  import { FunctionComponent } from "react";
  export const TestComponentA: FunctionComponent<any>;
  export const TestComponentB: FunctionComponent<any>;
  export const TestComponentC: FunctionComponent<any>;
}
