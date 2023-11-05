const largestOddInString = (num) => {
  let end = num.length - 1;
  while (end >= 0) {
    const lastDigit = parseInt(num[end]);
    if (lastDigit % 2 === 1) return num.slice(0, end + 1);
    end--;
  }
  return '';
};

//console.log(largestOddInString('3542'));
