const maxDistance = (arrays) => {
  let max_val = -Infinity;
  let min_val = Infinity;

  let max_array_marker = 0;
  let min_array_marker = 0;
  // main max max
  for (let i = 0; i < arrays.length; i++) {
    const currMin = arrays[i][0];
    const currMax = arrays[i][arrays[i].length - 1];
    if (currMin < min_val) {
      min_val = currMin;
      min_array_marker = i;
    }

    if (currMax > max_val) {
      max_val = currMax;
      max_array_marker = i;
    }
  }
  // return straight away if they are not equal
  if (max_array_marker !== min_array_marker) {
    return Math.abs(min_val - max_val);
  }
  // other tracking if they are equal from same array
  let other_max = -Infinity;
  let other_min = Infinity;

  for (let i = 0; i < arrays.length; i++) {
    const array = arrays[i];
    if (i !== max_array_marker) {
      const curr_max = array[array.length - 1];
      const curr_min = array[0];

      other_max = Math.max(other_max, curr_max);
      other_min = Math.min(other_min, curr_min);
    }
  }

  const checkOne = Math.abs(max_val - other_min);
  const checkTwo = Math.abs(other_max - min_val);

  return Math.max(checkOne, checkTwo);
};

// have to pick to two different integers from two different arrays and prevent duplication of elements from the same integer
//
console.log(
  maxDistance([
    [1, 2, 3],
    [4, 5],
    [1, 2, 3],
  ])
);
