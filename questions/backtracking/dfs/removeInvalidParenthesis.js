const removeInvalidParenthesis = (s) => {
  let result = []; // final result variabl with all the valid combination
  const open = '(';
  const close = ')';
  // pre calculate the leftRem and rightRem to find any imbalanced numbers
  let rightRem = 0;
  let leftRem = 0;

  // gets the discrepencies and find out which closing bracket is extra
  for (let i = 0; i < s.length; i++) {
    const currChar = s[i];
    if (currChar === open) {
      leftRem++;
    } else {
      if (leftRem > 0) {
        leftRem--;
      } else {
        rightRem++;
      }
    }
  }

  // main backtracking function that will create all the substring combination.. caching not required since all paths need to be returned
  const backtrack = (
    currIndex,
    leftRem,
    rightRem,
    openCount,
    closeCount,
    subset
  ) => {
    // main base case when the string should be added
    if (currIndex === s.length) {
      if (openCount === closeCount && leftRem === 0 && rightRem === 0) {
        result.push(subset);
      }
      return;
    }

    let currChar = s[currIndex]; // current bracket char

    // main recursive calls will be added here for each case
    if (currChar !== open && currChar !== close) {
      // not a bracket so the call remains the same
      backtrack(
        currIndex + 1,
        leftRem,
        rightRem,
        openCount,
        closeCount,
        subset + currChar
      );
    } else if (currChar === open) {
      if (leftRem > 0) {
        // if there is any left bracket left then remove it
        backtrack(
          currIndex + 1,
          leftRem - 1,
          rightRem,
          openCount,
          closeCount,
          subset
        );
      }
      backtrack(
        currIndex + 1,
        leftRem,
        rightRem,
        openCount + 1,
        closeCount,
        subset + currChar
      );
    } else {
      if (rightRem > 0) {
        backtrack(
          currIndex + 1,
          leftRem,
          rightRem - 1,
          openCount,
          closeCount,
          subset
        );
      }
      if (openCount > closeCount) {
        // only run dfs if current closing bracket needs open bracket
        backtrack(
          currIndex + 1,
          leftRem,
          rightRem,
          openCount,
          closeCount + 1,
          subset + currChar
        );
      }
    }
  };

  backtrack(0, leftRem, rightRem, 0, 0, ''); // initial dfs call
  return [...new Set(result)]; // final result that will not contain any duplicates
};

// return the successful collection of proper combination of valid parenthesis once the invalid brackets are moved
console.log(removeInvalidParenthesis('(a)())()'));
