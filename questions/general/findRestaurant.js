const findRestaurant = (list1, list2) => {
  // not the best way but its not nested for loop
  let map = new Map();
  for (let wordIndex in list1) {
    map.set(list1[wordIndex], [Number(wordIndex), false]);
  }
  for (let wordIndex in list2) {
    if (map.has(list2[wordIndex])) {
      map.get(list2[wordIndex])[1] = true;
      map.get(list2[wordIndex])[0] += Number(wordIndex);
    }
  }
  let collection = [];
  for (let [key, value] of map) {
    if (value[1]) {
      collection.push({ word: key, val: value[0] });
    }
  }
  collection.sort((a, b) => a.val - b.val);
  let val = collection[0].val;
  let result = [];
  for (let item of collection) {
    result.push(item.val === val && item.word);
  }
  return result.filter((item) => typeof item === 'string');
};

console.log(
  findRestaurant(
    ['Shogun', 'Tapioca Express', 'Burger King', 'KFC'],
    [
      'Piatti',
      'The Grill at Torrey Pines',
      'Hungry Hunter Steakhouse',
      'Shogun',
    ]
  )
);
