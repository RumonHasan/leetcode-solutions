const shortestCompletingWord = (licensePlate, words) => {
  // letter check function

  // initial thought process solution
  const initialSlowThoughtProcessSolution = () => {
    const modifiedLicensePlate = licensePlate.split(' ').join('').toLowerCase();
    let licenseMap = new Map();
    // get license occuring map with occurence
    for (let index in modifiedLicensePlate) {
      if (licenseMap.has(modifiedLicensePlate[index])) {
        licenseMap.set(
          modifiedLicensePlate[index],
          licenseMap.get(modifiedLicensePlate[index]) + 1
        );
      } else {
        if (isLetter(modifiedLicensePlate[index])) {
          licenseMap.set(modifiedLicensePlate[index], 1);
        }
      }
    }
    const licenseMapSize = licenseMap.size;
    let collection = [];
    // get occurence of each word in the words section
    for (let index = 0; index < words.length; index++) {
      let word = words[index];
      let localWordMap = new Map();
      for (
        let secondIndex = 0;
        secondIndex < words[index].length;
        secondIndex++
      ) {
        // populating local word map;
        if (localWordMap.has(word[secondIndex])) {
          localWordMap.set(
            word[secondIndex],
            localWordMap.get(word[secondIndex]) + 1
          );
        } else {
          localWordMap.set(word[secondIndex], 1);
        }
      }
      // check against license map iteration
      let localSizeChecker = 0;
      for (let [key, value] of licenseMap) {
        if (localWordMap.has(key) && value <= localWordMap.get(key)) {
          localSizeChecker++;
        }
      }
      if (localSizeChecker === licenseMapSize) {
        collection.push(word);
      }
    }
    return collection.sort((a, b) => a.length - b.length)[0];
  };

  // optimized approach for the code
  const optimizedApproach = () => {
    const isLocalLetter = (str) => {
      return str.length === 1 && str.match(/[a-z]/i);
    };
    // local function to return local hash for word in the words
    const getLocalHash = (word) => {
      let hash = {};
      for (const char of word) {
        if (isLocalLetter(char)) {
          hash[char.toLowerCase()]
            ? hash[char.toLowerCase()]++
            : (hash[char.toLowerCase()] = 1);
        }
      }
      return hash;
    };
    let licenseHash = getLocalHash(licensePlate);
    let licenseHashSize = Object.keys(licenseHash).length;
    let collection = [];
    // main loop check
    for (let wordIndex in words) {
      let word = words[wordIndex];
      let wordHash = getLocalHash(word);
      let counter = 0;
      for (const [key, value] of Object.entries(licenseHash)) {
        if (wordHash[key] && wordHash[key] >= value) {
          counter++;
        }
      }
      counter === licenseHashSize && collection.push(word);
    }
    return collection.sort((a, b) => a.length - b.length)[0];
  };
};

// console.log(
//   shortestCompletingWord('1s3 PSt', ['step', 'steps', 'stripe', 'stepple'])
// );
