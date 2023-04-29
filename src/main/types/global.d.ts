export {}

declare global {
  type Opt<T> = T | undefined

  type DistributiveOmit<T, K extends keyof any> = T extends any ? Omit<T, K> : never
}
