const maximumGain = (s, x, y) => {
  const intuitiveSolution = () => {
    let xString = 'ab';
    let yString = 'ba';
    let maxPoints = 0;
    let bigString = x >= y ? xString : yString;
    let bigPoint = x >= y ? x : y;
    let secondString = bigString === 'ab' ? 'ba' : 'ab';
    let secondPoint = x <= y ? x : y;

    const calculateSum = (string, point, localStack = []) => {
      let trackChar;
      let nonTrackChar;
      if (string === 'ab') {
        trackChar = string === 'ab' ? 'b' : 'a';
        nonTrackChar = string === 'ab' ? 'a' : 'b';
      } else {
        trackChar = string === 'ba' ? 'a' : 'b';
        nonTrackChar = string === 'ba' ? 'b' : 'a';
      }

      let points = 0;
      for (let i = 0; i < s.length; i++) {
        const char = s[i];
        if (trackChar === char) {
          if (localStack[localStack.length - 1] === nonTrackChar) {
            localStack.pop();
            points += point;
          } else {
            localStack.push(char);
          }
        } else {
          localStack.push(char);
        }
      }
      return {
        points: points,
        localStack: localStack,
      };
    };

    let localSumOne = calculateSum(bigString, bigPoint);
    maxPoints += localSumOne.points;
    s = localSumOne.localStack.join('');
    let { points } = calculateSum(secondString, secondPoint);
    maxPoints += points;
    return maxPoints;
  };
};

//console.log(maximumGain('aabbaaxybbaabb', 5, 4));
