const averageWaitingTime = (customers) => {
  const intuitiveApproach = () => {
    let collection = [];
    let waitTime = customers[0][0] + customers[0][1] - customers[0][0];
    let makeTime = customers[0][0] + customers[0][1];
    collection.push(waitTime);
    for (let index = 1; index < customers.length; index++) {
      if (makeTime < customers[index][0]) {
        makeTime = customers[index][0] + customers[index][1];
        waitTime = makeTime - customers[index][0];
      } else {
        waitTime = customers[index][1] + makeTime - customers[index][0];
        makeTime = makeTime + customers[index][1];
      }
      collection.push(waitTime);
    }
    return collection.reduce((a, b) => a + b) / collection.length;
  };
};

// console.log(
//   averageWaitingTime([
//     [5, 2],
//     [5, 4],
//     [10, 3],
//     [20, 1],
//   ])
// );
