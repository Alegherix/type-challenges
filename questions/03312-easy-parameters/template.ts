type MyParameters<T extends (...args: any[]) => any> = T extends (
  ...args: infer P
) => any
  ? P
  : never

type ArrayToUnion<T extends any[]> = T extends (infer P)[] ? P : T

type NameArrayType = ['Carl', 'Blake', 'Adam']
type NameUnion = ArrayToUnion<NameArrayType>
