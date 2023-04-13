const interview = (sentence) => {
  let sentenceArray = sentence.split('');
  const vowelsList = ['a', 'e', 'i', 'o', 'u', 'A', 'I', 'E', 'O', 'U'];
  let left = 0;
  let right = sentenceArray.length - 1;
  while (left < right) {
    if (
      vowelsList.includes(sentenceArray[left]) &&
      vowelsList.includes(sentenceArray[right])
    ) {
      let temp = sentenceArray[left];
      sentenceArray[left] = sentenceArray[right];
      sentenceArray[right] = temp;
      left++;
      right--;
    }
    if (
      !vowelsList.includes(sentenceArray[left]) &&
      !vowelsList.includes(sentenceArray[right])
    ) {
      left++;
      right--;
    }
    // iteration
    if (
      !vowelsList.includes(sentenceArray[left]) &&
      vowelsList.includes(sentenceArray[right])
    ) {
      left++;
    }
    if (
      !vowelsList.includes(sentenceArray[right]) &&
      vowelsList.includes(sentenceArray[left])
    ) {
      right--;
    }
  }
  return sentenceArray.join('');
};

console.log(interview('HAllo my name Is Rumon'));
