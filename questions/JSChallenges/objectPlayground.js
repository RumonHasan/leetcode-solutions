const baseObject = [
  {
    mainKey: 'rumon',
    subKey: 'yo',
  },
];

const newObjectVal = {
  rumon: 'king',
};

const newArray = baseObject.map((item) => {
  // basically updating the object with a new item value
  if (newObjectVal[item.mainKey]) {
    return {
      ...item,
      subKey: newObjectVal[item.mainKey],
    };
  } else {
    return item;
  }
});
console.log(newArray);
