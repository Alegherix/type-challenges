// Om vi har en typ som Extendar ett löfte,
// Försök få ut dess Type inuti Promiset och recursa nedåt,
// Om vi ej extendar ett Promise längre, returnera bara typen.
type MyAwaited<T> = T extends Promise<infer R> ? MyAwaited<R> : T
