const findRelativeRanks = (score) => {
  const badApproach = () => {
    const ranks = ['Gold Medal', 'Silver Medal', 'Bronze Medal'];
    let rankIndex = 0;
    let scoreByIndex = [];
    for (let index in score) {
      scoreByIndex.push({
        index: Number(index),
        rank: score[index],
      });
    }
    scoreByIndex.sort((a, b) => b.rank - a.rank);
    for (let index in scoreByIndex) {
      if (rankIndex === 3) {
        scoreByIndex[index] = {
          ...scoreByIndex[index],
          rankState: Number(index) + 1,
        };
      } else {
        const newObject = {
          ...scoreByIndex[index],
          rankState: ranks[rankIndex],
        };
        scoreByIndex[index] = newObject;
        rankIndex++;
      }
    }
    // reconstruction
    let resultArray = new Array(score.length).fill('');
    for (let index in scoreByIndex) {
      resultArray[scoreByIndex[index].index] =
        scoreByIndex[index].rankState.toString();
    }
    return resultArray;
  };

  const optimizedApproach = () => {
    const ranks = ['Gold Medal', 'Silver Medal', 'Bronze Medal'];
    let scoreIndex = [...score].map((item, index) => {
      return {
        num: item,
        index: index,
      };
    });
    console.log(scoreIndex);
    let sortedScore = [...score].sort((a, b) => b - a);
    let newArray = [...sortedScore].map((item, index) => {
      if (index === 0) {
        return (item = ranks[0]);
      } else if (index === 1) {
        return (item = ranks[1]);
      } else if (index === 2) {
        return (item = ranks[2]);
      } else {
        return (item = (index + 1).toString());
      }
    });
    console.log(newArray);
  };

  console.log(optimizedApproach());
};

console.log(findRelativeRanks([10, 3, 8, 9, 4]));
