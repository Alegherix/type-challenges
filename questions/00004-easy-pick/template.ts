type MyPick<T, U extends keyof T> = {
  [K in U]: T[K]
}
