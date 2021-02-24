function stringRotation(str1,str2){
  if(str1.length === str2.length){
    let temp = str1+str1;
    for(let i =0;i<temp.length;i++){
      if(temp.slice(i,i+str1.length) === str2){
        return true
      }
    }
  }
  return false
}

console.log(stringRotation('amazon', 'azonma'))
console.log(stringRotation('amazon', 'azonam'))

//Linear time, I don't think that this can be optimized