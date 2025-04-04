const vowelSpellchecker = (wordlist, queries) => {
  let vowelMapper = new Map(); // mapping the vowel missing words as keys and adding real words as value
  let lowercaseMapper = new Map();
  let wordSet = new Set([...wordlist]); // for checking direct matching words
  let result = [];

  // function to replace vowel letters to check for common positioning
  const devowelWord = (word) => {
    let wordArray = word.toLowerCase().split('');
    const vowels = ['a', 'i', 'e', 'o', 'u', 'A', 'I', 'O', 'E', 'U'];
    const star = '*';
    for (let index in wordArray) {
      if (vowels.includes(wordArray[index])) {
        wordArray[index] = star;
      }
    }
    return wordArray.join('');
  };

  // populating the vowel mapper and capitalization word injection
  for (let word of wordlist) {
    const devoweledWord = devowelWord(word);
    if (!vowelMapper.has(devoweledWord)) {
      vowelMapper.set(devoweledWord, word);
    }
    const lowercaseWord = word.toLowerCase();
    if (!lowercaseMapper.has(lowercaseWord)) {
      lowercaseMapper.set(lowercaseWord, word);
    }
  }

  // to check against individual query and check for final checks
  const queryChecker = (query) => {
    // checking for exact word
    if (wordSet.has(query)) {
      return query;
    }
    // second condition to check (capitalization)
    const lowercaseQuery = query.toLowerCase();
    if (lowercaseMapper.has(lowercaseQuery)) {
      return lowercaseMapper.get(lowercaseQuery);
    }
    // third condition (vowel check)
    const devoweledQuery = devowelWord(lowercaseQuery);
    if (vowelMapper.has(devoweledQuery)) {
      return vowelMapper.get(devoweledQuery);
    }
    return '';
  };

  for (const query of queries) {
    result.push(queryChecker(query));
  }

  return result;
};

// console.log(
//   vowelSpellchecker(
//     ['KiTe', 'kite', 'hare', 'Hare'],
//     [
//       'kite',
//       'Kite',
//       'KiTe',
//       'Hare',
//       'HARE',
//       'Hear',
//       'hear',
//       'keti',
//       'keet',
//       'keto',
//     ]
//   )
// );
// finding max minimum substring for minsize
const maxFreq = (s, maxLetters, minSize, maxSize) => {
  let map = new Map(); // global map for containing the entire list of strings
  let subMap = new Map(); // for containing the char count of the map
  let string = '';
  // initial size check
  for (let i = 0; i < minSize; i++) {
    const currChar = s[i];
    string += currChar;
    subMap.set(currChar, (subMap.get(currChar) || 0) + 1);
  }
  if (subMap.size <= maxLetters && string.length === minSize) {
    map.set(string, (map.get(string) || 0) + 1); // increases occurences of found string
  }
  let maxCount = map.get(string) || 0; // only changes when the substring that fits the condition increases its count
  let end = minSize;
  let start = 0;
  let strArray = string.split(''); // easier for pushing and popping into the array as a stack
  // sliding window algo to check for newer combinations that fit the conditions
  while (end < s.length) {
    const currChar = s[end];
    const startChar = s[start];
    // removing start char occurence -1 or deletion
    if (subMap.has(startChar)) {
      subMap.set(startChar, subMap.get(startChar) - 1);
      if (subMap.get(startChar) === 0) {
        subMap.delete(startChar);
      }
    }
    // adding new char
    subMap.set(currChar, (subMap.get(currChar) || 0) + 1);
    strArray.shift();
    strArray.push(currChar);
    // if the condition passes then adding the max count occurence to the global map and checking its count
    if (subMap.size <= maxLetters && strArray.length === minSize) {
      const str = strArray.join('');
      map.set(str, (map.get(str) || 0) + 1);
      maxCount = Math.max(map.get(str), maxCount);
    }
    start++;
    end++;
  }
  return maxCount;
};

/**
 * Approach: checking for minSize and checking the maximum number of times its present in the string
 * Need two maps count string chars and one for counting substring within map
 * Substrings cannot exceed max of minSize
 */
//console.log(maxFreq('aababcaab', 2, 3, 4));

const rearrangeCharacters = (s, target) => {
  let count = 0;
  let sMap = new Map();
  let tSet = new Set([...target.split('')]);

  for (const char of s) {
    if (tSet.has(char)) {
      sMap.set(char, (sMap.get(char) || 0) + 1);
    }
  }
  // create target word and check
  while (sMap.get(target[0]) > 0) {
    let localString = '';
    for (let i = 0; i < target.length; i++) {
      const targetChar = target[i];

      // reducing map here so it ejects the while when target first char hits 0
      if (sMap.has(targetChar)) {
        localString += targetChar;
        sMap.set(targetChar, sMap.get(targetChar) - 1);
        if (sMap.get(targetChar) === 0) {
          sMap.delete(targetChar);
        }
      }
    }
    console.log(localString, sMap);
    if (localString === target) {
      count++;
    }
  }

  return count;
};

//console.log(rearrangeCharacters('abcba', 'abc'));

const maxUniqueSplits = (s) => {
  let set = new Set();
  // using backtracking to get all combinations
  const dfs = (index, set) => {
    if (index === s.length) {
      return 0;
    }
    let maxCount = 0; // checking dfs for every subsection
    for (let i = index; i < s.length; i++) {
      const substring = s.slice(index, i + 1);
      if (!set.has(substring)) {
        set.add(substring);
        maxCount = Math.max(maxCount, 1 + dfs(i + 1, set));
        set.delete(substring); // to enable bactracking
      }
    }
    return maxCount;
  };
  return dfs(0, set);
};

//console.log(maxUniqueSplits('aa'));

// have to return the kth string
const getHappyStrings = (n, k) => {
  let letters = ['a', 'b', 'c'];
  let happyStrings = [];

  const dfs = (current, length) => {
    if (length === n) {
      happyStrings.push(current);
      return;
    }

    for (const char of letters) {
      if (current[current.length - 1] !== char || current.length === 0) {
        dfs(current + char, length + 1); // it ends if its base case length
      }
    }
  };
  dfs('', 0);
  happyStrings.sort((a, b) => a.localeCompare(b));
  return happyStrings[k - 1] === undefined ? '' : happyStrings[k - 1];
};

console.log(getHappyStrings(1, 3));
