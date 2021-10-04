// Even or Odd - Which is Greater?

function evenOrOdd(str) {
  const splitted = [...str];

  const evenSum = splitted
    .filter((_) => _ % 2 === 0)
    .reduce((acc, curr) => acc + +curr, 0);
  const oddSum = splitted
    .filter((_) => _ % 2 !== 0)
    .reduce((acc, curr) => acc + +curr, 0);

  console.log(splitted, evenSum, oddSum);
  if (evenSum === oddSum) {
    return "Even and Odd are the same";
  }

  return evenSum > oddSum
    ? "Even is greater than Odd"
    : "Odd is greater than Even";
}

// Single digit
function singleDigit(n) {
  // caso b: Se n <= 9 return n

  if (n <= 9) return n;

  // 1) prendi la stringa e la metti in binario
  // 2) finchè la somma dei bit a 1 è maggiore di 9
  //      continuo ad iterare la stessa logica
  // 3) appena arrivo a un numero <= 9 restituisco il numero di bit a 1

  let toBin = n.toString(2);

  // For o reduce
  let bitsOn = 0;
  do {
    if (bitsOn !== 0) {
      toBin = bitsOn.toString(2);
    }

    bitsOn = [...toBin].reduce((acc, curr) => acc + (curr === "1" ? 1 : 0), 0);
  } while (bitsOn > 9);

  return bitsOn;
}

// Or

function singleDigit(n) {
  if (n <= 9) return n;

  let acc = 0;
  while (n > 0) {
    acc += n % 2;
    n = Math.floor(n / 2);
  }

  if (acc > 9) return singleDigit(acc);
  return acc;
}
