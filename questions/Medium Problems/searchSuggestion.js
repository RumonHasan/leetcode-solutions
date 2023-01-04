const suggestedProducts = (products, searchWord) => {
  let sorted = products.sort();
  let collection = [];
  let searchString = '';
  for (let i = 0; i < searchWord.length; i++) {
    searchString += searchWord[i];
    let subArray = [];
    for (let j = 0; j < sorted.length; j++) {
      if (sorted[j].startsWith(searchString)) {
        subArray.push(sorted[j]);
      }
    }
    subArray.length > 3
      ? collection.push(subArray.slice(0, 3))
      : collection.push(subArray);
  }
  return collection;
};

// console.log(
//   suggestedProducts(
//     ['mobile', 'mouse', 'moneypot', 'monitor', 'mousepad'],
//     'mouse'
//   )
// );
