export { }

// conditional type ... 条件型
type Props = {
  id: string;
  name: string;
  age: number;
}

type FilterString<T> = {
  // [K in keyof T]: T[K];
  [K in keyof T]: T[K] extends string ? K : never;
}[keyof T]
type Foo =
  FilterString<Props>;

// ↑
// <T> ... ジェネリクス
// [K in keyof T] ...  Mapped Tyoe
// keyof T ... keyof演算子
// extends string ... 型の制約
// T[K] extends string ? K : never ... conditional type
// [keyof T] ... ルックアップタイプ
