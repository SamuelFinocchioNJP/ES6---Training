// Definiamo la closure come la combinazione di una funzione con il suo stato locale
// (lexical environment).
// L'interprete di Javascript crea una clojure ogni volta che una funzione viene dichiarata.

// Esempio di scope lessicale:
function outer() {
  const data = "Data content";
  function inner() {
    console.log(data);
  }

  return inner;
}

const fn = outer();
fn(); // Chiamiano inner, tuttavia lo "stato" di outer è ancora "vivo"

// Esempio di utilizzi:
function creaSalutatore(name) {
  const sentence = `Hello!, Greetings ${name}.`;
  return () => sentence;
}

const f1 = creaSalutatore("Marcello");
const f2 = creaSalutatore("Antonio");
const f3 = creaSalutatore("Silvano");
const f4 = creaSalutatore("Susan");

[f1, f2, f3, f4].forEach((fn) => console.log(fn()));

// Altro esempio:
function taxCalculator(vat) {
  return (price) => price + price * (vat / 100);
}

const calculateMedicalTax = taxCalculator(4);
const calculateFoodTax = taxCalculator(12);
const calculateItemsTax = taxCalculator(22);

console.log("Med", calculateMedicalTax(100));
console.log("Food", calculateFoodTax(100));
console.log("Items", calculateItemsTax(100));

// Nota bene:
// I parametri sono in scope della funzione finale grazie
// Per approfondire vedi closure
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Closures?retiredLocale=it
