let dummyObject = {
  hello: 'How are you',
  bye: 'bye man',
};

for (const property in dummyObject) {
  if (dummyObject.hasOwnProperty(property)) {
    dummyObject[property] = 'rumon';
  }
}
console.log(dummyObject);
