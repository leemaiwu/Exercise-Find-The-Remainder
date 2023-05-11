const remainder = (n, m) => (n === 0 && n < m) || (m === 0 && n > m) ? NaN : n > m ? n % m : m % n

console.log(remainder(0, 5))
console.log(remainder(17, 5))
console.log(remainder(0, -1))
