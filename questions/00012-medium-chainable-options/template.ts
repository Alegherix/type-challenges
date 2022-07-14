type Chainable<T extends {} = {}> = {
  option<K extends string, U>(key: K, value: U): Chainable<T & Record<K, U>>
  get(): T
}
