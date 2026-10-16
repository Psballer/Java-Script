const prompt = require ("prompt-sync")();
while(true){
let number = Number(prompt("Enter a number: "));
if(Number.isNaN(number)){
    console.log("Enter a vaild number: ")
} else if (number > 30) {
        console.log("number cannot be more than 30. Try again");
        } else if (number <= 0){
}else{

for(let index = 1; index <= number; index++){ 
    if(index % 2 == 0){
    console.log(" # # # #")

    }else{
        console.log("# # # #")
    }
    }     
     break;  
   }    
 }

