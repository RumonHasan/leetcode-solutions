const minLength = (s) => {
  const minLengthNotOptimized = () => {
    let sArray = s.split('');
    const checkSubstrings = ['AB', 'CD'];
    let check = sArray[0] + sArray[1];
    let endIndex, startIndex;
    if (checkSubstrings.includes(check)) {
      sArray = [...sArray].slice(2, sArray.length);
      endIndex = 1;
      startIndex = 0;
    } else {
      startIndex = 1;
      endIndex = 2;
    }
    while (endIndex < s.length) {
      const check = sArray.slice(startIndex, endIndex + 1).join('');
      if (checkSubstrings.includes(check)) {
        sArray.splice(startIndex, 2);
        startIndex = 0;
        endIndex = 1;
        continue;
      }
      startIndex++;
      endIndex++;
    }

    return sArray.length;
  };
};
console.log(minLength('ABFCACDB'));
