// const dict = {};

// function Persona (n, c, e) {
//     this.nome = n;
//     this.cognome = c;
//     this.eta = e;
// }

// const np = new Persona("Mario", "R", 1);
// const np2 = new Persona("A", "B", 7);
// const np3 = new Persona("J", 10);

// np.nome = "Elton"
// console.log(np);
// console.log(np2);
// console.log(np3);

// const strings = ["Mario", "Papera", "Cammello", "Dugonga", "Mario", "Papera", "Mario"];
// const counter = {};

// for(let x of strings) {
//     if(!counter[x]) {
//         counter[x] = 1;
//     } else {
//         counter[x]++;
//     }
// }

// console.log(counter)

// const obj = {
//     "Tuna": "Yes",
//     "Age": true,
//     height: 100,
//     coins: [1,2,1,0.5]
// }

// const toQueryParams =
//     (obj) => "?" + Object.entries(obj).map((couple) => couple.join('=')).join('&');

// console.log(toQueryParams(obj));
// const qp = '?Tuna=yes&Age=true&height=100';

// console.log(Object.values(obj));
// console.log(Object.keys(obj));
// console.log(Object.entries(obj));

// const object = {
//   key1: "Something",
//   key2: "Something 1",
//   key3: "Something 2",
//   key4: 10,
//   key5: 20,
//   key6: true,
//   key7: { a: 10, b: [1, 2, 3] },
//   key8: ["ok", "all right", "mhh", "yes"],
//   key9: 1.618,
//   key10: () => console.log("chi cott?"),
// };

// console.log(Object.keys(object));

// const keys = Object.keys(object);
// const values = Object.values(object);
// const entries = Object.entries(object);
// console.log(entries);

// for(let [key, value] of entries) {
//     console.log(key, '=>', value);
// }

// for(let key in object) {
//     console.log(key, '=>', object[key]);
// }

/// Data una stringa di parole
// restituire la posizione della parola nella sua ultima occorrenza

// Esempio: "ciao hey ciao pollo tacchino ciao hey"
//             0    1   2    3      4       5   6
// output:
// ciao -> 5
// key -> 6
// pollo -> 3
// tacchino -> 4

// trasformare la stringa di partenza in una stringa che rappresenta la posizinoe dell'ultima occorrenza delle parole

// splitted = ['ciao', 'key', 'ciao', 'pollo', 'tacchino', 'ciao',  'hey'];
// esempio:
// Esempio: "ciao hey ciao pollo tacchino ciao hey"
//             5   6   5     3      4      5    6

// function solve(stringa) {
//     const arr = stringa.toLowerCase().split(' ');
//     const dict = {};

//     for(let index in arr) {
//         const value = arr[index];
//         if(dict[value] === undefined) {
//             dict[value] = index;
//             // Se vero dict non contiene nulla in posizione value-esima
//         } else {
//             dict[value] = index;
//             // value è gia stato precedentemente inserito dentro dict
//         }
//     }

//     return arr.map((_) => {
//         return dict[_]
//     }).join('');
// }

// console.log(solve("ciao hey ciao pollo tacchino ciao hey"));

// const data = {
//   name: "Elton",
//   surname: "John",
//   playThePiano: function () {
//     return this.name + "is playing rooooooocket maaaaaan";
//   },
// };

// Sintassi
// Binding del this
// Spread degli argomenti
// Costruttibilità (una fat arrow non può essere costruita con l'operatore new)

// Arità di una funzione il numero di parametri che prende
// const doSomething = (...data) => data;

// console.log(doSomething(1, 2, 3, 4, 5, 6, 7, 8));

// function Deamon(name, level) {
//   this.name = name;
//   this.level = level;

//   this.roar = function () {
//     return this.name + " is roaaaaring!!";
//   };
// }

// const deamon_1 = new Deamon("Bianca", 80);
// console.log(deamon_1);
// console.log(deamon_1.roar());
// console.log(Object.entries(deamon_1));

class FinalDeamon {
  weight = 100;
  constructor(name, level, ultimate, color = "red", tinyDeamon) {
    this.name = name;
    this.level = level;
    this.ultimate = ultimate;
    this.color = color;
    this.tinyDeamon = tinyDeamon;
  }

  doSomething() {}
}

const fd = new FinalDeamon("Cing", 100, () => console.log("aaaaaaaa"), "red");

fd.ultimate();

// optional chaining
console.log(fd.tinyDeamon?.level?.a?.b?.c?.d?.e);

// Array di negozi
// Ogni negozio ha un array di alimenti
// ogni alimento ha un array di allergeni

// Una persona, con un array di cosa a cui è allergico
const result = [
  {
    name: "Sisa",
    address: "Via cincinnato 23",
    groceries: [
      { name: "bread", price: 2.5, trigger: ["gluten"] },
      { name: "milk", price: 1.7, trigger: ["pprotein", "lactose"] },
    ],
  },
  {
    name: "Lidl",
    address: "Via roma 11",
    groceries: [
      { name: "Ham", price: 8, trigger: ["sulfates"] },
      { name: "milk", price: 1.7, trigger: [] },
      { name: "Beans", price: 3, trigger: ["tuna"] },
    ],
  },
];

const person = { name: "Mario", allergicTo: ["gluten", "pprotein"] };
