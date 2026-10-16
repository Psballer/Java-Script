let number = [2,7,8,9]
for(let index = 0; index <=number.length; index++){
    for(let count = index+1; count <= number.length; count++){
        if(number[count] + number[index] == 9){
console.log([index,count]);
     }
  }
}
