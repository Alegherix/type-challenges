type TrimLeft<T extends string> = T extends `${' ' | '\n' | '\t'}${infer Rest}`
  ? TrimLeft<Rest>
  : T
