const reformatNumber = (number) => {
  // ugly intuitive solution
  const inituitiveUglySolution = () => {
    const reformatNum = (digitExtract, remainder) => {
      const shiftExtract = (extract) => {
        return extract.split('').reverse().join('');
      };
      let extracts = [];
      let singleExtract = '';
      let endIndex = digitExtract.length - 1;
      let groupCounterCheck;
      let counter = 0;
      let check = false;
      if (remainder === 1) {
        groupCounterCheck = 2;
      } else if (remainder === 2) {
        groupCounterCheck = 1;
      }
      while (endIndex >= 0) {
        if (remainder === 1 || remainder === 2) {
          if (counter === 2 && !check) {
            extracts.unshift(shiftExtract(singleExtract));
            counter = 0;
            groupCounterCheck--;
            singleExtract = '';
          }
          if (groupCounterCheck === 0) {
            check = true;
            if (counter === 3) {
              extracts.unshift(shiftExtract(singleExtract));
              counter = 0;
              singleExtract = '';
            }
            singleExtract += digitExtract[endIndex];
            counter++;
            if (endIndex === 0) {
              extracts.unshift(shiftExtract(singleExtract));
            }
          } else {
            singleExtract += digitExtract[endIndex];
            counter++;
          }
        } else {
          // for groups of 3
          if (counter === 3) {
            extracts.unshift(shiftExtract(singleExtract));
            counter = 0;
            singleExtract = '';
          }
          singleExtract += digitExtract[endIndex];
          counter++;
          if (endIndex === 0) {
            extracts.unshift(shiftExtract(singleExtract));
          }
        }
        endIndex--;
      }
      return extracts;
    };
    let digitExtract = '';
    for (let index in number) {
      if (!isNaN(number[index]) && number[index] !== ' ') {
        digitExtract += number[index];
      }
    }
    // edge cases
    if (digitExtract.length === 2) {
      return digitExtract;
    } else if (digitExtract.length === 4) {
      return digitExtract.slice(0, 1 + 1) + '-' + digitExtract.slice(2, 3 + 1);
    }
    let grouped = reformatNum(digitExtract, digitExtract.length % 3);
    let finalResult = '';
    for (let index in grouped) {
      if (Number(index) === grouped.length - 1) {
        finalResult += grouped[index];
      } else {
        finalResult += grouped[index] + '-';
      }
    }
    return finalResult;
  };

  // chat gpt version optimized
  const chatGPTVersion = () => {
    const extractDigits = number.replace(/\D/g, ''); // Extract only digits from the input

    if (extractDigits.length === 2) {
      return extractDigits; // No formatting needed for 2 digits
    } else if (extractDigits.length === 4) {
      return extractDigits.slice(0, 2) + '-' + extractDigits.slice(2); // Format 4 digits as XX-XX
    }

    const formattedGroups = [];
    let startIndex = 0;
    while (startIndex < extractDigits.length) {
      if (extractDigits.length - startIndex === 4) {
        // If remaining digits are 4, format them as XX-XX
        formattedGroups.push(
          extractDigits.slice(startIndex, startIndex + 2) +
            '-' +
            extractDigits.slice(startIndex + 2)
        );
        break; // Done processing, exit the loop
      }
      formattedGroups.push(extractDigits.slice(startIndex, startIndex + 3)); // Group digits in sets of 3
      startIndex += 3;
    }

    return formattedGroups.join('-');
  };

  // my optmized version
  const personalOptimized = () => {
    let digits = '';
    let extracts = [];
    const formatExtract = (extract) => extract.split('').reverse().join('');
    for (let index in number) {
      if (!isNaN(number[index]) && number[index] !== ' ') {
        digits += number[index];
      }
    }
    let remainder = digits.length % 3;
    if (remainder === 1) {
      extracts.unshift(digits.substring(digits.length - 2, digits.length));
      extracts.unshift(digits.substring(digits.length - 4, digits.length - 2));
    } else if (remainder === 2) {
      extracts.unshift(digits.substring(digits.length - 2, digits.length));
    }
    let endIndex = 0;
    if (remainder === 1) {
      endIndex = digits.length - 4 - 1;
    } else if (remainder === 2) {
      endIndex = digits.length - 2 - 1;
    } else {
      endIndex = digits.length - 1;
    }
    let counter = 0;
    let singleExtract = '';
    while (endIndex >= 0) {
      if (counter === 3) {
        extracts.unshift(formatExtract(singleExtract));
        counter = 0;
        singleExtract = '';
      }
      singleExtract += digits[endIndex];
      if (endIndex === 0) {
        extracts.unshift(formatExtract(singleExtract));
      }
      counter++;
      endIndex--;
    }
    let result = '';
    for (let index in extracts) {
      if (Number(index) === extracts.length - 1) {
        result += extracts[index];
      } else {
        result += extracts[index] + '-';
      }
    }
    return result;
  };
};
//extracting digits based on grouping them into 3 and the ending groups will not have any single digits
//console.log(reformatNumber('123 4-5678'));
