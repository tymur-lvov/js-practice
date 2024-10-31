type DecoratedFn<T extends any[], R> = (...args: T) => Promise<R>;

export default DecoratedFn;
