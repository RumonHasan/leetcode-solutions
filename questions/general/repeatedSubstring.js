const repeatedSubstring = (s) => {
  let sub = '';
  let totalLen = s.length;
  let currSubLen = sub.length;
  if (s.length === 1) return false;
  if (s.split('').every((letter) => letter === s[0])) return true;
  for (let i = 0; i < s.length; i++) {
    const currChar = s[i];
    sub += currChar;
    currSubLen = sub.length;
    const diff = Math.floor(totalLen / currSubLen);

    if (
      diff <= totalLen / 2 &&
      diff * currSubLen === totalLen &&
      currSubLen < totalLen
    ) {
      const subStringLen = totalLen / currSubLen;
      const substring = sub.repeat(subStringLen);
      if (substring === s) return true;
    }
  }
  return false;
};

const countDistinctInteger = (nums) => {
  const greedyApproach = () => {
    let revArr = [];
    let set = new Set();
    for (let num of nums) {
      set.add(num);
      const rev = Number(num.toString().split('').reverse().join(''));
      revArr.push(rev);
    }
    for (let num of revArr) {
      set.add(num);
    }
    return set.size;
  };
};

//

const longestSpecialSubAtleast3 = (s) => {
    let map = new Map();
    let stack = [];
    for (let i = 0; i < s.length; i++){
        let str = s[i];
        map.set(str, (map.get(str) || 0) + 1);
        for (let j = i + 1; j < s.length; j++){
            if (s[j - 1] === s[j]){
                str += s[j];
                map.set(str, (map.get(str) || 0) + 1);
            }else{
                break;
            }
        }
    }
    for (let [key, value] of map){
        if (value >= 3){
            stack.push(key);
        }
    };
    console.log(stack);
    if (stack.length === 0) return -1;
    stack.sort((a, b)=> a.length - b.length)
    return stack[stack.length - 1].length;
};

//console.log(longestSpecialSubAtleast3("aaaa"));

//console.log(repeatedSubstring("bb"));
