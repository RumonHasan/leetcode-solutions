const areAlmostEqual = (s1, s2) => {
  if (s1 === s2) {
    return true;
  }
  let collectionS1 = [];
  let collectionS2 = [];
  for (let index in s1) {
    if (s1[index] !== s2[index]) {
      collectionS1.push([s1[index], Number(index)]);
      collectionS2.push([s2[index], Number(index)]);
    }
  }
  if (collectionS1.length > 2) return false;
  if (collectionS1.length === 2 && collectionS2.length === 2) {
    if (
      collectionS1[0][0] === collectionS2[1][0] &&
      collectionS1[1][0] === collectionS2[0][0]
    ) {
      return true;
    }
  }
  return false;
};

//console.log(areAlmostEqual('npv', 'zpn'));
