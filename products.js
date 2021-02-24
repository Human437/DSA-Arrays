function products(arr) {
  let output = [];
  let product = 1;
  for (let i = 0; i < arr.length; i++) {
    product *= arr[i];
  }
  for (let j = 0; j < arr.length; j++) {
    output.push(product / arr[j]);
  }
  return output;
}

console.log(products([1, 3, 9, 4]));

// Linear time since all the loops used are one dimensional, I don't think that it can be optimized
