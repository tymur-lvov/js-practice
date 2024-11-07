type IAsyncFunc<T extends any[], R> = (...args: T) => Promise<R>;

export default IAsyncFunc;
