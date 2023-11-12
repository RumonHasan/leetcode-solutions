const unhappyFriends = (n, preferences, pairs) => {
  let preferenceMap = new Map();
  for (let person = 0; person < n; person++) {
    let personPrefTable = preferences[person];
    let partner;
    for (let pairIndex = 0; pairIndex < pairs.length; pairIndex++) {
      let singlePair = pairs[pairIndex];
      if (singlePair.includes(person)) {
        for (let index = 0; index < singlePair.length; index++) {
          if (singlePair[index] !== person) {
            partner = singlePair[index];
            break;
          }
        }
      }
    }
    console.log(person, partner); // for each person checking pref table
    preferenceMap.set(person, []);
    for (let prefIndex = 0; prefIndex < personPrefTable.length; prefIndex++) {
      let prefPartner = personPrefTable[prefIndex];
      if (partner !== prefPartner) {
        preferenceMap.get(person).push(prefPartner);
      }
      if (partner === prefPartner) {
        break;
      }
    }
  }
  let unhappyBoys = 0;
  console.log(preferenceMap);
  for (let [key, value] of preferenceMap) {
    let person = Number(key);
    for (let index = 0; index < value.length; index++) {
      const preferredPartner = value[index];
      if (preferenceMap.get(preferredPartner).includes(person)) {
        unhappyBoys++;
        break;
      }
    }
  }
  return unhappyBoys;
};

// console.log(
//   unhappyFriends(
//     4,
//     [
//       [1, 3, 2],
//       [2, 3, 0],
//       [1, 3, 0],
//       [0, 2, 1],
//     ],
//     [
//       [1, 3],
//       [0, 2],
//     ]
//   )
// );
