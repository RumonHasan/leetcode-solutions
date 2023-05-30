const removeOccurences = (s, part) => {
  let endIndex = 0;
  let partStartIndex = 0;
  let sArray = s.split('');
  while (endIndex < sArray.length) {
    if (sArray[endIndex] === part[partStartIndex]) {
      const slicePart = sArray.slice(endIndex, endIndex + part.length);
      if (slicePart.join('') === part) {
        sArray.splice(endIndex, part.length);
        endIndex = 0;
        continue;
      }
    }
    endIndex++;
  }
  return sArray.join('');
};

//console.log(removeOccurences('eemckxmckx', 'emckx'));
