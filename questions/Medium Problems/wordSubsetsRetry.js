const wordSubsetsRetry = (words1, words2) => {
  const intuitiveStraightForwardApproach = () => {
    let result = [];
    const generateCharFreq = (words2) => {
      let charMap = new Map();
      for (let index = 0; index < words2.length; index++) {
        let word = words2[index];
        let localCharMap = new Map();
        for (let subIndex = 0; subIndex < word.length; subIndex++) {
          const char = word[subIndex];
          localCharMap.has(char)
            ? localCharMap.set(char, localCharMap.get(char) + 1)
            : localCharMap.set(char, 1);
        }
        if (index === 0) {
          charMap = new Map(localCharMap);
        } else {
          for (let [key, value] of localCharMap) {
            if (charMap.has(key) && charMap.get(key) < value) {
              charMap.set(key, value);
            }
            if (!charMap.has(key)) {
              charMap.set(key, value);
            }
          }
        }
      }
      return charMap;
    };
    let map = generateCharFreq(words2); // sets max frequency of each character from each word from words2
    // now to check universality
    let end = 0;
    while (end < words1.length) {
      const word = words1[end];
      let wordMap = new Map();
      for (let index = 0; index < word.length; index++) {
        const wordChar = word[index];
        wordMap.has(wordChar)
          ? wordMap.set(wordChar, wordMap.get(wordChar) + 1)
          : wordMap.set(wordChar, 1);
      }
      let mapSize = 0;
      for (let [key, value] of map) {
        if (wordMap.has(key) && wordMap.get(key) >= value) {
          mapSize++;
        }
      }
      if (mapSize === map.size) result.push(word);
      end++;
    }
    return result;
  };

  // same approach but better syntax
  const optimizedApproach = (words1, words2) => {
    const generateFreq = (words) => {
      let globalMap = new Map();
      for (let word of words) {
        let charMap = new Map();
        for (let char of word) {
          charMap.has(char)
            ? charMap.set(char, charMap.get(char) + 1)
            : charMap.set(char, 1);
        }
        // updating the global map with the max occurences and adding new chars if there is not any available
        for (let [key, value] of charMap) {
          if (globalMap.has(key) && globalMap.get(key) > value) {
            globalMap.set(key, value);
          } else {
            globalMap.set(key, value);
          }
        }
      }
      return globalMap;
    };
    let centralMap = generateFreq(words2);
    // injection after checking whether all the words letter has higher or same frequencies as the ones from the words2
    let collection = [];
    for (let word of words1) {
      let map = new Map();
      for (let wordChar of word) {
        map.has(wordChar)
          ? map.set(wordChar, map.get(wordChar) + 1)
          : map.set(wordChar, 1);
      }
      let mapSize = 0;
      for (let [key, value] of centralMap) {
        if (map.has(key) && map.get(key) >= value) {
          mapSize++;
        }
      }
      mapSize === centralMap.size && collection.push(word);
    }
    return collection;
  };

  console.log(optimizedApproach(words1, words2));
};
// the char frequency should contain the max frequency of each alphabet in the words2
// creating a frequency map in order to check whether the word in words1 is universal or not if not do not add to the list
// this is the best approach to avoid TLE brute force approach
// after creating the char frequency need to iterate through the main list of words and inject the universally accepted words into the final result
console.log(
  wordSubsetsRetry(
    ['amazon', 'apple', 'facebook', 'google', 'leetcode'],
    ['e', 'o']
  )
);
