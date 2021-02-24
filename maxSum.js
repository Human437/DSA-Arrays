function maxSum(arr) {
  let maxSum = 0;
  let currentSum = 0;
  for (let i = 0; i < arr.length; i++) {
    currentSum += arr[i];
    if (currentSum > maxSum) {
      maxSum = currentSum;
    }
  }
  return maxSum;
}

console.log(maxSum([4, 6, -3, 5, -2, 1]));

// Linear time, doesn't need optimization since I don't think that it can be constant time
