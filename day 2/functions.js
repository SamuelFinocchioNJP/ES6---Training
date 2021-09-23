// Definiamo una funzione un sottoprogramma richiamabile

// Javascript definsce 3 tipi di funzione
// Funzione con nome
// Funzione espressione (anonima)
// Funzione lambda grassa

// Una funzione con nome è cosi definita
// function nome_funzione([...args]) {
//<com>;*
//[return exp];
// }

// Una funzione espressione è così definita:
// function ([...args]) {
//<com>;*
//[return exp];
// }

// Una funzione lambda grassa ( fat arrow function )
// definizione formale di lambda grassa la lambda grassa è:  (...args) => { }

// Common missconception:
// Una fat arrow function è una lambda function

// Si definisce una lambda function una funzione utilizzabile come dato
// Che non dipende cioè dall'ambiente (ENV) e non ha effetti collaterali (side effect)

// Le differenze tra una funzione anonima (function expression) e una funzione freccia grassa (fat arrow function):
// 1) Differenza sintattica x => x * 2 vs function (x) { return 2 * x }  ( nota che sono entrambe lambda function )
// 2) Binding di arguments:

(function () {
  function fun() {
    console.log(...arguments);
  }

  const fafun = () => {
    console.log(...arguments);
  };

  fun(1, 2, 3);
  // fafun(1,2,3); // Error not defined
  // 3) Binding del this
  const obj = {
    name: "Davide Rossi",
    fatPercencentage: 99.4,
    FAsayHi: () => {
      console.log("Hi from", this.name);
    },
    EFsayHi: function () {
      console.log("Hi from", this.name);
    },
  };

  obj.FAsayHi();
  obj.EFsayHi();

  // 4) Costruttibilità
  // Una function è costruttibile, una fat arrow non lo è

  function Hooman(n, a) {
    this.name = n;
    this.age = a;
  }

  const FAHooman = (n, a) => {
    this.name = n;
    this.age = a;
  };

  console.log(new Hooman("Mario", 22));
  // console.log(new FAHooman("Mario", 22));

  // Una funzione, che sia essa fat arrow o expression può essere passata come parametro ad una seconda funzione
  // Si parla di funzione di ordine superiore (definizione):
  // Una funzione di ordine superiore (o funzione higher-order)
  // è una funzione che può prendere altre funzioni come parametri e/o restituire funzioni come risultato.
  // L'operatore differenziale in matematica è un esempio di funzione che mappa una funzione ad un'altra funzione.

  function applica(fun, a, b, c) {
    return [fun(a), fun(b), fun(c)];
  }

  function triplica(num) {
    return 3 * num;
  }
  console.log("HOF", applica(triplica, 2, 3, 4));

  // Javascript mette a disposizione una ricca collezione di HOF
  // Vediamo alcune delle più utilizzate tra le HOF appartendenti ad Array (metodi della classe Array)

  const r1a = [1, 2, 3, 4, 5].map(triplica);
  console.log("map 1", r1a);

  // Con dichiarazione inline
  const r1b = [1, 2, 3, 4, 5].map(function (x) {
    return x * 3;
  });
  console.log("map 2", r1b);

  // Con dichiarazione inline con fat arrow function con notazione prolissa
  const r1c = [1, 2, 3, 4, 5].map((x) => {
    return 3 * x;
  });
  console.log("map 3", r1c);

  // Con dichiarazione inline con fat arrow function con notazione abbreviata
  const r1d = [1, 2, 3, 4, 5].map((x) => 3 * x);
  console.log("map 4", r1d);

  // Comunemente utiliziamo le fat arrow function come parametri:
  const r2a = [1, 2, 3, 4, 5].filter((x) => x % 2 === 0);
  console.log("filter", r2a);

  const r3a = [1, 2, 3, 4, 5, 6].some((x) => x > 5);
  console.log("some", r3a);

  const r4a = [1, 2, 3, 4, 5, 6].every((x) => x > 5);
  console.log("every", r4a);

  const r5a = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10].reduce(
    (corrente, accumulatore) => {
      return accumulatore + corrente;
    },
    0
  );
  console.log("reduce", r5a);

  console.log("\n\nFor each");
  [1, 2, 3, 4, 5, 6].forEach((x) => {
    console.log("[" + x + "]");
    // Oppure
    console.log(`[${x}]`);
  });
  console.log("END For Each\n\n");

  // Composizione a concatenazione
  // Se abbiamo 2 funzioni e vogliamo effettuare una composizione in genere la forma è la seguente:
  // f ( g ( x ) ) oppure f ° g (x)

  // In queste funzioni in javascript, restituituendo nuovamente un array possiamo fare come segue

  // Somma dei pari raddoppiati
  // Pari filtrati con filter, raddoppiati con map, sommati con reduce
  const rcomp = [1, 2, 3, 4, 5, 6]
    .filter((x) => x % 2 === 0)
    .map((x) => x * 2)
    .reduce((acc, curr) => acc + curr, 0);

  // Versione equivalente ottimizzata:
  const rcompOpt = [1, 2, 3, 4, 5, 6].reduce((acc, curr) => {
    if (curr % 2 === 0) return acc + 2 * curr;
    return acc;
  }, 0);

  // Oppure:
  const rcompOptSecond =
    2 *
    [1, 2, 3, 4, 5, 6].reduce((acc, curr) => {
      if (curr % 2 === 0) return acc + curr;
      return acc;
    }, 0);

  console.log("Composition:", rcomp);
  console.log("Composition opt:", rcompOpt);
  console.log("Composition opt:", rcompOptSecond);
})();

// Una funzione può essere così richiamata:
(function () {})();
(() => {})();
