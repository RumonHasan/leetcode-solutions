const kWeakestRows = (mat, k) => {
  let collection = [];
  let map = new Map();
  for (let index = 0; index < mat.length; index++) {
    let singleRow = mat[index];
    map.set(
      index,
      singleRow.reduce((acc, curr) => acc + curr)
    );
  }
  for (let [key, value] of map) {
    collection.push([key, value]);
  }
  let sortedCollection = collection.sort((a, b) => a[1] - b[1]);
  return sortedCollection
    .slice(0, k)
    .map((collectionItem) => collectionItem[0]);
};

// console.log(
//   kWeakestRows(
//     [
//       [1, 1, 0, 0, 0],
//       [1, 1, 1, 1, 0],
//       [1, 0, 0, 0, 0],
//       [1, 1, 0, 0, 0],
//       [1, 1, 1, 1, 1],
//     ],
//     3
//   )
// );
