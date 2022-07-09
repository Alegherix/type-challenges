/* eslint-disable @typescript-eslint/comma-dangle */
// // type First<T extends any[]> = T extends T[] ? never : T[0]
// // type First<T extends any[]> = T['length'] extends 0 ? never : T[0]
// type First<T extends any[]> = T[0] extends T[number] ? T[0] : never''

// If the type we pass in is an empty array then return never: otherwise the key of T[0];
// type First<T extends any[]> = T extends T[] ? never : T[0]

// If the type extends an array which u can index based on number(any type of array)
// type First<T extends any[]> = T[0] extends T[number] ? T[0] : never

// If the length of the array is a subset of 0, i.e if there's no elements in the array
// type First<T extends any[]> = T['length'] extends 0 ? never : T[0]

// If we have a Type that extends an array where we can destructure som element,
type First<T extends any[]> = T extends [args: T[0], ...rest: any]
  ? T[0]
  : never

type FirstTwo<T extends any[]> = T extends [
  first: any,
  second: any,
  ...rest: any
]
  ? [T[0], T[1]]
  : never

type TwoElems = FirstTwo<arr1>

type arr1 = ['a', 'b', 'c']
type head1 = First<arr1> // expected to be 'a'
type neverHead = First<[]>
