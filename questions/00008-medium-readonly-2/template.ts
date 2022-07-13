type MyReadonly1<T, U extends keyof T = keyof T> = {
  readonly [K in U]: T[K]
} & Omit<T, U>

type MyReadonly2<T, U extends keyof T = keyof T> = {
  readonly [K in U]: T[K]
} & {
  [K in keyof T as K extends U ? never : K]: T[K]
}
