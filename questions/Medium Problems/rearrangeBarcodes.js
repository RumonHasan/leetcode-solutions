const rearrangeBarcodes = (barcodes) => {
  // getting the total occurence of barcode digits in order for different segregation
  let barMap = new Map();
  for (let index = 0; index < barcodes.length; index++) {
    const barcode = barcodes[index];
    if (barMap.has(barcode)) {
      barMap.set(barcode, barMap.get(barcode) + 1);
    } else {
      barMap.set(barcode, 1);
    }
  }
  console.log(barMap);
};
// note // rearrange barcodes so that no two adjacent barcodes are the same in terms of their length
console.log(rearrangeBarcodes([1, 1, 1, 2, 2, 2]));
