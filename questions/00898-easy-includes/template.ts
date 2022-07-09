// GOAL

// Infer the Key from the first elemen in the array, and then infer the rest
// If the infered value is equal to the second generic params, then that value is in the array, thus return true
// Otherwise recurse down and keep trying the remaining parts of the array,
// If we can't infer, I.e no more elemens, return false.
type Includes<T extends readonly any[], U> = T extends [infer K, ...infer R]
  ? IsEqual<K, U> extends true
    ? true
    : Includes<R, U>
  : false

type IsEqual<T, K> = (<P>() => P extends T ? 1 : 2) extends <P>() => P extends K
  ? 1
  : 2
  ? true
  : false
