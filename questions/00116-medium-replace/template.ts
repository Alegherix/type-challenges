type Replace<
  S extends string,
  From extends string,
  To extends string
> = From extends ''
  ? S
  : S extends `${infer Start}${From}${infer Rest}`
  ? `${Start}${To}${Rest}`
  : S
