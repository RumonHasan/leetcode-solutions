const suggestedProducts = (products, searchWord) => {
  let checkString = '';
  let sortedProds = products.sort((a, b) => a.localeCompare(b));
  let collection = [];
  for (let index = 0; index < searchWord.length; index++) {
    const letter = searchWord[index];
    let searchCount = 0;
    checkString += letter;
    let localCollection = [];
    for (let wordIndex = 0; wordIndex < sortedProds.length; wordIndex++) {
      if (searchCount === 3) {
        break;
      }
      if (sortedProds[wordIndex].startsWith(checkString)) {
        localCollection.push(sortedProds[wordIndex]);
        searchCount++;
      }
    }
    collection.push(localCollection);
  }
  return collection;
};

// console.log(
//   suggestedProducts(
//     ['mobile', 'mouse', 'moneypot', 'monitor', 'mousepad'],
//     'mouse'
//   )
// );
