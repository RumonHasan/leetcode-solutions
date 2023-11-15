const hasAllBinaryCodes = (s, k) => {
  const slowIntuitiveApproach = () => {
    let binarySet = new Set();
    let binaryString = '';
    for (let index = 0; index < k; index++) {
      binaryString += s[index];
    }
    binarySet.add(binaryString);
    let end = k;
    while (end < s.length) {
      binaryString = binaryString.slice(1, binaryString.length);
      binaryString += s[end];
      binarySet.add(binaryString);
      end++;
    }
    return binarySet.size === Math.pow(2, k);
  };
};

//console.log(hasAllBinaryCodes('00110110', 2));
