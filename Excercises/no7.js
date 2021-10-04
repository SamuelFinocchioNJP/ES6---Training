// 1, 1, 2, 3, 5, 8, 13, 21, 34, 55 ...

// O(1.618 ^ n)
function fibonacci(n) {
  if (n == 0 || n == 1) return 1;
  return fibonacci(n - 1) + fibonacci(n - 2);
}

// O(n)
function fibDP(n) {
  const dp = [1, 1, ...new Array(n - 1)];
  for (let i = 2; i < dp.length; i++) {
    dp[i] = dp[i - 1] + dp[i - 2];
  }

  return dp;
}

function fibEvenSum(n) {
    return fibDP(n).filter(_ => _ % 2 === 0).reduce((acc, curr) => acc + curr, 0);
}

console.log(fibonacci(6));
console.log(fibDP(6));

// console.log(fibonacci(60));
console.log(fibDP(100));