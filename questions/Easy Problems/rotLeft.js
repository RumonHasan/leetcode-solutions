const rotLeft = (a, d) => {
  while (d > 0) {
    a.push(a.shift());
    d--;
  }
  return a;
};

//console.log(rotLeft([1, 2, 3, 4, 5], 4));
