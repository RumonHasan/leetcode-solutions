const has_codes = (s, k) => {
  let need_len = Math.pow(2, k);
  let map = new Map();
  let str = '';
  for (let char of s.slice(0, k)) {
    str += char;
  }
  map.set(str, 1);
  for (let i = k; i < s.length; i++) {
    let curr_char = s[i];
    let str_array = str.split('');
    str_array.shift();
    str = str_array.join('');
    str += curr_char;
    map.set(str, (map.get(str) || 0) + 1);
  }
  return map.size() === need_len;
};

// console.log(has_codes('00110110', 2));
