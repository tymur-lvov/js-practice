declare module '*.svg' {
  const content: string;
  export default content;
}

declare module '@utils' {
  export function helperA(...args: any[]): any;
  export function helperB(...args: any[]): any;
}

declare module '*.webp' {
  const content: string;
  export default content;
}
