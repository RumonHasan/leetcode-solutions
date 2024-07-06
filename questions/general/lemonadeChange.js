const lemonadeChange = (bills) => {
  let map = new Map();
  for (let currBill of bills) {
    if (currBill === 5) {
      map.set(currBill, (map.get(currBill) || 0) + 1);
    }
    if (currBill === 10) {
      if (map.get(5) === 0 || !map.has(5)) {
        return false;
      }
      map.set(currBill, (map.get(currBill) || 0) + 1);
      map.set(5, map.get(5) - 1);
    }
    if (currBill === 20) {
      if (map.get(5) >= 1 && map.get(10) >= 1) {
        map.set(5, map.get(5) - 1);
        map.set(10, map.get(10) - 1);
      } else if (map.get(5) >= 3) {
        map.set(5, map.get(5) - 3);
      } else {
        return false;
      }
    }
  }
  return true;
};

//console.log(lemonadeChange([5, 5, 5, 5, 10, 5, 10, 10, 10, 20]));
