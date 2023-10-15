const greatestLetter = (s) => {
  const intuitiveApproach = () => {
    let collection = [];
    let end = 1;
    let sArray = s.split('').sort((a, b) => a.localeCompare(b));
    let letterSetArray = [...new Set([...sArray])];
    while (end < letterSetArray.length) {
      const current = letterSetArray[end];
      const prev = letterSetArray[end - 1];
      if (prev.toUpperCase() == current) {
        collection.push(current);
      }
      end++;
    }
    if (collection.length === 0) {
      return '';
    }
    return collection[collection.length - 1];
  };
};

//console.log(greatestLetter('arRAzFif'));
