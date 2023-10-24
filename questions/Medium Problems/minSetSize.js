const minSetSize = (arr) => {
  let atleastHalf = arr.length / 2;
  let map = new Map();
  let set = new Set();
  arr.forEach((num) =>
    map.has(num) ? map.set(num, map.get(num) + 1) : map.set(num, 1)
  );
  let sortedMap = new Map(Array.from(map).sort((a, b) => b[1] - a[1]));
  let lengthCheck = 0;
  for (let [key, value] of sortedMap) {
    if (lengthCheck < atleastHalf) {
      lengthCheck += value;
      set.add(Number(key));
    } else {
      break;
    }
  }
  return set.size;
};

// console.log(
//   minSetSize([9, 77, 63, 22, 92, 9, 14, 54, 8, 38, 18, 19, 38, 68, 58, 19])
// );
