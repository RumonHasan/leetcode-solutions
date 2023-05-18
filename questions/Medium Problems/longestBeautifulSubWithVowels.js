const longestBeautifulSubWithVowels = (word) => {
  let vowels = 'aeiou';
  let maxLength = 0;
  for (let index = 0; index < word.length; index++) {
    let letter = word[index];
    if (letter === 'a') {
      // controlling the vowel check
      let endPoint = index;
      let checkIteration = true;
      for (let secondIndex = 0; secondIndex < 5; secondIndex++) {
        if (word[endPoint] !== vowels[secondIndex]) {
          checkIteration = false;
          break;
        }
        // check consequtive letters
        while (index < word.length && word[endPoint] === vowels[secondIndex]) {
          endPoint++;
        }
      }
      if (checkIteration) {
        maxLength = Math.max(maxLength, endPoint - index);
      }
      // setting the endindex to a new point after the max array is calculated
      // index is set to end - 1 because in the last iteration is added by one
      index = endPoint - 1;
    }
  }
  return maxLength;
};
// need to use a start sub index for an index controller
// getting the longest substring with all the vowels present
// gotta start with then look for whether all the five different vowels are present or not
// console.log(
//   longestBeautifulSubWithVowels(
//     'uuuuuuuuooooooooiiiiiiiiieeeeeeeeeaaaaaaaaaauaeiou'
//   )
// );
