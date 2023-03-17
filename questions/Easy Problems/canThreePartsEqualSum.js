const canThreePartsEqualSum = (arr) => {
  let totalSum = arr.reduce((acc, curr) => acc + curr);
  let partitionSum = totalSum / 3;
  let partitionCount = 0;
  // checking partition
  let localPartitionSum = 0;
  for (let index = 0; index < arr.length; index++) {
    localPartitionSum += arr[index];
    if (localPartitionSum === partitionSum) {
      partitionCount++;
      localPartitionSum = 0;
    }
  }
  return partitionCount >= 3;
};

//console.log(canThreePartsEqualSum([10, -10, 10, -10, 10, -10, 10, -10]));
