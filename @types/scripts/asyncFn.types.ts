type AsyncFn<T extends any[], R> = (...args: T) => Promise<R>;

export default AsyncFn;
