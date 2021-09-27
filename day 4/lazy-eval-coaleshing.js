// Ipotizziamo di avere un oggetto che rappresenta i dati di una particolare persona
const person_1 = {
  name: "Davide",
  surname: "Rossi",
  weight: 80,
  height: 175,
  car: {
    manifacturer: "Citroen",
    model: "C3",
    year: 2013,
    cv: 75,
    kw: 55,
    color: "white",
  },
  hair: {
    color: "black",
    length: "average",
  },
};

const person_2 = {
  name: "Samuel",
  surname: "Finocchio",
  weight: 100,
  height: 181,
  car: {
    manifacturer: "BMW",
    model: "E30",
    year: 1991,
    cv: 116,
    kw: 87,
    color: "blue",
  },
};

const getHairColor = (person) => {
  return person.hair.color;
};

console.log(getHairColor(person_1));
// console.log(getHairColor(person_2)); // No hair, raises exception

// Altenative
const getHairColorSafe_1 = (person) => {
  // Versione parlante, prolizza newbie
  if (person.hair) {
    return person.hair.color;
  }
  return undefined;
};

const getHairColorSafe_2 = (person) => {
  // Versione abbreviata utilizzando la short circuit evaluation
  return person.hair && person.hair.color;
};

const getHairColorSafe_3 = (person) => {
  // Versione abbreviata ES-moderno
  // Optional chaining
  return person.hair?.color;
};

console.log(getHairColorSafe_1(person_2));
console.log(getHairColorSafe_2(person_2));
console.log(getHairColorSafe_3(person_2));
