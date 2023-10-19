const numSubarraysWithSum = (nums, goal) => {
  const bruteForce = () => {
    let counter = 0;
    for (let index = 0; index < nums.length; index++) {
      let main = nums[index];
      let subtotal = main;
      if (subtotal === goal) counter++;
      for (let subndex = index + 1; subndex < nums.length; subndex++) {
        let secondary = nums[subndex];
        subtotal += secondary;
        if (subtotal === goal) {
          counter++;
        }
      }
    }
    return counter;
  };

  //   console.log(bruteForce());
};

//console.log(numSubarraysWithSum([0, 0, 0, 0, 0], 0));
