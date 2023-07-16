type DeepReadonly<T> = {
  readonly [K in keyof T]: T[K] extends object ? DeepReadonly<T[K]> : T[K];
};
//[K in keyof T]遍历T中元素
//判断T[K]是否为对象，如果是再将其类型定为DeepReadonly，形成递归结构，如果不是就直接为本身

type X = {
  x: {
    a: 1;
    b: 'hi';
  };
  y: 'hey';
};

// type Expected = {
//   readonly x: {
//     readonly a: 1;
//     readonly b: 'hi';
//   };
//   readonly y: 'hey';
// };

type Todo = DeepReadonly<X>; // should be same as `Expected`
