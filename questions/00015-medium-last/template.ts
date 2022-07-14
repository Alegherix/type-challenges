type Last<T extends any[]> = T extends [...any, infer X] ? X : never
