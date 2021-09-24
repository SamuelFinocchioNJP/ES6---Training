// Nella classica programmazione ad oggetti possiamo definire un oggetto solo se instanziamo una classe
// La classica definizione di oggetto non è quindi completamente valida
// Possiamo pensare ad oggetto in javascript come un dizionario
// Una struttura dati ad accesso diretto chiave => valore
// Per familiarità immaginiamo un oggetto come un Map negli altri linguaggi ad alto livello
// È comunque possibile instanziare da una funzione o da una classe un oggetto

// Operazioni comuni sugli oggetti
const testObject = {
  key: "value",
};

console.log(testObject.key);

// Anche se un oggetto è const è possibile modificarlo
// Sai dirmi perché?
testObject.otherKey = 123;
testObject["insane-key-name"] = true;

console.log(testObject);

console.log(Object.keys(testObject));
console.log(Object.values(testObject));
console.log(Object.entries(testObject));

function Animal(name = "Mario") {
  this.name = name;
  this.species = "";
  this.lifeExpectancy = "";
  this.food = [];
}

const a1 = new Animal("John");
const a2 = new Animal();

console.log(a1);
console.log(a2);

a1.isFish = true;
a2["isMammal"] = false;

a1.food.push("Cabbage");

console.log(a1);
console.log(a2);

// Object values restituisce una copia dei valori:
Object.values(a1).forEach((_) => _ === "John" && (_ = "Sander"));
// Ma se la copia è un riferimento? ;)
Object.values(a1).forEach((_) => Array.isArray(_) && _.push("Bacon"));

console.log(a1);

// Per iterare e modificare l'oggetto
Object.keys(a1).forEach((k) => {
  k === "name" && (a1[k] = "Elton");
});

console.log(a1);

// ES6 Class
class Vegetable {
  weight = 0;
  color = "";

  constructor(name, season) {
    this.name = name;
    this.season = season;
  }
}

const veggie = new Vegetable("Cabbage", "spring");
console.log(veggie);

// Getters and setters power
class Rectangle {
  constructor(height, width) {
    this.height = height;
    this.width = width;
  }

  get area() {
    return this.height * this.width;
  }

  set _height(height) {
    this.height = height * 1000;
  }
}

const rect = new Rectangle(10, 5);
console.log(rect.area); // No parentesis
rect._height = 10;
console.log(rect.area); // No parentesis

// Gli oggetti come gli array sono salvati come riferimenti ( indirizzi di memoria ) che puntano a HEAP
const obj1 = {
  a: 10,
  b: 20,
  c: true,
};

const obj2 = obj1;
obj2.a = 30;

console.log(obj1);
console.log(obj2);

// Anche qui è possibile utilizzare l'operatore di spread
const obj3 = { ...obj1 };
obj3.a = -1;

console.log(obj1);
console.log(obj2);
console.log(obj3);

// L'operatore di spread di permette anche di sovrascrivere alcune chiavi o di aggiungerne
const obj4 = { e: "hello", ...obj1, a: -1000 };
console.log(obj4);

// Anche qui attenzione che una copia di un riferimento contiene lo stesso indirizzo di HEAP
const nested_obj = {
    a: 10,
    b: {
        c: 15
    }
};

console.log(JSON.stringify(nested_obj, null, 2));

const nested_copy = {...nested_obj};
nested_copy.b.c = -999;

console.log(JSON.stringify(nested_obj, null, 2));
console.log(JSON.stringify(nested_copy, null, 2));