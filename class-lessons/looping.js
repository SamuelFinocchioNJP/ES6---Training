// let arr = [1,2,-1,5,9,0,2,3];

// una funzione che prende o restituisce funzioni
// function fun (input) {
//     if(input % 2 === 0) return input / 2;
//     return 3 * input + 1;
// }

// function nfun (input) {
//     if(input % 2 === 0) return 1;
//     return 2;
// }

// function apply(arr, fn) {
//     const newArr = [];
//     for(let x of arr) {
//         newArr.push(fn(x));
//     }

//     return newArr;
// }

// console.log(apply(arr, fun));
// console.log(apply(arr, nfun));

// function threeApply(a,b,c, funn) {
//     return [
//         funn(a),
//         funn(b),
//         funn(c),
//     ];
// }

// function fakeBinSingle(element) {
//     if(iterating < '5') return '0';
//     return '1';
// }

// function stringApply(arr, fn) {
//     let str = "";
//     for(let x of arr) {
//         str += fn(x);
//     }
//     return str;
// }

// function fakeBin(x) {
//     return apply(x, fakeBinSingle);
// }

// console.log(threeApply(3,0,2, fun));
// console.log(threeApply(3,0,2, nfun));

// function fakeBin(x){
//     let arr = "";
//     for(let i = 0; i < x.length; i++) {
//       const iterating = x[i];

//       if(iterating < '5') arr += '0';
//       else arr += '1';
//     }
//     return arr;

//   }

// let fun = function(a, b) {
//     console.log(a * b);
// }

// console.log([1,2,-1,4,0,5].map((a) => a * 2));

// const students = [18, 22, 14, 10, 30, 27];

// const isBocciato = (voto) => {
//     return voto < 18;
// }

// const bocciati = [];

// function filtraApplica(arr, fn) {
//     const res = [];
//     for(let x of arr)
//         if(fn(x)) {
//             res.push(x);
//         }

//     return res;
// }
// console.log(filtraApplica(students, isBocciato));
// console.log(students.filter(isBocciato));

// const arr2 = [2, 10, 0, null, undefined, [], {}, "", true, false, 3.14159];
// console.log(arr2.filter((elememento) => elememento));

// fun(10, 40);

// const arr = [1,2,0,14,245,432,423,1,7];

// const toCheck = (element) => element >= 0;
// let cond = false;

// for(let i = 0; i < arr.length && !cond; i++) {
//     cond = cond || toCheck(arr[i]);
// }

// const data = [1, 2, 3, 4, 5, 6, 7];

// const res = data.reduce((acc, curr) => {
//   console.log(acc);
//   if (curr % 2 === 0) return acc + curr;
//   return acc;
// }, 0);

// console.log(res);

// const result = "101000010111010011111101010101".split('').map(x => +x).reduce((acc, curr) => {
//     console.log(acc, curr);
//     if(curr === 1) return [acc[0] + 1, acc[1]];

//     curr è zero per forza
//     if(acc[0] !== 0) {
//         acc[1].push(acc[0]);
//     }
//     return [0, acc[1]];
// }, [0, []])

// console.log(result)

// const arr = [1, 2, 1, 4, 0, 9, 6];
// const arr2 = arr.map((x) => x);
// const arr3 = arr;

// Non guardano fuori dal loro frame (parametri + variabili locali)
// Non modificano (mutano) i parametri
// Restituiscono sempre qualcosa

// Funzione NON pura
// function mutate(arr) {
//   arr[0] = 606;
// }

// mutate(arr3);

// arr[0] = 1000;
// console.log(arr)
// console.log(arr2)
// console.log(arr3)

// Slice e splice

// const tuna = [1,2,3,4,1,2,1,3];
// console.log(tuna);
// console.log("slice", tuna.splice(1,3))
// console.log("slice", tuna)

// const f = (num) => {
//     return tuna[0] + tuna[1] + num;
// }

// console.log(f())

// const raddoppia = (arr) => {
//   Operatore di spread
//   const arrCP = [...arr]; // foreach x in arr lo assegno ad un nuovo array dove l'iesimo elemento è assegnato all'iesimo elemento dell'array di partenza
//   for (let i = 0; i < arrCP; i++) {
//     arrCP[i] *= 2;
//   }

//   return arrCP;
// };

// const c = [1, 2, 4, 2, 54, 3, 6, 34];
// console.log(raddoppia(c));
// console.log(c)

// const str = "ciao mondo";
// const arr = [...str];

// console.log(str, arr);

// const data = [1, 2, 3, 4, 5, 6];
// const [x, y, ...xs] = [...data];

// console.log(x, y, xs);

// const nested = [
//     1,
//     2,
//     3,
//     [1,2,3,4]
// ];

// nested => l1

// l1 = 1,2,3,l2;

// const spreadedNested = [...nested];

// spreadedNested = l3;
// l3 = [ 1,2,3, l2]

// spreadedNested[3][1] = 10000;

// console.log(nested);
// console.log(spreadedNested);

// Copia soffice (shallow copy o soft copy)

// Copia dura oppure copia ricorsiva (deep o hard copy o recursive copy)

