type MyReadonly1<T, U extends keyof T = keyof T> = {
  readonly [K in U]: T[K]
} & Omit<T, U>

type MyReadonly2<T, U extends keyof T = keyof T> = {
  readonly [K in U]: T[K]
} & {
  [K in keyof T as K extends U ? never : K]: T[K]
}

type A = 'A' & 'B' & 'C'

const objA: A = {}

type B = 'B'

type C = A & B

type Person = { name: string; age: number }
type Animal = { length: number }

type AnimalPerson = Person & Animal

const obj: AnimalPerson = {
  age: 12,
  length: 12,
  name: '232323',
}
