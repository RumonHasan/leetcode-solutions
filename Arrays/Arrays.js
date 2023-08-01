const arrayQuirks = () => {
  // note arrays are also some form of objects in js
  let array = [1, 3, 4, 5, 5, 6];
  console.log(array);
  array.someProperty = 'rumon';
  console.log(array);
  let arrayObjectEntries = Object.entries(array);
  console.log(arrayObjectEntries);
};
