const stringSequence = (target) => {
  const alphabet = 'abcdefghijklmnopqrstuvwxyz';
  let string = '';
  let collection = [];

  let end = 0;
  while (end < target.length) {
    const targetLetter = target[end];
    for (let i = 0; i < alphabet.length; i++) {
      const currAlpha = alphabet[i];

      let tempString = string + currAlpha; // just remember each attempt is added to the collection library
      collection.push(tempString);

      if (targetLetter === currAlpha) {
        // only adds the next letter when its equal
        string += targetLetter;
        break;
      }
    }
    end++;
  }
  return collection;
};

console.log(stringSequence('abc'));

// get the peak mountain array index
const peakIndexInMountainArray = (arr) => {
  let end = 0;
  while (end < arr.length) {
    if (arr[end + 1] && arr[end + 1] > arr[end]) {
      let peak = 0;
      while (end < arr.length && arr[end + 1] > arr[end]) {
        end++;
      }
      peak = end;

      while (end < arr.length && arr[end + 1] < arr[end]) {
        end++;
      }
      return peak;
    }
    end++;
  }
  return 0;
};

console.log(peakIndexInMountainArray([0, 10, 5, 2]));
