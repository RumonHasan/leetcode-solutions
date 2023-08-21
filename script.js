console.log('aya');

const example = () => {
  let array = [1, 2, 3, 4, 55, 6];

  // loop comes in
  for (let index = 0; index < array.length; index++) {
    const value = array[index];
    array[index] = array[index] + 5;
  }
  console.log(array);

  // objects
  let ayaObject = {
    name: 'aya tsujino',
    age: 26,
    dob: 'oct29',
  };

  console.log(ayaObject.dob);
};

example();
