function twoDArray(arr){
  let rowsWithNoZero =[]
  for(let i =0;i<arr.length;i++){
    let hasZero = false
    for(let j =0;j<arr[i].length;j++){
      if(arr[i][j] === 0){
        hasZero = true
      }
    }
    if (!hasZero){
      rowsWithNoZero.push(i)
    }
  }
  for(i=0;i<arr.length;i++){
    for(j=0;j<arr[i].length;j++){
      if(arr[i][j] === 0){
        for(let k = 0;k<arr.length;k++){
          arr[k][j]=0
        }
      }
    }
    if(!rowsWithNoZero.includes(i)){
      for(let a = 0;a<arr[i].length;a++){
        arr[i][a] = 0
      }
    }
  }
  
  return arr
}

console.log(twoDArray([[1,0,1,1,0],
                       [0,1,1,1,0],
                       [1,1,1,1,1],
                       [1,0,1,1,1],
                       [1,1,1,1,1]]))

// Polynomial time, O(n^3), this could possibly be optimized