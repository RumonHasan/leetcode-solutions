const secondLargestInString = (s) => {
  const initialIntuition = () => {
    let max = -1;
    let numberExtracts = [];
    for (let index in s) {
      const val = s[index];
      if (!isNaN(Number(val))) {
        numberExtracts.push(Number(val));
        max = Math.max(max, Number(val));
      }
    }
    let sorted = numberExtracts.sort((a, b) => b - a);
    if (sorted.every((num) => num === sorted[0])) return -1;
    for (let index in sorted) {
      if (sorted[index] < max) {
        return sorted[index];
      }
    }
  };
};

//console.log(secondLargestInString('abc1111'));
