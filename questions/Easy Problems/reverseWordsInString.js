const reverseWordsInString = (s) => {
  const intuitiveApproach = () => {
    let stringWithNoSpace = s.trim().split(' ');
    let finalString = '';
    for (let index = stringWithNoSpace.length - 1; index >= 0; index--) {
      if (stringWithNoSpace[index] !== '') {
        finalString += stringWithNoSpace[index] + ' ';
      }
    }
    return finalString.slice(0, -1);
  };
};

//console.log(reverseWordsInString('a good   example'));
