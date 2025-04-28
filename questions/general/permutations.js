const permutations = (nums) => {
  let result = [];
  let map = new Map();
  // occurence to check for every permutation combination
  for (const num of nums) {
    map.set(num, (map.get(num) || 0) + 1);
  }
  // main dfs function
  const dfs = (currPermute) => {
    // if currPermute size is same as nums.length then add to result
    if (currPermute.length === nums.length) {
      result.push([...currPermute]);
      return;
    }
    // checking for every combination by reducing occurence
    for (let [num, count] of map) {
      if (count > 0) {
        // add num to subset then perform dfs recursive call
        currPermute.push(num);
        // reduce the count when pushed in order to prevent duplicates
        map.set(num, map.get(num) - 1);
        dfs(currPermute);

        // backtrack and reset the index to the map
        currPermute.pop();
        map.set(num, count); // resetting count
      }
    }
  };
  dfs([]);
  return result;
};

console.log(permutations([1, 1, 2]));

const letterCombination = (s) => {
  let counter = 0;
  let map = new Map();
  for (const char of s) {
    map.set(char, (map.get(char) || 0) + 1);
  }
  const dfs = (sub) => {
    for (let [char, count] of map) {
      if (count > 0) {
        sub += char;
        map.set(char, map.get(char) - 1);
        counter++;
        dfs(sub);

        // reset the map
        map.set(char, count);
      }
    }
  };
  dfs('');
  return counter;
};

console.log(letterCombination('AAB'));
