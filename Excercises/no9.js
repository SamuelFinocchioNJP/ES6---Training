// Find the majority
function majority(arr) {
  const counter = {};

  for (let x of arr) {
    if (counter[x]) counter[x]++;
    else counter[x] = 1;
  }

  const sortedCounter = Object.entries(counter).sort((a, b) => b[1] - a[1]);
  if (sortedCounter.length === 0) return null;

  if (sortedCounter.length > 1 && sortedCounter[0][1] === sortedCounter[1][1]) {
    return null;
  }

  return sortedCounter[0][0];
}

// Last digits of a number
function lastDigit(n, d) {
  return d <= 0 ? [] : [...n.toString()].slice(-d).map((_) => +_);
}
