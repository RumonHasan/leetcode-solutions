const clearStars = (s) => {
  let indices = [];
  let deletedIndices = new Array(s.length).fill(false);
  for (let i = 0; i < 26; i++) {
    indices.push([]);
  }
  for (let i = 0; i < s.length; i++) {
    const currChar = s[i];
    // if its not star then add the indices to the indices array
    if (currChar !== '*') {
      const pushableIndex = s.charCodeAt(i) - 97; // index pushable to indices array
      indices[pushableIndex].push(i);
    }

    // if its a star traverse through the indices array and remove the appropriate indices
    if (currChar === '*') {
      for (let j = 0; j < 26; j++) {
        // extracts the smallest letter and index
        if (indices[j].length > 0) {
          const poppedIndex = indices[j].pop();
          deletedIndices[poppedIndex] = true;
          break;
        }
      }
    }
  }
  let resultString = '';
  // building the string
  for (let i = 0; i < s.length; i++) {
    if (!deletedIndices[i] && s[i] !== '*') {
      resultString += s[i];
    }
  }

  return resultString;
};

// need to remove lexicologically the smallest character
console.log(clearStars('acaba**')); // acb
