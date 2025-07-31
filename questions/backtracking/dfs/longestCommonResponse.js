const longestCommonResponse = (responses) => {
  let map = new Map();
  let collection = [];
  for (const response of responses) {
    const responseSet = new Set(response);
    for (const currResponse of responseSet) {
      map.set(currResponse, (map.get(currResponse) || 0) + 1);
    }
  }
  let largestVal = 0;
  for (const [_, value] of map) {
    if (value > largestVal) {
      largestVal = value;
    }
  }
  for (const [key, value] of map) {
    if (value === largestVal) {
      collection.push(key);
    }
  }
  return collection.sort((a, b) => a.localeCompare(b))[0];
};

console.log(
  longestCommonResponse([
    ['good', 'ok', 'good', 'ok'],
    ['ok', 'bad', 'good', 'ok', 'ok'],
    ['good'],
    ['bad'],
  ])
);
