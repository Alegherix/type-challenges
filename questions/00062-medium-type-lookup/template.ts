type LookUp<T, K extends T[keyof T]> = T extends T
  ? K extends T[keyof T]
    ? T
    : never
  : K
