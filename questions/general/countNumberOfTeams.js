const countNumberOfTeams = (rating) => {
  let totalCount = 0;

  for (let i = 1; i < rating.length - 1; i++) {
    const currNum = rating[i];
    let leftCount = 0;
    let rightCount = 0;

    // ascending order iteration
    for (let left = i - 1; left >= 0; left--) {
      if (rating[left] < currNum) {
        leftCount++;
      }
    }
    for (let right = i + 1; right < rating.length; right++) {
      if (rating[right] > currNum) {
        rightCount++;
      }
    }
    // descending order iteration
    let leftDesc = 0;
    let rightDesc = 0;
    for (let left = i - 1; left >= 0; left--) {
      if (rating[left] > currNum) {
        leftDesc++;
      }
    }
    for (let right = i + 1; right < rating.length; right++) {
      if (rating[right] < currNum) {
        rightDesc++;
      }
    }
    totalCount += leftDesc * rightDesc + leftCount * rightCount;
  }
  return totalCount;
};

console.log(countNumberOfTeams([2, 5, 3, 4, 1]));
