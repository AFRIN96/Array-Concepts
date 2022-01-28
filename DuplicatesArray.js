const array = [1, 2, 1, 4, 5, 5, 4,3]
 const duplicates= (arr)=>
     array.filter((item, index)=> arr.indexOf(item) !== index)
 const duplicateNum = duplicates(array);
 console.log(duplicateNum)