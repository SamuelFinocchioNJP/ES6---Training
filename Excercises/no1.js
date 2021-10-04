// Il dna è un acido composto da 4 possibili basi azotate in sequenza
// A T C G

// Data in input una stringa di DNA swappare con le seguenti regole le basi azotate:
// A => T
// T => A
// C => G
// G => C

function DNAStrand(dna) {}

// https://www.codewars.com/kata/554e4a2f232cdd87d9000038

// Count the divisors
function getDivisorsCnt(n) {
  let divisors = 1;
  for (let i = 2; i <= n; i++) {
    if (n % i === 0) divisors++;
  }

  return divisors;
}
