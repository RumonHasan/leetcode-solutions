const validMountainArrayRetry = (arr) => {
  // using one pass approach to achieve a O(n) solution
  const onePassAlgorithmicApproach = () => {
    let end = 0;
    while (end < arr.length) {
      if (arr[end] < arr[end + 1]) {
        let counter = 1;
        let check = false;
        while (end < arr.length && arr[end] < arr[end + 1]) {
          end++;
          counter++;
        }
        while (end < arr.length && arr[end] > arr[end + 1]) {
          end++;
          check = true;
          counter++;
        }
        if (check && counter === arr.length) {
          return true;
        }
      } else {
        return false;
      }
    }
  };
};

//console.log(validMountainArrayRetry([0, 3, 4, 5, 2, 1]));
