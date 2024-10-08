const canArrange = (arr, k) => {
  let map = new Map();
  for (let i = 0; i < arr.length; i++) {
    let remainder = ((arr[i] % k) + k) % k; // to handle negative numbers
    map.set(remainder, (map.get(remainder) || 0) + 1);
  }
  for (let i = 0; i < arr.length; i++) {
    const remainder = ((arr[i] % k) + k) % k;
    const compliment = (k - remainder) % k;
    if (
      map.has(remainder) &&
      map.get(remainder) > 0 &&
      map.get(compliment) > 0
    ) {
      if (remainder === compliment) {
        // even case
        if (map.has(remainder) && map.get(remainder) > 1) {
          map.set(remainder, map.get(remainder) - 2);
          map.get(remainder) === 0 && map.delete(remainder);
        }
      } else if (map.has(compliment)) {
        map.set(compliment, map.get(compliment) - 1);
        map.set(remainder, map.get(remainder) - 1);
        map.get(remainder) === 0 && map.delete(remainder);
        map.get(compliment) === 0 && map.delete(compliment);
      }
      if (map.size === 0) return false;
    }
  }
  for (let [_, value] of map) {
    if (value > 0) return false;
  }
  return true;
};

//console.log(canArrange([-1, 1, -2, 2, -3, 3, -4, 4], 3));
