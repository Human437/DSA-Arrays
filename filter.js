function filter(arr) {
  let newArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > 5) {
      newArr.push(arr[i]);
    }
  }
  return newArr;
}

console.log(filter([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));
// Linear time, doesn't need optimization since I don't think that it can be constant time
