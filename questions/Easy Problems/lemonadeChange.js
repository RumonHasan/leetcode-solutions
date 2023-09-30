const lemonadeChange = (bills) => {
  const intuitiveApproach = () => {
    let map = new Map();
    let index = 0;
    while (index < bills.length) {
      const bill = bills[index];
      map.has(bill) ? map.set(bill, map.get(bill) + 1) : map.set(bill, 1);
      // main logic
      if (bill === 10) {
        if (!map.has(5)) return false;
        if (map.has(5)) {
          map.set(5, map.get(5) - 1);
          if (map.get(5) <= 0) map.delete(5);
        }
      }
      // when bill is 20
      if (bill === 20) {
        if (!map.has(5)) return false;
        if (map.has(5) && map.has(10) && map.get(5) >= 1 && map.get(10) >= 0) {
          map.set(5, map.get(5) - 1);
          map.set(10, map.get(10) - 1);
          if (map.get(5) <= 0) map.delete(5);
          if (map.get(10) <= 0) map.delete(10);
        } else if (map.has(5) && map.get(5) >= 3) {
          map.set(5, map.get(5) - 3);
          if (map.get(5) <= 0) map.delete(5);
        } else {
          return false;
        }
      }
      index++;
    }
    return true;
  };
  //   console.log(intuitiveApproach());
};

// cost of lemonade is 5 dollars and each customers should get exact change for returning true
//console.log(lemonadeChange([5, 5, 5, 10, 5, 5, 10, 20, 20, 20]));
