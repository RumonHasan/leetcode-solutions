const generate = (numRows) => {
  const generalIntuitiveApproach = () => {
    let pascalsTriangle = [];
    for (let index = 1; index <= numRows; index++) {
      let subArray = new Array(index).fill(1);
      if (subArray.length < 3) {
        pascalsTriangle.push(subArray);
      } else {
        for (let subIndex = 0; subIndex < subArray.length; subIndex++) {
          const aboveLeft = pascalsTriangle[index - 1 - 1][subIndex - 1];
          const aboveRight = pascalsTriangle[index - 1 - 1][subIndex];
          if (aboveLeft && aboveRight) {
            subArray[subIndex] = aboveLeft + aboveRight;
          }
        }
        pascalsTriangle.push(subArray);
      }
    }
    return pascalsTriangle;
  };
};

// console.log(generate(5));
