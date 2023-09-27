type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

export type XOR<T, U> = T | U extends any ? (Without<T, U> & U) | (Without<U, T> & T) : T | U;

type KnownKeys<T> = {
  [K in keyof T]: string extends K ? never : number extends K ? never : K;
} extends { [_ in keyof T]: infer U }
  ? U
  : never;

export type RequiredOnly<T extends Record<any, any>> = Pick<T, KnownKeys<T>>;
