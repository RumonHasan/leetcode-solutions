const containerWithMostWater = (height) => {
  // plain two pointer approach where its reduced from both sides based on conditions
  const intuitiveApproach = () => {
    let right = height.length - 1;
    let left = 0;
    let maxLength = 0;
    while (left <= right) {
      const distance = right - left;
      let shorterArea = Math.min(height[left], height[right]);
      // area is always calculated with the shorter height
      let area = distance * shorterArea;
      maxLength = Math.max(area, maxLength);
      if (shorterArea === height[left]) {
        left++;
      } else if (shorterArea === height[right]) {
        right--;
        // when its same length both can be reduced
      } else if (height[right] === height[left]) {
        right--;
        left++;
      }
    }
    return maxLength;
  };

  console.log(intuitiveApproach());
};

//console.log(containerWithMostWater([1, 8, 6, 2, 5, 4, 8, 3, 7]));
