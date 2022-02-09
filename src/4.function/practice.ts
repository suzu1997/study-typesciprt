export { }

// ４章 関数 練習問題（p.85）

// 1. TypeScriptは、関数の型シグネチャのうち、戻り値の値を推論する。

/* TypeScriptは常に関数の戻り値の型を推論します。文脈から推論できる場合は、関数のパラメーター型を推論することもあります（たとえば、その関数がコールバックの場合）。 */

// 2. argumentsオブジェクトは型安全ではない。代わりにレストパラメーターを使う。 ...numbers など
// (可変長引数関数)

/* argumentsは型安全ではありません。代わりに、次のようにレストパラメーターを使用すべきです。
変更前：function f() { console.log(arguments) }
変更後：function f(...args: unknown[]) { console.log(args) }
*/

// 3. 
type Reservation = unknown

type Reserve = {
  (from: Date, to: Date, destination: string): Reservation // 宿泊旅行
  (from: Date, destination: string): Reservation // 日帰り旅行
  // すぐ出発する旅行
  (destination: string): Reservation
}

let reserve: Reserve = (fromOrDestination: Date | string, toOrDestination?: Date | string, destination?: string) => {
  if (fromOrDestination instanceof Date && toOrDestination instanceof Date && destination !== undefined) {
    // 宿泊旅行
    console.log(toOrDestination);  // Date型
    console.log(destination); // string型
  } else if (
    fromOrDestination instanceof Date &&
    typeof toOrDestination === "string"
  ) {
    // 日帰り旅行
    console.log(fromOrDestination);  // Date型
    console.log(toOrDestination);  // string型
    // つまりdestinationはundefined
  } else if (typeof fromOrDestination === "string") {
    // すぐ出発する旅行
    console.log(fromOrDestination);  // string型
  }
}

console.log(reserve);

// 4 
function call<T extends [unknown, string, ...unknown[]], R>(fn: (...args: T) => R,
  ...args: T): R {
  return fn(...args);
}
// function call<T extends unknown[], R, U>(fn: (arg1: U, arg2: string, ...args: T) => R,
//   arg1: U, arg2: string, ...args: T): R {
//   return fn(arg1, arg2, ...args);
// }

function fill(length: number, value: string): string[] {
  return Array.from({ length }, () => value);
}

call(fill, 10, "a");
console.log(call(fill, 10, "a")); // [a,a,a,a,a,a,a,a,a,a,a]

// 5
export function is<T>(a: T, ...b: [T, ...T[]]): boolean {

  return b.every((value) => value === a);
}
// export function is<T>(...params: T[]): boolean {
//   // paramsの値が全て同じならtrue

//   return params.every((value, index, array) => value === array[0]);
// }

// console.log(is("string", "otherstring")); // false
// console.log(is(true, false)); // false
// console.log(is(42, 42)); // true
// console.log(is(10, "foo")); // エラー
                             // エラー TS2345: 型 '"foo"' の引数を型 'number' の
                             // パラメーターに割り当てることはできません。
// console.log(is(1,1,1)); // true
// console.log(is(1,2,3)); // false
