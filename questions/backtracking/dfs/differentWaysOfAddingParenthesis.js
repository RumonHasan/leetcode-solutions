const differentWaysOfAddingParenthesis = (expression) => {
  const cache = new Map();

  const calculate = (left, operator, right) => {
    let result = 0;
    switch (operator) {
      case '+':
        result = left + right;
        break;
      case '-':
        result = left - right;
        break;
      case '*':
        result = left * right;
    }

    return result;
  };

  const isOperator = (expression) => {
    return expression === '+' || expression === '-' || expression === '*';
  };

  // main dfs function
  const dfs = (expression) => {
    // returning cached result if there is any
    if (cache.has(expression)) {
      return cache.get(expression);
    }

    let finalResult = [];

    // for single value if its a number then no need for partition
    if (!isNaN(expression)) {
      const num = parseInt(expression);
      finalResult = [num];
      return finalResult;
    } else {
      // for proper combinations where there is more than one expression
      for (let index = 0; index < expression.length; index++) {
        const currExpression = expression[index];

        if (isOperator(currExpression)) {
          // only enter the recursive chain if the operator is a sign
          const leftExpression = expression.slice(0, index);
          const rightExpression = expression.slice(
            index + 1,
            expression.length
          );

          // the dfs functions will be taking in the expression slices and returning the sub results that will be accumulated in the final results
          const left = dfs(leftExpression);
          const right = dfs(rightExpression);

          // divide and conquer to calculate the expression only when there is expressions on both sides and they are more than the length of one
          for (const l of left) {
            for (const r of right) {
              const calculatedResult = calculate(l, currExpression, r);
              finalResult.push(calculatedResult);
            }
          }
        }
      }
    }
    cache.set(expression, finalResult);
    return finalResult;
  };

  return dfs(expression); // will return the final array of results containing the calculated expression in every recursive chain
};

/**
 * Using general dfs memoization solution to calculate all valid combinations of expressions to get the final result
 * every single result arising from plus minus or multiplication will be returned in the final calculation
 * Caching will be done based on the expression count as key and the resulting array as the value
 */
console.log(differentWaysOfAddingParenthesis('2*3-4*5'));
