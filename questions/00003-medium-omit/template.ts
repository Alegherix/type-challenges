type MyOmit<T, U extends keyof T> = {
  [K in Exclude<keyof T, U>]: T[K]
}
