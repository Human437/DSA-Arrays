function mergeArray(arr1, arr2) {
  let mergedArray = [];
  i = 0;
  j = 0;
  while (i < arr1.length && j < arr2.length) {
    if (arr1[i] < arr2[j]) {
      mergedArray.push(arr1[i]);
      i++;
    } else {
      mergedArray.push(arr2[j]);
      j++;
    }
  }

  while (i < arr1.length) {
    mergedArray.push(arr1[i]);
    i++;
  }

  while (j < arr2.length) {
    mergedArray.push(arr2[j]);
    j++;
  }

  return mergedArray;
}

console.log(mergeArray([1, 3, 6, 8, 11], [2, 3, 5, 8, 9, 10]));

//Linear time since multiple non nested loops are used, I don't think it can be optimized
