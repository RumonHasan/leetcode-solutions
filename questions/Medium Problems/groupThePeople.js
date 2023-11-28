const groupThePeople = (groupSizes) => {
  const intuitiveApproach = () => {
    let map = new Map();
    for (let index = 0; index < groupSizes.length; index++) {
      if (map.has(groupSizes[index])) {
        map.get(groupSizes[index]).push(index);
      } else {
        map.set(groupSizes[index], [index]);
      }
    }
    let collection = [];
    for (let [key, value] of map) {
      // local grouping algorithm
      let stack = [];
      let groupCount = value.length / Number(key);
      let localLength = Number(key);
      for (let end = 0; end < value.length; end++) {
        if (localLength === 0) {
          groupCount--;
          collection.push(stack);
          stack = [];
          localLength = Number(key);
        }
        stack.push(value[end]);
        // edge case for adding the last stack
        if (end === value.length - 1) collection.push(stack);
        localLength--;

        if (groupCount === 0) break;
      }
    }
    return collection;
  };
};
//console.log(groupThePeople([3, 3, 3, 3, 3, 1, 3]));

const rotateString = (s, goal) => {
  console.log(s, goal);
  const intutiveApproach = () => {
    let counter = 0;
    let array = s.split('');
    let check = false;
    while (true) {
      array.push(array.shift());
      counter++;
      if (array.join('') === goal) {
        check = true;
        break;
      }
      if (counter > goal.length) {
        return false;
      }
    }
    return check;
  };
};

let array = ['a', 'b', 'c', 'e'];
console.log(array.slice(1)); // starting then shows the rest of the array

console.log(rotateString('abcde', 'abced'));
