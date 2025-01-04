const maxArea = (h, w, horizontalCuts, verticalCuts) => {
  let hArray = [0, ...horizontalCuts, h].sort((a, b) => a - b);
  let vArray = [0, ...verticalCuts, w].sort((a, b) => a - b);
  let maxHgap = BigInt(0); // Convert to BigInt
  let maxWgap = BigInt(0); // Convert to BigInt
  const MOD = BigInt(1000000007); // Convert modulo to BigInt

  // get horizontal gap with adjustment for BigInt
  for (let i = 1; i < hArray.length; i++) {
    maxHgap = BigInt(Math.max(Number(maxHgap), hArray[i] - hArray[i - 1]));
  }
  // get vertical gap
  for (let j = 1; j < vArray.length; j++) {
    maxWgap = BigInt(Math.max(Number(maxWgap), vArray[j] - vArray[j - 1]));
  }

  // Convert result back to number using BigInt operations
  return Number((maxHgap * maxWgap) % MOD);
};
// vertical is width horizontal is height
console.log(maxArea(5, 4, [1, 2, 4], [1, 3]));
