const reorganizeString = (s) => {
  let map = new Map();
  let dp = new Array(s.length).fill('');
  //get occurence
  for (let char of s) {
    map.set(char, (map.get(char) || 0) + 1);
  }
  // get most freq char
  let max_char = '';
  let max_char_freq = 0;
  for (let [key, value] of map) {
    if (value > max_char_freq) {
      max_char = key;
      max_char_freq = value;
    }
  }
  // placing the most freq char alternatively
  let max_counter = 0;
  let sub_index = 0;
  for (let i = 0; i < dp.length; i += 2) {
    dp[i] = max_char;
    sub_index = i;
    max_counter++;
    map.set(max_char, map.get(max_char) - 1);
    if (map.get(max_char) === 0) map.delete(max_char);
    if (max_counter === max_char_freq) {
      break;
    }
  }
  sub_index += 2; // for the next iteration after preset
  // egde case for checking whether they are still incomplete
  if (map.get(max_char) > 0) return '';
  // placing remaining chars in the dp
  for (let [key, value] of map) {
    while (map.get(key) > 0) {
      sub_index = sub_index >= dp.length ? 1 : sub_index; // if subindex exceeds the final dp length
      dp[sub_index] = key;
      sub_index += 2;
      map.set(key, map.get(key) - 1);
      if (value === 0) {
        map.delete(key);
      }
    }
  }
  return dp.join('');
};
//console.log(reorganizeString('ogccckcwmbmxtsbmozli'));
