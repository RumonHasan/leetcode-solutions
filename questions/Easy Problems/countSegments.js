const countSegments = (s) => {
  if (s === '') {
    return 0;
  }
  let string = s.split(' ').filter((item) => item !== '');
  return string.length;
};

//console.log(countSegments(''));
