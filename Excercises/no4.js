const alphabet = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];

const middleIncluded = alphabet.indexOf("m");
const isLeft = (character) =>
  alphabet.indexOf(character.toLowerCase()) <= middleIncluded;

function connotation(str) {
  const left = [...str].filter(isLeft);
  const right = str.length - left;

  return left < right;
}

// contiguous counter
function onesCounter(input) {
  const contiguous = [];
  let contiguousCounter = 0;

  for (let number of input) {
    if (number === 0 && contiguousCounter !== 0) {
      contiguous.push(contiguousCounter);
      contiguousCounter = 0;
    }

    if (number === 1) contiguousCounter++;
  }

  input.pop() === 1 && contiguous.push(contiguousCounter);
  return contiguous;
}

// Pandemia
function infected(s) {
  const continents = s.split("X");
  const peopleAmount = continents.reduce((acc, curr) => acc + curr.length, 0);
  const infected = continents.reduce(
    (acc, curr) => acc + (curr.includes(1) ? curr.length : 0),
    0
  );
  return peopleAmount !== 0 ? (100 * infected) / peopleAmount : 0;
}
