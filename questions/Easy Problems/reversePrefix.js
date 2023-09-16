const reversePrefix = (word, ch) => {
  const basicIntuition = () => {
    let wordArray = word.split('');
    if (!wordArray.includes(ch)) {
      return word;
    }
    for (let index = 0; index < wordArray.length; index++) {
      if (wordArray[index] === ch) {
        return (
          wordArray
            .slice(0, index + 1)
            .reverse()
            .join('') + wordArray.slice(index + 1, wordArray.length).join('')
        );
      }
    }
  };

  console.log(basicIntuition());
};

console.log(reversePrefix('xyxzxe', 'z'));
