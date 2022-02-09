import type { NextPage } from 'next';
import { is } from '../4.function/practice';

// let foo = {} as { bar: number };

// foo.bar = 1;

// function double(x: number): number | undefined {
//   if (x > 0) {
//     return;
//   }

//   return x * 2;
// }

// 4. function
console.log(is('string', 'otherstring'), "false"); // false
console.log(is(true, false), "false"); // false
console.log(is(42, 42), "true"); // true
// console.log(is(10, 'foo'), "エラー"); // エラー
console.log(is(1, 1, 1), "true"); // true
console.log(is(1, 2, 3), "false"); // false

const Home: NextPage = () => {
  return <div>test</div>;
};

export default Home;
