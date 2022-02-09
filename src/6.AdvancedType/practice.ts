export { }

// 1. 
// a. 可能。1はnumberのリテラル型であり、number型のサブタイプであるから。
// b. 不可能。numberはnumberリテラル型である１に割り当てられない。
// c. 可能。stringはnumber | stringのサブタイプであるから。
// d. 不可能。booleanはnumberに割り当てられない。
// e. 可能。number[]は(number | string)[]のサブタイプであるから。
// f. 不可能。(number | string)[]はnumber[]に割り当てられない。
// g. 可能。{a: true}は{a: boolean}のサブタイプであるから。
// h. 可能。[string]は[number | string]のサブタイプであるから。
// i. 可能。引数名は異なるが型は同じであるから。
// j. 不可能。引数の型が異なるから。
// k. 不可能。引数の型、number | stringはstringのサブタイプでないから。 // × 可能
// l. 可能。  // × 不可能

// 2.
type O = { a: { b: { c: string } } }

// type O = {
//   a: {
//     b: {
//       c: string
//     }
//   }
// }
// keyof O
type Key = keyof O;  // "a"

// 
type Lookup = O["a"]["b"];

// {
//   c: string
// }
type Execlusive<T, U> = Exclude<T, U> | Exclude<U, T>

type foo = Execlusive<1|2|3, 2|3|4>

