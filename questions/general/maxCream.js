const maxIcecream = (costs, coins) => {
  const sortedCosts = costs.sort((a, b) => a - b);
  let total = 0;
  let counter = 0;
  for (let i = 0; i < sortedCosts.length; i++) {
    const currCost = sortedCosts[i];
    total += currCost;
    counter++;
    if (total === coins) {
      break;
    }
    if (total > coins) {
      counter -= 1;
      break;
    }
  }
  return counter;
};

//console.log(maxIcecream([1, 3, 2, 4, 1], 7));

const backspacecompare = (s, t) => {
  const backspaceCheck = (string) => {
    let stack = [];
    for (let i = 0; i < string.length; i++) {
      if (stack.length && string[i] === '#') {
        stack.pop();
      } else {
        if (string[i] !== '#') {
          stack.push(string[i]);
        }
      }
    }
    return stack.join('');
  };
  return backspaceCheck(s) === backspaceCheck(t);
};

// bowling score
const isWinner = (player1, player2) => {
  const getTotal = (pins) => {
    let total = 0;
    for (let i = 0; i < pins.length; i++) {
      const curr = pins[i];
      const prev = pins[i - 1];
      const prevprev = pins[i - 2];
      if (prev === 10 || prevprev === 10) {
        const double = curr * 2;
        total += double;
      } else {
        total += curr;
      }
    }
    return total;
  };

  const player1Score = getTotal(player1);
  const player2Score = getTotal(player2);
  return player1Score > player2Score ? 1 : player2Score > player1Score ? 2 : 0;
};

//console.log(isWinner([5, 10, 3, 2], [6, 5, 7, 3]));
