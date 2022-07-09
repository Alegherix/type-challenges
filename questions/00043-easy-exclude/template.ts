// If T is in the same set as U, return nothing, otherwise we know that the types are different
// The distribution will make sure the ending type is a union type.
type MyExclude<T, U> = T extends U ? never : T
