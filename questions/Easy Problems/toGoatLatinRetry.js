const goatLatin = (sentence) => {
  const vowels = ['a', 'i', 'e', 'o', 'u'];
  let array = sentence.split(' ');
  let resultArray = [];
  let result = '';
  let end = 0;
  let aCounter = 1;
  while (end < array.length) {
    let word = array[end];
    if (vowels.includes(word[0].toLowerCase())) {
      resultArray.push(word + 'ma');
    } else {
      const firstLetter = word[0];
      resultArray.push(word.slice(1, word.length) + firstLetter + 'ma');
    }
    result += resultArray[resultArray.length - 1] + 'a'.repeat(aCounter) + ' ';
    resultArray.pop();
    aCounter++;
    end++;
  }
  return result.slice(0, -1);
};

//console.log(goatLatin('I speak Goat Latin'));
