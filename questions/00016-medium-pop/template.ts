type Pop<T extends any[]> = T extends [...infer X, any] ? X : never
