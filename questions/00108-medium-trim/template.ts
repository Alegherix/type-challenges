type Space = ' ' | '\n' | '\t'

type Trim<S extends string> = S extends
  | `${Space}${infer Text}`
  | `${infer Text}${Space}`
  ? Trim<Text>
  : S

type TrimRight2<T extends string> = T extends `${infer Text}${Space}`
  ? TrimRight2<Text>
  : T

type T1 = TrimLeft<TrimRight2<'     str     '>>
