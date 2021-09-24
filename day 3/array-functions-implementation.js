// Sovrascriviamo il prototipo di Array per definire le nostre HOF
// Dobbiamo usare function per fare riferimento a this

// Le funzioni di Array non modificano l'array originale,
// Faremo quindi una copia dell'array
// Per farlo utilizziamo l'operatore di spread (...)
// const a = [1,2,3,4];
// const b = a;
// b[1] = 10;
// Sia a che b contengono [1, 10, 3, 4]

// Con la copia:
// const a = [1, 2, 3, 4];
// const b = [...a];
// b[1] = 10;
// a: [1, 2, 3, 4];
// b: [1, 10, 3, 4]

// con lo spread possiamo anche concatenare array:
const _arr1 = [1,2,3];
const _arr2 = [4,5,6];
const _arr_concat = [..._arr1, ..._arr2];
console.log(_arr1);
console.log(_arr2);
console.log(_arr_concat);

Array.prototype.myMap = function (fn) {
  const arr = [...this]; // questa riga non funzionerebbe con una lambda
  for (let i = 0; i < arr.length; i++) {
    arr[i] = fn(arr[i]); // Questa riga modificherebbe l'array originale senza lo spread
  }

  return arr;
};

Array.prototype.myFilter = function (fn) {
  const res = [];
  for (let i = 0; i < this.length; i++) {
    if (fn(this[i])) {
      res.push(this[i]);
    }
  }

  return res;
};

Array.prototype.myEvery = function (fn) {
  let res = true;

  for (let i = 0; i < this.length; i++) {
    res = res && fn(this[i]);
  }

  return res;
};

// mySome fate voi

// My reduce se avete i marons fate voi
// Altrimenti:
//   |
//   |
//   |
//   |
//   |
//   |

Array.prototype.myReduce = function (fun, start) {
  // fn ha 2 parametri (acc, curr)
  let res = start;
  for (let i = 0; i < this.length; i++) {
    res = fun(this[i], res);
  }

  return res;
};

console.log([1, 2, 3, 4, 5].myMap((x) => 2 * x));
console.log([1, 2, 3, 4, 5].myFilter((x) => x % 2 === 0));
console.log([1, 2, 3, 4, 5].myMap((x) => 2 * x).myEvery((x) => x % 2 === 0));
console.log([1, 2, 3, 4, 5].myReduce((acc, curr) => acc + curr, 0));