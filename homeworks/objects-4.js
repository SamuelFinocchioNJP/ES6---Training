// class Paguro {
//   numeroZampe = 0;
//   chele = false;
//   guscio = "";

//   constructor(name = "miCHELE") {
//     this.name = name;
//   }

//   // come se scrivo qua con il prototype
// }

// Paguro.prototype.enableChele = function () {
//   this.chele = true;
// };

// const paguro = new Paguro("Ernas");

// console.log(paguro);
// paguro.enableChele();
// console.log(paguro);

// Array.prototype.myMap = function (fn) {
//   const toReturn = Array(this.length);

//   for (let i = 0; i < this.length; i++) {
//     toReturn[i] = fn(this[i]);
//   }

//   return toReturn;
// };

// Array.prototype.myFilter = function (fn) {
//   const toReturn = [];

//   for (let i = 0; i < this.length; i++) {
//     if (fn(this[i])) {
//       toReturn.push(this[i]);
//     }
//   }
//   return toReturn;
// };

// // every e some
// Array.prototype.myEvery = function (fn) {
//   let respected = true;

//   for (let i = 0; i < this.length; i++) {
//     respected = respected && fn(this[i]);
//     if (!respected) return false;
//   }

//   return respected;
// };

// Array.prototype.mySome = function (fn) {
//   let respected = false;

//   for (let i = 0; i < this.length; i++) {
//     respected = respected || fn(this[i]);
//     if (respected) return true;
//   }

//   return respected;
// };

// Array.prototype.myReduce = function (fn, acc = "1") {
//   for (let i = 0; i < this.length; i++) {
//     acc = fn(acc, this[i]);
//   }

//   return acc;
// };

// console.log([1, 2, 3, 4].myMap((x) => 2 * x + 1));
// console.log([1, 2, 3, 4].myFilter((x) => x > 2));
// console.log([1, 2, 3, 4].myEvery((x) => x > 200));
// console.log([1, 2, 3, 4].mySome((x) => x > 2000));
// console.log([1, 2, 3, 4].myReduce((acc, curr) => acc + curr, 0));

// return nums.filter((item) =>
//   Object.entries(
//     nums.reduce((acc, curr) => ({ ...acc, [curr]: acc[curr] + 1 || 1 }), {})
//   )
//     .filter(([k, v]) => !(v & 1))
//     .map(([k, v]) => +k)
//     .includes(item)
// );

// const deamons = [
//   [1, 3],
//   [2, 5],
//   [3, 2],
//   [4, 2],
// ].filter(([key, value]) => value % 2 === 0);

const counters = {
  1: 3,
  2: 5,
  3: 2,
  4: 2,
};

console.log(
  [1, 2, 2, 2, 1, 1, 2, 2, 3, 3, 4, 4].filter(
    (item) => counters[item] % 2 === 0
  )
);
// [ [3, 2], [4, 2] ]
