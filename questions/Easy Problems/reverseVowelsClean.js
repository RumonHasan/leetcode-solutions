const reverseVowelsClean = (s) => {
  const vowelArray = ['a', 'i', 'e', 'o', 'u'];
  let sArray = s.split('');
  let leftIndex = 0;
  let rightIndex = sArray.length - 1;
  while (leftIndex <= rightIndex) {
    if (
      vowelArray.includes(sArray[leftIndex].toLowerCase()) &&
      !vowelArray.includes(sArray[rightIndex].toLowerCase())
    ) {
      rightIndex--;
    } else if (
      vowelArray.includes(sArray[rightIndex].toLowerCase()) &&
      !vowelArray.includes(sArray[leftIndex].toLowerCase())
    ) {
      leftIndex++;
    } else if (
      vowelArray.includes(sArray[rightIndex].toLowerCase()) &&
      vowelArray.includes(sArray[leftIndex].toLowerCase())
    ) {
      let temp = sArray[rightIndex];
      sArray[rightIndex] = sArray[leftIndex];
      sArray[leftIndex] = temp;
      rightIndex--;
      leftIndex++;
    } else {
      // general null condition if there are no vowels at all
      rightIndex--;
      leftIndex++;
    }
  }
  return sArray.join('');
};

console.log(reverseVowelsClean('aA'));
