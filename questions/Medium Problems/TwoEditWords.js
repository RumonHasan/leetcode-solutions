const twoEditWords = (queries, dictionary) => {
  let output = [];
  // brute force approach in comparing each word in queries with dictionary
  for (let i = 0; i < queries.length; i++) {
    let query = queries[i];
    for (let j = 0; j < dictionary.length; j++) {
      let dict_word = dictionary[j];
      let editLimit = 0;
      // checking for different letters
      for (let k = 0; k < dict_word.length; k++) {
        // checking for inequality
        if (dict_word[k] !== query[k]) {
          editLimit++;
        }
      }
      if (editLimit <= 2) {
        output.push(query);
        break;
      }
    }
  }
  // cleaning the output off similar names
  return output;
};
console.log(
  twoEditWords(
    ['tsl', 'sri', 'yyy', 'rbc', 'dda', 'qus', 'hyb', 'ilu', 'ahd'],
    ['uyj', 'bug', 'dba', 'xbe', 'blu', 'wuo', 'tsf', 'tga']
  )
);

// leetcode 2452 ... making edits to dictionary with a limit of two in order to check with dictionary
