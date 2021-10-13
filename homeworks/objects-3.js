// const objectsArr = [
//   { a: 10 },
//   { b: 15, c: 1 },
//   { a: 4, k: 1034, z: 999 },
//   { f: 55 },
//   { g: 9 },
// ];

// // const result = objectsArr.reduce((acc, curr) => {
// //     console.log(acc);
// //     return {...acc, ...curr};
// // }, {});

// const papera = { a: 10, B: 20 };
// const anatra = { k: 10, j: 100, B: 134 };
// console.log(papera);

// const arr1 = [1, 2, 3, 4];
// const arr2 = [234, 5, 67, 8, 23, 42, 34, 23, 42, 3, 4];

// const merged = [...arr2, ...arr1];
// console.log(merged);

// const papera_2 = { ...anatra, ...papera, ...arr2 };

// console.log(papera, papera_2);

// // console.log(result);
// // f: Array<{}> -> { a: 4, b: 15, c: 1, f: 55, g: 9 }

// const arr = [];
// for (let i = 1; i < 10; i++) {
//   arr[i] = 10;
// }

// console.log(arr);

// const robe = new Set();
// robe.add("Luigi");
// console.log(robe.has("mario"));
// robe.add("mario");
// console.log(robe.has("mario"));
// console.log(robe);
// robe.delete("mario");
// console.log(robe);
// console.log(robe.size);

// const set_2 = new Set(["John", "Tuna", "Elvis", "John", "John"]);
// console.log([...set_2]);

// const dict = {
//   a: 10,
//   a: 45,
// };

// function common(...items) {
//   // items contirne  [a, b, c];
//   const amountMapped = items.map((item) =>
//     item.reduce((acc, curr) => {
//       acc[curr] = acc[curr] === undefined ? 1 : acc[curr] + 1;
//       return acc;
//     }, {})
//   );

//   return amountMapped;
// }

// Clojure

function wrapper() {
  let a = "Paperospo";
  return function () {
    console.log(a);
  };
}

function creaSalutatore(name) {
  return function () {
    console.log("Hello", name);
  };
}

const salutaMario = function (name) {
  console.log("Hello", name);
};

// const s1 = creaSalutatore("Mario");
// const s2 = creaSalutatore("John");
// const s3 = creaSalutatore("Elton");
// const s4 = creaSalutatore("Jones");

// s1();
// s2();
// s3();
// s4();

function creaCalcolatoreTasse(iva) {
  const moltiplicatoreIva = iva / 100;

  return function (prezzo) {
    return prezzo + prezzo * moltiplicatoreIva;
  };
}

const calcolaIvaSanita = creaCalcolatoreTasse(3);
const calcolaIvaViveri = creaCalcolatoreTasse(6);
const calcolaIvaBeni = creaCalcolatoreTasse(22);

console.log(calcolaIvaSanita(100));
console.log(calcolaIvaViveri(100));
console.log(calcolaIvaBeni(100));

function summa(a, b, c, d) {
  return a + b + c + d;
}

function summa_2(a) {
  return function (b) {
    return function (c) {
      return function (d) {
        return a + b + c + d;
      };
    };
  };
}

console.log(summa(1, 2, 3, 4));
console.log(summa_2(1)(2)(3)(4));

function logger(title, user, date, message) {
  console.log(
    title,
    new Date(date).valueOf(),
    "logged by:",
    user,
    ":",
    message
  );
}

function logger_c(title) {
  return function (user) {
    return function (date) {
      return function (message) {
        console.log(
          title,
          new Date(date).valueOf(),
          "logged by:",
          user,
          ":",
          message
        );
      };
    };
  };
}

const loggerDiErroreDiMario = logger_c("Errore Fatale")("Mario");

loggerDiErroreDiMario(new Date())("S'a rott tutt!");
logger("Errore fatale", "Giammaria", new Date(), "S'a rott tutt!");
