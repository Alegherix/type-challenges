type DeepReadonly<T> = T extends Function
  ? T
  : { readonly [K in keyof T]: DeepReadonly<T[K]> }

type User = {
  name: string
  age: () => number
  property: {
    getLength: () => 11
  }
}

type ReadUser = Readonly<User>
type T = Readonly<() => 22>

type DeepReadonly2<T> = T extends Function
  ? T
  : {
      [K in keyof T]: Readonly<DeepReadonly2<T[K]>>
    }

type UserTest = DeepReadonly2<User>
