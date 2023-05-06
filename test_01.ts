function isDigisible(n: number): boolean {
  let result = false;
  const toNumber = (num: string) => Number(num);
  const digits = Array.from(String(n), toNumber);

  // None of the digits is zero
  if (digits.includes(0)) {
    return result;
  }

  // it is divisible by each of its digits
  for (const digit of digits) {
    if (n % digit !== 0) {
      return result;
    }
  }

  // It is written with all different numbers
  let uniqueNumber = [...new Set(digits)];

  result = digits.length === uniqueNumber.length;
  return result;
}

console.log("1: ", isDigisible(1));
console.log("12: ", isDigisible(12));
console.log("555: ", isDigisible(555));
console.log("520: ", isDigisible(520));
